# Galmuri

Outline fonts based on bitmap fonts in Nintendo DS.

## Preview

- Galmuri11<br>![Galmuri11](./docs/g11.png)
- Galmuri11 Bold<br>![Galmuri11 Bold](./docs/g11b.png)
- Galmuri9<br>![Galmuri9](./docs/g9.png)

## Supported Ranges

| Range                         | Galmuri11          | Galmuri11 Bold     | Galmuri9           |
|-------------------------------|--------------------|--------------------|--------------------|
| Basic Latin                   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Latin-1 Supplement            | :heavy_check_mark: | :x:                | :heavy_check_mark: |
| Latin Extended-A              | :heavy_check_mark: | :x:                | :heavy_check_mark: |
| Latin Extended-B              | :x:                | :x:                | :x:                |
| Greek and Coptic              | :heavy_check_mark: | :x:                | :x:                |
| Cyrillic                      | :heavy_check_mark: | :x:                | :x:                |
| General Punctuation           | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Geometric Shapes              | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| CJK Symbols and Punctuation   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |
| Hiragana                      | :heavy_check_mark: | :x:                | :heavy_check_mark: |
| Katakana                      | :heavy_check_mark: | :x:                | :heavy_check_mark: |
| Hangul Compatibility Jamo     | :heavy_check_mark: | :heavy_check_mark:[^old] | :heavy_check_mark: |
| CJK Unified Ideographs        | :heavy_check_mark:[^jis] | :x:                | :heavy_check_mark:[^jis] |
| Hangul Syllables              | :heavy_check_mark:[^han] | :heavy_check_mark:[^han] | :heavy_check_mark:[^han] |
| CJK Compatibility Ideographs  | :heavy_check_mark:[^ks] | :x:                | :x:                |
| Vertical Forms                | :heavy_check_mark: | :x:                | :heavy_check_mark: |
| CJK Compatibility Forms       | :heavy_check_mark: | :x:                | :heavy_check_mark: |
| Halfwidth and Fullwidth Forms | :heavy_check_mark: | :x:                | :heavy_check_mark: |

[^old]: Excluding old hangul.
[^han]: Only 2,780 hangul syllables included in [Adobe-KR-0](https://github.com/adobe-type-tools/Adobe-KR#supplement-0adobe-kr-0).
[^jis]: Only 6,355 CJK unified ideographs included in JIS X 0208.
[^ks]: Only 268 CJK compatibility ideographs included in KS X 1001.

## Todo
- [ ] JIS에 포함되지 않는 KS X 1001 한중일 호환용 한자 268자 추가
- [ ] JIS에 포함되지 않는 KS X 1001 한중일 통합 한자 536자 추가
- [ ] Adobe-KR-1에 포함된 한글 음절 1,578자 추가

----

Nintendo DS is a trademark of Nintendo.
