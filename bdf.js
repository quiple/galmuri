if (location.toString().endsWith('galmuri11')) {
  var fileName = 'Galmuri11';
  document.getElementById('glyphs').style.fontFamily = 'Galmuri11';
} else if (location.toString().endsWith('galmuri11-bold')) {
  var fileName = 'Galmuri11-Bold';
} else if (location.toString().endsWith('galmuri9')) {
  var fileName = 'Galmuri9';
} else if (location.toString().endsWith('yamche')) {
  var fileName = 'Yamche';
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
