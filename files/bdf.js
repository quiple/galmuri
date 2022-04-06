const fileName = document.querySelector('input[name=fonts]:checked').value;

fetch('../dist/'+ fileName +'.bdf')
  .then(async function(response) {
    const text = await response.text();
    if (window.Worker) {
      const worker = new Worker('./worker.js');
      worker.postMessage(text);
      worker.onmessage = function (glphs) {
        document.getElementById('list').innerHTML = glphs.data;
      }
    } else {
      alert('Your browser does not support Web Workers.');
      return false;
    }
  });
