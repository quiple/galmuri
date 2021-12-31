if (location.toString().endsWith('galmuri11')) {
  var fileName = 'Galmuri11';
  document.getElementById('glyphs').style.fontFamily = 'Galmuri11';
} else if (location.toString().endsWith('galmuri11-bold')) {
  var fileName = 'Galmuri11-Bold';
  document.getElementById('glyphs').style.fontFamily = 'Galmuri11';
  document.getElementById('glyphs').style.fontWeight = '700';
} else if (location.toString().endsWith('galmuri9')) {
  var fileName = 'Galmuri9';
  document.getElementById('glyphs').style.fontFamily = 'Galmuri9';
}

fetch('https://cdn.jsdelivr.net/gh/quiple/galmuri/'+ fileName +'.bdf')
  .then(async function(response) {
    const text = await response.text();
    let glphsCnt = text.match(/CHARS .*/g)[0].split(' ');
    let glphsArr = text.match(/STARTCHAR U\+.*/g);
    var glphs;
    for (let i = 0; i < glphsCnt[1]; i++) {
      glphs += String.fromCodePoint(parseInt(glphsArr[i].split('+')[1], 16));
    }
    document.getElementById('glyphs').innerHTML = glphs;
  });
