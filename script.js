//inputs
const colorInputs = {
  back: document.querySelector('#back-color'),
  text: document.querySelector('#text-color'),
  right: document.querySelector('#btn-right-color'),
  top: document.querySelector('#btn-top-color'),
  standard: document.querySelector('#btn-standard-color'),
}

const valueInput = document.querySelector('#num-value');

//body
const bodyEl = document.querySelector('.calculator');

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

//all buttons for changing text color
btnsAllArray = document.querySelectorAll('.btn');
btnsTopArray = document.querySelectorAll('.btn-top');
btnsRightArray = document.querySelectorAll('.btn-right');

const valueSaved = 0;
const valueVisible = 0;

Object.keys(colorInputs).forEach((inputEl) => {
  colorInputs[inputEl].addEventListener("input", (event) => {
    switch(inputEl) {
      case 'back': 
        bodyEl.style.backgroundColor = event.currentTarget.value;
        break;
      case 'text': 
        valueInput.style.color = event.currentTarget.value;
        btnsAllArray.forEach(btnEl => btnEl.style.color = event.currentTarget.value);
        break;
      case 'right':
        Object.values(btnsRight).forEach(btnEl => btnEl.style.backgroundColor = event.currentTarget.value);
        break;
      case 'top':
        Object.values(btnsTop).forEach(btnEl => btnEl.style.backgroundColor = event.currentTarget.value);
        break;
      case 'standard':
        btnsStandard.forEach(btnEl => btnEl.style.backgroundColor = event.currentTarget.value);
        break;
      default: console.log('something was wrong: try to change color of not known element');
    }
    return;
  })
})

/*
console.log(bodyEl);
console.log(colorInputs);
console.log(valueInput);
console.log(btnsTop);
console.log(btnsRight);
console.log(btnsStandard);*/



// для сборки через webpack
//import "./style.css";


