'use strict';
const textEl = document.getElementById('typeEffect');
const text = "I'm Taylor, Web Developer based in NYC";
let idx = 1;
let speed = 300;
const writeText = function () {
  textEl.innerText = text.slice(0, idx);
  idx++;

  setTimeout(writeText, 85);
};

writeText();
