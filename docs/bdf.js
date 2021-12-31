let reader = new FileReader();
let glphs = [];
reader.addEventListener('load', event => {
  glphs = event.target.result.match(/STARTCHAR U+(....)/g);
  console.log(glphs);
});
console.log(window.location);
reader.readAsText('https://cdn.jsdelivr.net/gh/quiple/galmuri/Galmuri11.bdf');
