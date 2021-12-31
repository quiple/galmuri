if (location.toString().endsWith('galmuri11')) {
  var fileName = 'Galmuri11';
} else if (location.toString().endsWith('galmuri11-bold')) {
  var fileName = 'Galmuri11-Bold';
} else if (location.toString().endsWith('galmuri9')) {
  var fileName = 'Galmuri9';
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
