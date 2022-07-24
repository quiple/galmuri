![Cover](files/cover_light.png#gh-light-mode-only)![Cover](files/cover_dark.png#gh-dark-mode-only)

<p align="center">
  <a href="https://www.npmjs.com/package/galmuri" target="_blank"><img src="https://img.shields.io/npm/v/galmuri" alt="npm Package Version"></a>
  <a href="https://github.com/quiple/galmuri/blob/main/OFL.md"><img src="https://img.shields.io/github/license/quiple/galmuri" alt="License"></a>
  <a href="https://github.com/quiple/galmuri/actions/workflows/release.yml"><img src="https://github.com/quiple/galmuri/workflows/release/badge.svg" alt="GitHub Workflow Status"></a>
  <a href="https://github.com/quiple/galmuri/releases/latest"><img src="https://img.shields.io/github/downloads/quiple/galmuri/total" alt="GitHub all releases"></a>
  <a href="https://www.jsdelivr.com/package/npm/galmuri?version=latest" target="_blank"><img src="https://data.jsdelivr.com/v1/package/npm/galmuri/badge?style=rounded" alt="jsDelivr Hits"></a>
</p>

Bitmap fonts based on the font design from Nintendo DS. With additional characters support.

All Hangul syllables except for 2,355 Hangul syllables in Galmuri11 and Galmuri9, all Hangul glyphs in Galmuri7 and All glyphs in Galmuri11 Bold and Galmuri11 Condensed are my pure creations.

## Character Preview

- [Galmuri Character Preview](https://galmuri.quiple.dev/glyphs)

## Summary of Supported Ranges

| Range                         | Galmuri11          | Galmuri11 Bold     | Galmuri11 Condensed | Galmuri9           | Galmuri7           |
|-------------------------------|--------------------|--------------------|---------------------|--------------------|--------------------|
| Hiragana                      | :heavy_check_mark: |                    | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |
| Katakana                      | :heavy_check_mark: |                    | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |
| Hangul Compatibility Jamo     | :heavy_check_mark: | :heavy_check_mark:[^old] | :heavy_check_mark:[^old] | :heavy_check_mark: | :heavy_check_mark:[^old] |
| CJK Unified Ideographs        | :heavy_check_mark:[^jis] |                    |                     | :heavy_check_mark:[^jis] | :heavy_check_mark:[^jis] |
| Hangul Syllables              | :heavy_check_mark: | :heavy_check_mark:[^han] | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark:[^han-1] |
| CJK Compatibility Ideographs  | :heavy_check_mark:[^ks] |                     |                    | :heavy_check_mark:[^ks] |                    |

[^old]: Excluding Old Hangul Jamo.
[^han]: Only 2,780 Hangul Syllables included in [Adobe-KR-0](https://github.com/adobe-type-tools/Adobe-KR#supplement-0adobe-kr-0).
[^han-1]: Only 4,358 Hangul Syllables included in [Adobe-KR-0](https://github.com/adobe-type-tools/Adobe-KR#supplement-0adobe-kr-0) and [Adobe-KR-1](https://github.com/adobe-type-tools/Adobe-KR#supplement-1adobe-kr-1).
[^jis]: Only 6,355 CJK Unified Ideographs included in JIS X 0208.
[^ks]: Only 268 CJK Compatibility Ideographs included in KS X 1001.

## Use as Web Fonts

### HTML

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css">
```

### CSS

```css
@import url('https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css');
```

### CSS Rules to Specify Families

```css
font-family: Galmuri11, sans-serif;
font-family: Galmuri9, sans-serif;
font-family: Galmuri7, sans-serif;
```

## Install as npm package

```bash
npm i galmuri
```

## Sponsor

<img src="https://raw.githubusercontent.com/quiple/galmuri/main/files/donate.png" alt="Donate" style="height:240px">

----

<details>
<summary>Legal Stuff</summary>

All Hangul syllables except for 2,355 Hangul syllables in Galmuri11 and Galmuri9, all Hangul glyphs in Galmuri7 and All glyphs in Galmuri11 Bold and Galmuri11 Condensed are my pure creations. But it does not mean that Nintendo owns the rights to glyphs that I did not create and I'm violating Nintendo's rights.

At least in the US and South Korea, the font file and code are copyrighted, but the font design cannot be copyrighted. And likewise in both countries, bitmap fonts in general cannot be copyrighted. See also: [#](https://int10h.org/oldschool-pc-fonts/readme/#legal_stuff), [#](http://www.faqs.org/faqs/fonts-faq/part2/) Also, Galmuri's outline (scalable) font file is purely my creation for the first time, so I own the copyright, and I do not claim any rights to the "font design".

Galmuri11과 Galmuri9의 경우 한글 음절 중 2,355자를 제외한 모든 글리프, Galmuri7의 경우 모든 한글 글리프, Galmuri11 Bold와 Galmuri11 Condensed의 경우 모든 글리프가 Nintendo와 관련이 없는 저의 순수한 창작물입니다. 그러나 이는 제가 창작하지 않은 글리프의 권리가 Nintendo에게 있으며 제가 Nintendo의 권리를 침해하고 있다는 의미가 아닙니다.

적어도 미국과 대한민국에서는 폰트 파일 및 코드는 저작권을 갖지만 서체 디자인은 저작권을 갖지 못합니다. 그리고 마찬가지로 두 국가 모두에서 일반적으로 비트맵 폰트는 저작권을 갖지 못합니다. 윤곽선(스케일러블) 폰트가 아닌 비트맵 또는 그레이스케일 폰트 파일의 경우, 실질적으로 이미지 파일과 동일하므로 프로그램 저작물로서 보호되지 않습니다. 참조: [#](https://int10h.org/oldschool-pc-fonts/readme/#legal_stuff), [#](http://kasanlaw.com/bbs/board.php?bo_table=sub04_2&wr_id=226) 또한 Galmuri의 윤곽선(스케일러블) 폰트 파일은 순전히 제가 처음 만든 것이기에 제게 저작권이 있고, 저는 ‘서체 디자인’에 대한 권리를 주장하지 않습니다.
</details>

Nintendo DS is a trademark of Nintendo. This project has no relation with Nintendo.
