//inputs
const colorInputs = {
  back: document.querySelector('#back-color'),
  text: document.querySelector('#text-color'),
  right: document.querySelector('#btn-right-color'),
  top: document.querySelector('#btn-top-color'),
  standard: document.querySelector('#btn-standard-color'),
}

const valueInput = document.querySelector('#num-value');
valueInput.readOnly = true;

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

let valueSaved = '0';
let valueVisible = '0';
let isDot = false;
let lastOp = '';
const maxLength = 10;

// function to change colors into calculator
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

btnsStandard.forEach((btnEl, ind) => {
  btnEl.addEventListener("click", () => {
    if(valueVisible.length >= maxLength)
      return;
    if(valueVisible == 'error')
      return;


    //if btn is dot
    if(ind == 10 && !isDot){
      isDot = true;
      valueVisible += '.';
      valueInput.value = valueVisible;
      return;
    } else if (ind == 10)
      return;

    // btn = index value
    if(valueVisible == '0')
      valueVisible = String(ind); 
    else 
      valueVisible += String(ind);
    
    valueInput.value = valueVisible;
    return;
  })
})

btnsTop.reset.addEventListener('click', () => {
  valueVisible = '0';
  isDot = false;
  valueSaved = '0';
  valueInput.value = valueVisible;
});

btnsTop.sign.addEventListener('click', () => {
  if(valueVisible == 'error')
    return;

  if(valueVisible[0] === '-') {
    valueVisible = valueVisible.slice(1);
  } else if (valueVisible !== '0')
    valueVisible = '-' + valueVisible;

  valueInput.value = valueVisible;
});

function getResult (number) {
  if (String(number).indexOf('.') === -1)
    return (String(number).length < maxLength ? String(number) : 'error');
  else if(String(number).indexOf('.') == maxLength - 2)
    return String(number).slice(0, maxLength - 2);
  else if (String(number).indexOf('.') <= maxLength)
    return String(number).slice(0, maxLength - 1);
  else
    return 'error';
}

btnsTop.percent.addEventListener('click', () => {
  let result;
  switch (lastOp){
    case 'divide':
      result = Number (valueVisible) ? Number(valueSaved) * 100 / Number (valueVisible) : 'error';     
      break; 
    case 'multiply':
      result = Number(valueSaved) * Number (valueVisible) / 100;     
      break; 
    case 'add':
      result = Number(valueSaved) * ( 1 + Number (valueVisible) / 100 );     
      break; 
    case 'subtract':
      result = Number(valueSaved) * (1 - Number (valueVisible) / 100);     
      break;
    default: 
      return; 
  }
  valueSaved = valueVisible; 
  valueVisible = getResult(result);
  isDot = valueVisible.includes('.');
  valueInput.value = valueVisible;
});

// function to save operation type
Object.keys(btnsRight).forEach((btnEl) => {
  btnsRight[btnEl].addEventListener("click", () => {
    if(btnEl !== 'evaluate'){
      lastOp = btnEl;
      valueSaved = valueVisible;
      valueVisible = '0';
      isDot = false;
      return;
    }

    let result;
    switch (lastOp){
      case 'divide':
        result = Number (valueVisible) ? Number(valueSaved) / Number (valueVisible) : 'error';     
        break; 
      case 'multiply':
        result = Number(valueSaved) * Number (valueVisible);     
        break; 
      case 'add':
        result = Number(valueSaved) + Number (valueVisible);     
        break; 
      case 'subtract':
        result = Number(valueSaved) - Number (valueVisible);     
        break;
      default: 
        return; 
    }

    valueSaved = valueVisible; 
    valueVisible = getResult(result);
    isDot = valueVisible.includes('.');
    valueInput.value = valueVisible;
    return;
  })
})

document.addEventListener('keypress', (event) => {
  let result;
  console.log(event.key);

  switch (event.key) {

    case 'Delete': 
      valueVisible = '0';
      isDot = false;
      valueSaved = '0';
      valueInput.value = valueVisible;
      return;

    case '=': 
      switch (lastOp){
        case 'divide':
          result = Number (valueVisible) ? Number(valueSaved) / Number (valueVisible) : 'error';     
          break; 
        case 'multiply':
          result = Number(valueSaved) * Number (valueVisible);     
          break; 
        case 'add':
          result = Number(valueSaved) + Number (valueVisible);     
          break; 
        case 'subtract':
          result = Number(valueSaved) - Number (valueVisible);     
          break;
        default: 
          return; 
      }

      valueSaved = valueVisible; 
      valueVisible = getResult(result);
      isDot = valueVisible.includes('.');
      valueInput.value = valueVisible;
      return;

    case '/': 
      lastOp = 'divide';
      valueSaved = valueVisible;
      valueVisible = '0';
      isDot = false;
      return;

    case '*': 
      lastOp = 'multiply';
      valueSaved = valueVisible;
      valueVisible = '0';
      isDot = false;
      return;

    case '+': 
      lastOp = 'add';
      valueSaved = valueVisible;
      valueVisible = '0';
      isDot = false;
      return;

    case '-': 
      lastOp = 'subtract';
      valueSaved = valueVisible;
      valueVisible = '0';
      isDot = false;
      return;


    case '%': 
      switch (lastOp){
        case 'divide':
          result = Number (valueVisible) ? Number(valueSaved) * 100 / Number (valueVisible) : 'error';     
          break; 
        case 'multiply':
          result = Number(valueSaved) * Number (valueVisible) / 100;     
          break; 
        case 'add':
          result = Number(valueSaved) * ( 1 + Number (valueVisible) / 100 );     
          break; 
        case 'subtract':
          result = Number(valueSaved) * (1 - Number (valueVisible) / 100);     
          break;
        default: 
          return; 
      }
      valueSaved = valueVisible; 
      valueVisible = getResult(result);
      isDot = valueVisible.includes('.');
      valueInput.value = valueVisible;
      return;

    case '.':
    case ',': 
      if(valueVisible.length >= maxLength)
        return;
      if(valueVisible == 'error')
        return;

      if(!isDot){
        isDot = true;
        valueVisible += '.';
        valueInput.value = valueVisible;
      } 
      return;
      
    case '0': 
    case '1': 
    case '2': 
    case '3': 
    case '4': 
    case '5': 
    case '6': 
    case '7': 
    case '8': 
    case '9':
      if(valueVisible.length >= maxLength)
        return;
      if(valueVisible == 'error')
        return;

      // btn = index value
      if(valueVisible == '0')
        valueVisible = event.key; 
      else 
        valueVisible += event.key;
      
      valueInput.value = valueVisible;
      return;

  }

})

// для сборки через webpack
//import "./style.css";


