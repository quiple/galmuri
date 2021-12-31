if (window.location.endsWith('galmuri11')) {
  fetch('https://cdn.jsdelivr.net/gh/quiple/galmuri/Galmuri11.bdf')
    .then(function(response) {
      console.log(response.match(/STARTCHAR U+(....)/g));
    });
} else if (window.location.endsWith('galmuri11-bold')) {
  fetch('https://cdn.jsdelivr.net/gh/quiple/galmuri/Galmuri11-Bold.bdf')
    .then(function(response) {
      console.log(response.match(/STARTCHAR U+(....)/g));
    });
} else if (window.location.endsWith('galmuri9')) {
  fetch('https://cdn.jsdelivr.net/gh/quiple/galmuri/Galmuri9.bdf')
    .then(function(response) {
      console.log(response.match(/STARTCHAR U+(....)/g));
    });
}
