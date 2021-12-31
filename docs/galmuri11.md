---
layout: page
title: Galmuri11
---

<link rel="stylesheet" href="./style.css">

<div id="glyphs"></div>

<script src="https://cdn.jsdelivr.net/gh/erkkah/BDF.js/BDF.js"></script>
<script>
  var font = new BDF();
  font.load("https://cdn.jsdelivr.net/gh/quiple/galmuri/Galmuri11.bdf", function() {
    console.log(font);
  });
</script>
