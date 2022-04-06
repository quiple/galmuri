onmessage = function (text) {
  var glphsCnt = text.data.match(/CHARS .*/g)[0].split(' ');
  var glphsArr = text.data.match(/STARTCHAR U\+.*/g);
  var glphs = '<div class="item">' + String.fromCodePoint(parseInt(glphsArr[0].split('+')[1], 16)) + '</div>';
  for (let i = 1; i < glphsCnt[1]; i++) {
    glphs += '<div class="item">' + String.fromCodePoint(parseInt(glphsArr[i].split('+')[1], 16)) + '</div>';
  }
  postMessage(glphs);
}
