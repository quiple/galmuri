function progress(elem) {
  const font = elem.split('_')[0];
  const char = elem.split('_')[1];
  const fontRe = /(?<=^STARTCHAR U\+)[\d\w]{4}/gm;
  const charRe = /(?<=^0x[\d\w]{2,4}(\t|\s{2})0x)[\d\w]{4}/gm;

  fetch('./dist/' + font + '.bdf').then(async function (res) {
    const text = await res.text();
    let fontArr = text.match(fontRe);

    fetch('./files/charsets/' + char + '.txt').then(async function (res) {
      const text = await res.text();
      let charArr = text.match(charRe);

      const available = fontArr.filter(it => charArr.includes(it)).length;
      const all = charArr.length;
      document.querySelector('style').append('#' + elem + '::before{width:' + available / all * 100 + '%}');
      document.querySelector('#' + elem + ' span:first-child').innerHTML = available + ' / ' + all;
      document.querySelector('#' + elem + ' span:last-child').innerHTML = (available / all * 100).toFixed(3) + ' %';
    });
  });
}

function progressHangul(elem) {
  const font = elem.split('_')[0];
  const char = elem.split('_')[1];
  const fontRe = /(?<=^STARTCHAR U\+)[\d\w]{4}/gm;
  const charRe = /(?<=^\d{1,5}\t(-|[\d\w]{4})\t(-|[\d\w]{4})\t(-|[\d\w]{4})\t(-|[\d\w]{4})\t(-|[\d\w]{4})\t)[\d\w]{4}/gm;

  fetch('./dist/' + font + '.bdf').then(async function (res) {
    const text = await res.text();
    let fontArr = text.match(fontRe);

    fetch('./files/charsets/' + char + '.txt').then(async function (res) {
      const text = await res.text();
      let charArr = text.match(charRe);

      const available = fontArr.filter(it => charArr.includes(it)).length;
      const all = charArr.length;
      document.querySelector('style').append('#' + elem + '::before{width:' + available / all * 100 + '%}');
      document.querySelector('#' + elem + ' span:first-child').innerHTML = available + ' / ' + all;
      document.querySelector('#' + elem + ' span:last-child').innerHTML = (available / all * 100).toFixed(3) + ' %';
    });
  });
}

progressHangul('Galmuri14_hangul');
progress('Galmuri14_ksx1001');
progress('Galmuri14_ksc5601');
progress('Galmuri14_cp949');
progress('Galmuri14_jis0201');
progress('Galmuri14_jis0208');
progress('Galmuri14_jis0212');
progress('Galmuri14_shiftjis');
progress('Galmuri14_cp932');

progressHangul('Galmuri11_hangul');
progress('Galmuri11_ksx1001');
progress('Galmuri11_ksc5601');
progress('Galmuri11_cp949');
progress('Galmuri11_jis0201');
progress('Galmuri11_jis0208');
progress('Galmuri11_jis0212');
progress('Galmuri11_shiftjis');
progress('Galmuri11_cp932');

progressHangul('Galmuri11-Bold_hangul');
progress('Galmuri11-Bold_ksx1001');
progress('Galmuri11-Bold_ksc5601');
progress('Galmuri11-Bold_cp949');
progress('Galmuri11-Bold_jis0201');
progress('Galmuri11-Bold_jis0208');
progress('Galmuri11-Bold_jis0212');
progress('Galmuri11-Bold_shiftjis');
progress('Galmuri11-Bold_cp932');

progressHangul('Galmuri11-Condensed_hangul');
progress('Galmuri11-Condensed_ksx1001');
progress('Galmuri11-Condensed_ksc5601');
progress('Galmuri11-Condensed_cp949');
progress('Galmuri11-Condensed_jis0201');
progress('Galmuri11-Condensed_jis0208');
progress('Galmuri11-Condensed_jis0212');
progress('Galmuri11-Condensed_shiftjis');
progress('Galmuri11-Condensed_cp932');

progressHangul('Galmuri9_hangul');
progress('Galmuri9_ksx1001');
progress('Galmuri9_ksc5601');
progress('Galmuri9_cp949');
progress('Galmuri9_jis0201');
progress('Galmuri9_jis0208');
progress('Galmuri9_jis0212');
progress('Galmuri9_shiftjis');
progress('Galmuri9_cp932');

progressHangul('Galmuri7_hangul');
progress('Galmuri7_ksx1001');
progress('Galmuri7_ksc5601');
progress('Galmuri7_cp949');
progress('Galmuri7_jis0201');
progress('Galmuri7_jis0208');
progress('Galmuri7_jis0212');
progress('Galmuri7_shiftjis');
progress('Galmuri7_cp932');
