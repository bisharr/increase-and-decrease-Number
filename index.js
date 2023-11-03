'use strict';

const increaseBtnEl = document.querySelector('.increase-btn');
const decreaseBtnEl = document.querySelector('.decrease-btn');
const resetBtnEl = document.querySelector('.reset-btn');
const numberEl = document.querySelector('.number');

let numberFunction = 0;
let playing = true;

increaseBtnEl.addEventListener('click', function () {
  // numberFunction = numberFunction + 1;
  // numberFunction += 1;
  numberFunction++;
  numberEl.textContent = numberFunction;
});

decreaseBtnEl.addEventListener('click', () => {
  if (numberFunction > 0) {
    numberFunction--;
    numberEl.textContent = numberFunction;
  } else {
    numberEl.textContent = '⛔';
  }
});

resetBtnEl.addEventListener('click', function () {
  numberEl.textContent = 0;
});
