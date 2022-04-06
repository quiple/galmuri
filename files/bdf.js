const font = document.getElementsByClassName('btn');
const list = document.getElementById('list');

for (let i = 0; i < font.length; i++) {
  font[i].addEventListener('click', event => {
    var fileName = font[i].innerHTML;
    if (fileName == 'Galmuri11') {
      list.classList.add('g11');
    } else if (fileName == 'Galmuri11 Bold') {
      var fileName = 'Galmuri11-Bold';
      list.classList.add('g11b');
    } else if (fileName == 'Galmuri9') {
      list.classList.add('g9');
    } else if (fileName == 'Galmuri7') {
      list.classList.add('g7');
    }
    fetch('./dist/' + fileName + '.bdf').then(async function (response) {
      const text = await response.text();
      if (window.Worker) {
        const worker = new Worker('./files/worker.js');
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
