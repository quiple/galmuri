const font = document.getElementsByClassName('btn');

for (let i = 0; i < font.length; i++) {
  font[i].addEventListener('click', event => {
    var fileName = font[i].innerHTML;
    if (fileName == 'Galmuri11 Bold') var fileName = 'Galmuri11-Bold';
    fetch('../dist/' + fileName + '.bdf').then(async function (response) {
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
  });
}
