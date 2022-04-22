# Galmuri

[![License](https://img.shields.io/github/license/quiple/galmuri)](https://github.com/quiple/galmuri/blob/main/OFL.md) [![GitHub Workflow Status](https://github.com/quiple/galmuri/workflows/Distribute/badge.svg)](https://github.com/quiple/galmuri/actions/workflows/dist.yml) [![jsDelivr Hits](https://data.jsdelivr.com/v1/package/gh/quiple/galmuri/badge?style=rounded)](https://www.jsdelivr.com/package/gh/quiple/galmuri)

Pixel style outline typefaces based on bitmap fonts used in Nintendo DS. But the Galmuri11 Bold is purely my work based on the Galmuri11. And Galmuri7's Hangul syllables are based on [Yamche](https://www.romhacking.net/fonts/135)'s.

## Preview

- Galmuri11 (12px size)<br><br>![Galmuri11](./files/g11.png#gh-light-mode-only)![Galmuri11](./files/g11l.png#gh-dark-mode-only)<br><br>
- Galmuri11 Bold (12px size)<br><br>![Galmuri11 Bold](./files/g11b.png#gh-light-mode-only)![Galmuri11 Bold](./files/g11bl.png#gh-dark-mode-only)<br><br>
- Galmuri9 (10px size)<br><br>![Galmuri9](./files/g9.png#gh-light-mode-only)![Galmuri9](./files/g9l.png#gh-dark-mode-only)<br><br>

## Supported Ranges

| Range                         | Galmuri11          | Galmuri11 Bold     | Galmuri9           |
|-------------------------------|--------------------|--------------------|--------------------|
| Basic Latin                   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Latin-1 Supplement            | :heavy_check_mark: |                    | :heavy_check_mark: |
| Latin Extended-A              | :heavy_check_mark: |                    | :heavy_check_mark: |
| Latin Extended-B              |                    |                    |                    |
| Greek and Coptic              | :heavy_check_mark: |                    |                    |
| Cyrillic                      | :heavy_check_mark: |                    |                    |
| General Punctuation           | :heavy_check_mark:[^ellipsis] | :heavy_check_mark:[^ellipsis] | :heavy_check_mark:[^ellipsis] |
| Geometric Shapes              | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| CJK Symbols and Punctuation   | :heavy_check_mark:[^bracket] | :heavy_check_mark:[^bracket] | :heavy_check_mark:[^bracket] |
| Hiragana                      | :heavy_check_mark: |                    | :heavy_check_mark: |
| Katakana                      | :heavy_check_mark: |                    | :heavy_check_mark: |
| Hangul Compatibility Jamo     | :heavy_check_mark: | :heavy_check_mark:[^old] | :heavy_check_mark: |
| CJK Unified Ideographs        | :heavy_check_mark:[^jis] |                    | :heavy_check_mark:[^jis] |
| Hangul Syllables              | :heavy_check_mark:[^han-1] | :heavy_check_mark:[^han] | :heavy_check_mark:[^han] |
| CJK Compatibility Ideographs  | :heavy_check_mark:[^ks] |                    |                    |
| Vertical Forms                | :heavy_check_mark: |                    | :heavy_check_mark: |
| CJK Compatibility Forms       | :heavy_check_mark: |                    | :heavy_check_mark: |
| Halfwidth and Fullwidth Forms | :heavy_check_mark: |                    | :heavy_check_mark: |

[^old]: Excluding Old Hangul Jamo.
[^han]: Only 2,780 Hangul Syllables included in [Adobe-KR-0](https://github.com/adobe-type-tools/Adobe-KR#supplement-0adobe-kr-0).
[^han-1]: Only 4,358 Hangul Syllables included in [Adobe-KR-0](https://github.com/adobe-type-tools/Adobe-KR#supplement-0adobe-kr-0) and [Adobe-KR-1](https://github.com/adobe-type-tools/Adobe-KR#supplement-1adobe-kr-1).
[^jis]: Only 6,355 CJK Unified Ideographs included in JIS X 0208.
[^ks]: Only 268 CJK Compatibility Ideographs included in KS X 1001.
[^ellipsis]: Unlike the Unicode Standard, Two Dot Leader (`U+2025`) and Horizontal Ellipsis (`U+2026`) are made in vertically centered like the type it is often used in China, Japan and Korea.
[^bracket]: Unlike the Unicode Standard, brackets (`U+3008`-`U+3011`, `U+3014`-`U+301B`) are made in halfwidth like the type it is often used in Korea.

## Use as Web Fonts

### HTML `<link>`

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/quiple/galmuri/dist/galmuri.css">
```

### CSS `@import`

```css
@import url('https://cdn.jsdelivr.net/gh/quiple/galmuri/dist/galmuri.css');
```

### CSS Rules to Specify Families

```css
font-family: 'Galmuri11', sans-serif;
font-family: 'Galmuri9', sans-serif;
font-family: 'Galmuri7', sans-serif;
```

## To Do

- [ ] Adobe-KR-0에 포함된 한글 음절 중 KS X 1001에 포함되지 않는 430자 추가
  - [x] Galmuri11
  - [x] Galmuri11 Bold
  - [x] Galmuri9
  - [ ] Galmuri7
- [ ] Adobe-KR-1에 포함된 한글 음절 1,578자 추가
  - [x] Galmuri11
  - [ ] Galmuri11 Bold
  - [ ] Galmuri9
  - [ ] Galmuri7
- [ ] KS X 1001에 포함된 한중일 호환용 한자 중 JIS X 0208에 포함되지 않는 268자 추가
  - [x] Galmuri11
  - [ ] Galmuri9
  - [ ] Galmuri7
- [ ] KS X 1001에 포함된 한중일 통합 한자 중 JIS X 0208에 포함되지 않는 536자 추가
  - [ ] Galmuri11
  - [ ] Galmuri9
  - [ ] Galmuri7

----

Nintendo DS is a trademark of Nintendo.
