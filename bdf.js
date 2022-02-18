if (location.toString().endsWith('galmuri11')) {
  var fileName = 'Galmuri11';
  document.getElementById('glyphs11').style.fontFamily = 'Galmuri11';
} else if (location.toString().endsWith('galmuri11-bold')) {
  var fileName = 'Galmuri11-Bold';
  document.getElementById('glyphs11').style.fontFamily = 'Galmuri11';
  document.getElementById('glyphs11').style.fontWeight = '700';
} else if (location.toString().endsWith('galmuri9')) {
  var fileName = 'Galmuri9';
  document.getElementById('glyphs9').style.fontFamily = 'Galmuri9';
} else if (location.toString().endsWith('yamche')) {
  var fileName = 'Yamche';
  document.getElementById('glyphsY').style.fontFamily = 'Yamche';
}

fetch('./'+ fileName +'.bdf')
  .then(async function(response) {
    const text = await response.text();
    if (window.Worker) {
      const worker = new Worker('./worker.js');
      worker.postMessage(text);
      worker.onmessage = function (glphs) {
        document.getElementById('glyphs').innerHTML = glphs.data;
      }
    } else {
      alert('Your browser does not support Web Workers.');
      return false;
    }
  });
