onmessage = function (text) {
  var glphsCnt = text.data.match(/CHARS .*/g)[0].split(' ');
  var glphsArr = text.data.match(/STARTCHAR U\+.*/g);
  var glphs;
  for (let i = 0; i < glphsCnt[1]; i++) {
    glphs += '<div class="item">' + String.fromCodePoint(parseInt(glphsArr[i].split('+')[1], 16)) + '</div>';
  }
  postMessage(glphs);
}
