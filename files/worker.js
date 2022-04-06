onmessage = function (text) {
  var glphsCnt = text.data.match(/CHARS .*/g)[0].split(' ');
  var glphsArr = text.data.match(/STARTCHAR U\+.*/g);
  var first = String.fromCodePoint(parseInt(glphsArr[0].split('+')[1], 16));
  if (first == ' ') var first = '&nbsp;';
  var glphs = '<a class="item" title="' + glphsArr[0].split(' ')[1] + '" onclick="copyGlyph(this)">' + first + '</a>';
  for (let i = 1; i < glphsCnt[1]; i++) {
    glphs += '<a class="item" title="' + glphsArr[i].split(' ')[1] + '" onclick="copyGlyph(this)">' + String.fromCodePoint(parseInt(glphsArr[i].split('+')[1], 16)) + '</a>';
  }
  postMessage(glphs);
}
