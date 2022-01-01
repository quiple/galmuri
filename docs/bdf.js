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
