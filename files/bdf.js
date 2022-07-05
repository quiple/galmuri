const font = document.getElementsByClassName('btn');
const list = document.getElementById('list');
const tameshi = document.getElementById('tameshi');

for (let i = 0; i < font.length; i++) {
  font[i].addEventListener('click', event => {
    var fileName = font[i].innerHTML;
    if (fileName == 'Galmuri11') {
      list.classList.add('g11');
      list.classList.remove('g11b');
      list.classList.remove('g11c');
      list.classList.remove('g9');
      list.classList.remove('g7');
      tameshi.classList.add('g11');
      tameshi.classList.remove('g11b');
      tameshi.classList.remove('g11c');
      tameshi.classList.remove('g9');
      tameshi.classList.remove('g7');
    } else if (fileName == 'Galmuri11 Bold') {
      var fileName = 'Galmuri11-Bold';
      list.classList.add('g11b');
      list.classList.remove('g11');
      list.classList.remove('g11c');
      list.classList.remove('g9');
      list.classList.remove('g7');
      tameshi.classList.add('g11b');
      tameshi.classList.remove('g11');
      tameshi.classList.remove('g11c');
      tameshi.classList.remove('g9');
      tameshi.classList.remove('g7');
    } else if (fileName == 'Galmuri11 Condensed') {
      var fileName = 'Galmuri11-Condensed';
      list.classList.add('g11c');
      list.classList.remove('g11');
      list.classList.remove('g11b');
      list.classList.remove('g9');
      list.classList.remove('g7');
      tameshi.classList.add('g11c');
      tameshi.classList.remove('g11');
      tameshi.classList.remove('g11b');
      tameshi.classList.remove('g9');
      tameshi.classList.remove('g7');
    } else if (fileName == 'Galmuri9') {
      list.classList.add('g9');
      list.classList.remove('g11');
      list.classList.remove('g11b');
      list.classList.remove('g11c');
      list.classList.remove('g7');
      tameshi.classList.add('g9');
      tameshi.classList.remove('g11');
      tameshi.classList.remove('g11b');
      tameshi.classList.remove('g11c');
      tameshi.classList.remove('g7');
    } else if (fileName == 'Galmuri7') {
      list.classList.add('g7');
      list.classList.remove('g11');
      list.classList.remove('g11b');
      list.classList.remove('g11c');
      list.classList.remove('g9');
      tameshi.classList.add('g7');
      tameshi.classList.remove('g11');
      tameshi.classList.remove('g11b');
      tameshi.classList.remove('g11c');
      tameshi.classList.remove('g9');
    }
    fetch('./dist/' + fileName + '.bdf').then(async function (response) {
      const text = await response.text();
      if (window.Worker) {
        const worker = new Worker('./files/worker.js');
        worker.postMessage(text);
        worker.onmessage = function (glphs) {
          list.innerHTML = glphs.data;
        }
      } else {
        alert('Your browser does not support Web Workers.');
        return false;
      }
    });
  });
}

var HUDNotification = {
  el: document.getElementById('hud-notification'),
  timer: null,
  visible: false,
  show: function(message, duration) {
    var n = this;
    n.el.firstChild.innerText = message;
    n.el.classList.add('visible');
    if (n.visible) {
      n.hide();
      setTimeout(function() { n.show(message, duration) }, 120);
      return;
    }
    n.visible = true;
    n.el.style.visibility = null;
    clearTimeout(n.timer);
    n.timer = setTimeout(function() { n.hide() }, duration || 1200);
  },
  hide: function() {
    var n = this;
    if (n.visible) {
      n.el.classList.remove('visible');
      n.visible = false;
      n.el.style.visibility = 'hidden';
    }
  }
}

function copyGlyph(e) {
  var glyph = e.innerHTML;
  if (e.innerHTML == '&nbsp;') glyph = ' ';
  navigator.clipboard.writeText(glyph);
  HUDNotification.show('클립보드에 ‘' + glyph + '’을(를) 복사했습니다');
  clearTimeout(e._flashTimer);
  if (e.classList.contains('flash')) {
    e.classList.remove('flash');
    if (typeof requestAnimationFrame != 'undefined') {
      requestAnimationFrame(function() { e.classList.add('flash') });
    } else {
      setTimeout(function() { e.classList.add('flash') }, 1);
    }
  } else {
    e.classList.add('flash');
  }
  e._flashTimer = setTimeout(function() {
    e.classList.remove('flash');
  }, 300);
}
