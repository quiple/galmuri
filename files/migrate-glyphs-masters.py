#!/usr/bin/env python3
"""Merge the Galmuri BDF fonts into their matching Galmuri.glyphs masters."""

from __future__ import annotations

import argparse
import os
import re
import stat
import tempfile
from dataclasses import dataclass
from datetime import datetime, timezone
from functools import cached_property
from pathlib import Path


MASTER_SOURCES = {
    "D5D059AA-4C23-4C0C-AD8D-F4F6FD545972": "Galmuri7.bdf",
    "7A2ECE36-6EC7-407E-89AA-72FA5DAD4E88": "Galmuri9.bdf",
    "m01": "Galmuri11.bdf",
    "BF8C3E40-66B3-4D52-A7D0-EA691F6EED4D": "Galmuri14.bdf",
}
TARGET_MASTER_IDS = tuple(master_id for master_id in MASTER_SOURCES if master_id != "m01")
DEFAULT_EMPTY_WIDTH = 600


@dataclass(frozen=True)
class BDFGlyph:
    name: str
    encoding: int
    width: int
    bbx: tuple[int, int, int, int]
    bitmap: tuple[str, ...]

    def pixels(self) -> list[tuple[int, int]]:
        box_width, box_height, x_offset, y_offset = self.bbx
        if len(self.bitmap) != box_height:
            raise ValueError(
                f"{self.name}: BBX height is {box_height}, but bitmap has "
                f"{len(self.bitmap)} rows"
            )

        pixels: list[tuple[int, int]] = []
        for row_index, row_hex in enumerate(self.bitmap):
            row_value = int(row_hex, 16) if row_hex else 0
            row_bits = len(row_hex) * 4
            if row_bits < box_width:
                raise ValueError(f"{self.name}: bitmap row is narrower than its BBX")
            y = (y_offset + box_height - row_index - 1) * 100
            for column in range(box_width):
                if row_value & (1 << (row_bits - column - 1)):
                    pixels.append(((x_offset + column) * 100, y))
        return pixels


@dataclass
class BDFFont:
    path: Path
    glyphs: list[BDFGlyph]

    @cached_property
    def by_encoding(self) -> dict[int, BDFGlyph]:
        return {glyph.encoding: glyph for glyph in self.glyphs if glyph.encoding >= 0}

    @cached_property
    def notdef(self) -> BDFGlyph:
        matches = [glyph for glyph in self.glyphs if glyph.encoding == -1]
        if len(matches) != 1 or matches[0].name != ".notdef":
            raise ValueError(f"{self.path}: expected exactly one unencoded .notdef")
        return matches[0]


def parse_bdf(path: Path) -> BDFFont:
    glyphs: list[BDFGlyph] = []
    current: dict[str, object] | None = None
    in_bitmap = False

    with path.open(encoding="utf-8") as source:
        for raw_line in source:
            line = raw_line.rstrip("\n")
            if line.startswith("STARTCHAR "):
                if current is not None:
                    raise ValueError(f"{path}: nested STARTCHAR")
                current = {"name": line.removeprefix("STARTCHAR "), "bitmap": []}
                in_bitmap = False
            elif current is None:
                continue
            elif line.startswith("ENCODING "):
                current["encoding"] = int(line.split()[1])
            elif line.startswith("DWIDTH "):
                current["width"] = int(line.split()[1])
            elif line.startswith("BBX "):
                current["bbx"] = tuple(map(int, line.split()[1:5]))
            elif line == "BITMAP":
                in_bitmap = True
            elif line == "ENDCHAR":
                for field in ("name", "encoding", "width", "bbx", "bitmap"):
                    if field not in current:
                        raise ValueError(f"{path}: {current.get('name')} has no {field}")
                glyphs.append(
                    BDFGlyph(
                        name=str(current["name"]),
                        encoding=int(current["encoding"]),
                        width=int(current["width"]),
                        bbx=tuple(current["bbx"]),  # type: ignore[arg-type]
                        bitmap=tuple(current["bitmap"]),  # type: ignore[arg-type]
                    )
                )
                current = None
                in_bitmap = False
            elif in_bitmap:
                current["bitmap"].append(line)  # type: ignore[union-attr]

    if current is not None:
        raise ValueError(f"{path}: unterminated glyph")
    encodings = [glyph.encoding for glyph in glyphs]
    if len(encodings) != len(set(encodings)):
        raise ValueError(f"{path}: duplicate ENCODING values")
    return BDFFont(path, glyphs)


def glyph_name(block: str) -> str:
    match = re.search(r"^glyphname = (.*);$", block, re.MULTILINE)
    if not match:
        raise ValueError("Glyph block has no glyphname")
    return match.group(1).strip('"')


def glyph_unicodes(block: str) -> tuple[int, ...]:
    match = re.search(r"^unicode = (.*);$", block, re.MULTILINE)
    if not match:
        return ()
    return tuple(map(int, re.findall(r"\d+", match.group(1))))


def find_matching(text: str, opening: int, opener: str, closer: str) -> int:
    depth = 0
    quoted = False
    escaped = False
    for index in range(opening, len(text)):
        char = text[index]
        if quoted:
            if escaped:
                escaped = False
            elif char == "\\":
                escaped = True
            elif char == '"':
                quoted = False
            continue
        if char == '"':
            quoted = True
        elif char == opener:
            depth += 1
        elif char == closer:
            depth -= 1
            if depth == 0:
                return index
    raise ValueError(f"Unmatched {opener} in Glyphs source")


def braced_items(text: str) -> list[str]:
    items: list[str] = []
    index = 0
    while index < len(text):
        if text[index] != "{":
            index += 1
            continue
        closing = find_matching(text, index, "{", "}")
        items.append(text[index : closing + 1])
        index = closing + 1
    return items


def layer_id(layer: str) -> str:
    match = re.search(r'^layerId = (?:"([^"]+)"|([^;]+));$', layer, re.MULTILINE)
    if not match:
        raise ValueError("Layer block has no layerId")
    return (match.group(1) or match.group(2)).strip()


def split_layers(block: str) -> tuple[int, int, list[str]]:
    marker = block.find("layers = (")
    if marker < 0:
        raise ValueError(f"{glyph_name(block)} has no layers")
    opening = block.index("(", marker)
    closing = find_matching(block, opening, "(", ")")
    return opening, closing, braced_items(block[opening + 1 : closing])


def quoted_layer_id(master_id: str) -> str:
    return master_id if master_id == "m01" else f'"{master_id}"'


def empty_layer(master_id: str, width: int = DEFAULT_EMPTY_WIDTH) -> str:
    return "{\n" f"layerId = {quoted_layer_id(master_id)};\n" f"width = {width};\n" "}"


def pixel_layer(master_id: str) -> str:
    return (
        "{\n"
        f"layerId = {quoted_layer_id(master_id)};\n"
        "shapes = (\n"
        "{\n"
        "closed = 1;\n"
        "nodes = (\n"
        "(100,0,l),\n"
        "(100,100,l),\n"
        "(0,100,l),\n"
        "(0,0,l)\n"
        ");\n"
        "}\n"
        ");\n"
        "width = 100;\n"
        "}"
    )


def bdf_layer(master_id: str, glyph: BDFGlyph) -> str:
    components: list[str] = []
    for x, y in glyph.pixels():
        component = ["{", "alignment = -1;"]
        if x != 0 or y != 0:
            component.append(f"pos = ({x},{y});")
        component.extend(("ref = pixel;", "}"))
        components.append("\n".join(component))

    lines = ["{", f"layerId = {quoted_layer_id(master_id)};"]
    if components:
        lines.extend(("shapes = (", ",\n".join(components), ");"))
    lines.extend((f"width = {glyph.width * 100};", "}"))
    return "\n".join(lines)


def source_glyph(block: str, font: BDFFont) -> BDFGlyph | None:
    if glyph_name(block) == ".notdef":
        return font.notdef
    by_encoding = font.by_encoding
    for codepoint in glyph_unicodes(block):
        if codepoint in by_encoding:
            return by_encoding[codepoint]
    return None


def parse_component_layer(layer: str) -> tuple[int, list[tuple[int, int]]]:
    width_match = re.search(r"^width = (-?\d+);$", layer, re.MULTILINE)
    if not width_match:
        raise ValueError("Layer has no width")
    positions: list[tuple[int, int]] = []
    component_pattern = (
        r"\{\nalignment = -1;\n"
        r"(?:pos = \(-?\d+,-?\d+\);\n)?"
        r"ref = pixel;\n\}"
    )
    for component in re.findall(component_pattern, layer):
        position = re.search(r"^pos = \((-?\d+),(-?\d+)\);$", component, re.MULTILINE)
        positions.append((int(position.group(1)), int(position.group(2))) if position else (0, 0))
    return int(width_match.group(1)), positions


def verify_existing_11(block: str, font: BDFFont) -> bool:
    glyph = source_glyph(block, font)
    if glyph is None:
        return False
    _, _, layers = split_layers(block)
    layer = next((item for item in layers if layer_id(item) == "m01"), None)
    if layer is None:
        raise ValueError(f"{glyph_name(block)} has no 12px layer")
    width, positions = parse_component_layer(layer)
    expected = glyph.pixels()
    same_baseline_geometry = (
        len(positions) == len(expected)
        and all(actual_y == expected_y for (_, actual_y), (_, expected_y) in zip(positions, expected))
        and len({actual_x - expected_x for (actual_x, _), (expected_x, _) in zip(positions, expected)}) <= 1
    )
    if not same_baseline_geometry:
        raise ValueError(f"{glyph_name(block)} does not match Galmuri11.bdf")
    return True


def replace_target_layers(block: str, fonts: dict[str, BDFFont]) -> str:
    opening, closing, layers = split_layers(block)
    layers_by_id = {layer_id(layer): layer for layer in layers}
    if len(layers_by_id) != len(layers):
        raise ValueError(f"{glyph_name(block)} has duplicate layer IDs")

    for master_id in MASTER_SOURCES:
        if master_id not in layers_by_id:
            layers.append(empty_layer(master_id))
            layers_by_id[master_id] = layers[-1]

    name = glyph_name(block)
    for master_id in TARGET_MASTER_IDS:
        old_layer = layers_by_id[master_id]
        if name == "pixel":
            new_layer = pixel_layer(master_id)
        else:
            glyph = source_glyph(block, fonts[master_id])
            new_layer = bdf_layer(master_id, glyph) if glyph else old_layer
        layers[layers.index(old_layer)] = new_layer
        layers_by_id[master_id] = new_layer

    new_contents = "\n" + ",\n".join(layers) + "\n"
    return block[: opening + 1] + new_contents + block[closing:]


def new_glyph_block(codepoint: int, fonts: dict[str, BDFFont], timestamp: str) -> str:
    layers: list[str] = []
    for master_id in MASTER_SOURCES:
        glyph = fonts[master_id].by_encoding.get(codepoint)
        layers.append(bdf_layer(master_id, glyph) if glyph else empty_layer(master_id))
    glyph_name_value = f"uni{codepoint:04X}" if codepoint <= 0xFFFF else f"u{codepoint:X}"
    return (
        "{\n"
        f"glyphname = {glyph_name_value};\n"
        f'lastChange = "{timestamp}";\n'
        "layers = (\n"
        + ",\n".join(layers)
        + "\n);\n"
        f"unicode = {codepoint};\n"
        "}"
    )


def read_block(source, first_line: str) -> tuple[str, bool]:
    lines = [first_line]
    depth = first_line.count("{") - first_line.count("}")
    while True:
        if depth == 0:
            break
        line = source.readline()
        if not line:
            raise ValueError("Unexpected end of Glyphs source")
        lines.append(line)
        depth += line.count("{") - line.count("}")
        if depth == 0:
            break
    text = "".join(lines)
    has_comma = text.endswith("},\n")
    block = text[:-2] if has_comma else text.rstrip("\n")
    return block, has_comma


def scan_existing_codes(path: Path) -> set[int]:
    codes: set[int] = set()
    with path.open(encoding="utf-8") as source:
        for line in source:
            if line.startswith("unicode = "):
                codes.update(map(int, re.findall(r"\d+", line)))
    return codes


def iter_glyph_blocks(path: Path):
    with path.open(encoding="utf-8") as source:
        for line in source:
            if line == "glyphs = (\n":
                break
        else:
            raise ValueError(f"{path}: no glyphs array")

        while True:
            line = source.readline()
            if not line:
                raise ValueError(f"{path}: unterminated glyphs array")
            if line == ");\n":
                return
            if line != "{\n":
                raise ValueError(f"{path}: unexpected line in glyphs array: {line!r}")
            block, _ = read_block(source, line)
            yield block


def verify_migrated(path: Path, fonts: dict[str, BDFFont], expected_glyphs: int) -> None:
    seen_codes: set[int] = set()
    matched = {master_id: 0 for master_id in TARGET_MASTER_IDS}
    glyph_count = 0
    pixel_seen = False

    for block in iter_glyph_blocks(path):
        glyph_count += 1
        seen_codes.update(glyph_unicodes(block))
        name = glyph_name(block)
        _, _, layers = split_layers(block)
        layers_by_id = {layer_id(layer): layer for layer in layers}
        missing_layers = set(MASTER_SOURCES) - set(layers_by_id)
        if missing_layers:
            raise ValueError(f"{name} is missing master layers: {sorted(missing_layers)}")

        if name == "pixel":
            pixel_seen = True
            for master_id in TARGET_MASTER_IDS:
                if layers_by_id[master_id] != pixel_layer(master_id):
                    raise ValueError(f"pixel helper is invalid in {master_id}")
            continue

        for master_id in TARGET_MASTER_IDS:
            glyph = source_glyph(block, fonts[master_id])
            if glyph is None:
                continue
            width, positions = parse_component_layer(layers_by_id[master_id])
            if width != glyph.width * 100 or positions != glyph.pixels():
                raise ValueError(
                    f"{name} in {master_id} does not exactly match {fonts[master_id].path.name}"
                )
            matched[master_id] += 1

    source_codes = set().union(*(set(font.by_encoding) for font in fonts.values()))
    if not source_codes <= seen_codes:
        missing = sorted(source_codes - seen_codes)
        raise ValueError(f"Migrated file is missing source Unicode values: {missing}")
    if glyph_count != expected_glyphs:
        raise ValueError(f"Expected {expected_glyphs} glyphs, found {glyph_count}")
    if not pixel_seen:
        raise ValueError("Migrated file has no pixel helper glyph")
    for master_id in TARGET_MASTER_IDS:
        if matched[master_id] != len(fonts[master_id].glyphs):
            raise ValueError(
                f"{master_id}: matched {matched[master_id]} of "
                f"{len(fonts[master_id].glyphs)} BDF glyphs"
            )


def migrate(target: Path, dist_dir: Path) -> None:
    target_mode = stat.S_IMODE(target.stat().st_mode)
    fonts = {
        master_id: parse_bdf(dist_dir / filename)
        for master_id, filename in MASTER_SOURCES.items()
    }
    existing_codes = scan_existing_codes(target)
    source_codes = set().union(*(set(font.by_encoding) for font in fonts.values()))
    new_codes = sorted(source_codes - existing_codes)
    timestamp = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S +0000")

    output_path: Path | None = None
    existing_glyphs = 0
    verified_11 = 0
    inserted = False
    try:
        with target.open(encoding="utf-8") as source, tempfile.NamedTemporaryFile(
            "w", encoding="utf-8", dir=target.parent, delete=False
        ) as output:
            output_path = Path(output.name)
            for line in source:
                output.write(line)
                if line == "glyphs = (\n":
                    break
            else:
                raise ValueError(f"{target}: no glyphs array")

            while True:
                line = source.readline()
                if not line:
                    raise ValueError(f"{target}: unterminated glyphs array")
                if line == ");\n":
                    output.write(line)
                    break
                if line != "{\n":
                    raise ValueError(f"{target}: unexpected line in glyphs array: {line!r}")

                block, has_comma = read_block(source, line)
                name = glyph_name(block)
                _, _, old_layers = split_layers(block)
                old_11 = next(layer for layer in old_layers if layer_id(layer) == "m01")
                verified_11 += int(verify_existing_11(block, fonts["m01"]))

                if name == "pixel" and new_codes:
                    for codepoint in new_codes:
                        output.write(new_glyph_block(codepoint, fonts, timestamp) + ",\n")
                    inserted = True

                migrated = replace_target_layers(block, fonts)
                _, _, new_layers = split_layers(migrated)
                new_11 = next(layer for layer in new_layers if layer_id(layer) == "m01")
                if new_11 != old_11:
                    raise ValueError(f"Migration changed {name}'s existing 12px layer")
                output.write(migrated)
                output.write(",\n" if has_comma else "\n")
                existing_glyphs += 1

            for line in source:
                output.write(line)

        if new_codes and not inserted:
            raise ValueError("Could not insert new glyphs because the pixel glyph was not found")
        verify_migrated(output_path, fonts, existing_glyphs + len(new_codes))
        os.chmod(output_path, target_mode)
        os.replace(output_path, target)
        output_path = None
    finally:
        if output_path and output_path.exists():
            output_path.unlink()

    print(f"Verified {verified_11} Galmuri11 baselines without changing their 12px layers")
    print(f"Migrated {existing_glyphs} existing glyphs and added {len(new_codes)} new glyphs")
    for master_id, filename in MASTER_SOURCES.items():
        print(f"{master_id}: {filename} ({len(fonts[master_id].glyphs)} BDF glyphs)")


def main() -> None:
    repository = Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--target", type=Path, default=repository / "sources/Galmuri.glyphs")
    parser.add_argument("--dist-dir", type=Path, default=repository / "dist")
    args = parser.parse_args()
    migrate(args.target.resolve(), args.dist_dir.resolve())


if __name__ == "__main__":
    main()
