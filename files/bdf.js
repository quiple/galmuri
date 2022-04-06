const font = document.getElementsByClassName('btn');
const list = document.getElementById('list');

for (let i = 0; i < font.length; i++) {
  font[i].addEventListener('click', event => {
    var fileName = font[i].innerHTML;
    if (fileName == 'Galmuri11') {
      list.classList.add('g11');
      list.classList.remove('g11b');
      list.classList.remove('g9');
      list.classList.remove('g7');
    } else if (fileName == 'Galmuri11 Bold') {
      var fileName = 'Galmuri11-Bold';
      list.classList.add('g11b');
      list.classList.remove('g11');
      list.classList.remove('g9');
      list.classList.remove('g7');
    } else if (fileName == 'Galmuri9') {
      list.classList.add('g9');
      list.classList.remove('g11');
      list.classList.remove('g11b');
      list.classList.remove('g7');
    } else if (fileName == 'Galmuri7') {
      list.classList.add('g7');
      list.classList.remove('g11');
      list.classList.remove('g11b');
      list.classList.remove('g9');
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
