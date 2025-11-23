//inputs
const colorInputs = {
  back: document.querySelector('#back-color'),
  text: document.querySelector('#text-color'),
  btnsRight: document.querySelector('#btn-right-color'),
  btnsTop: document.querySelector('#btn-top-color'),
  btnsStandard: document.querySelector('#btn-standard-color'),
}

const valueInput = document.querySelector('#num-value');

//buttons 
const btnsTop = {
  reset: document.querySelector('#func-reset'),
  sign: document.querySelector('#func-sign'),
  percent: document.querySelector('#func-percent'),
}

const btnsRight = {
  divide: document.querySelector('#func-div'),
  multiply: document.querySelector('#func-mul'),
  subtract: document.querySelector('#func-sub'),
  add: document.querySelector('#func-add'),
  evaluate: document.querySelector('#func-eval'),
}

//buttons for numbers 0-9 and for dot
const btnsStandard = [];
for (let i = 0; i <= 9; i++) {
  btnsStandard[i] = document.querySelector(`#input-${i}`);
}
btnsStandard[10] = document.querySelector('#input-dot');

console.log(colorInputs);
console.log(valueInput);
console.log(btnsTop);
console.log(btnsRight);
console.log(btnsStandard);



// для сборки через webpack
import "./style.css";


