const display = document.getElementById('display');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const button5 = document.getElementById('button5');
const button6 = document.getElementById('button6');
const button7 = document.getElementById('button7');
const button8 = document.getElementById('button8');
const button9 = document.getElementById('button9');
const button0 = document.getElementById('button0');
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const equalsButton = document.getElementById('equalsButton');
const clearButton = document.getElementById('clearButton');
 
// Adding click event listeners 
button1.addEventListener('click', () => display.value += '1');
button2.addEventListener('click', () => display.value += '2');
button3.addEventListener('click', () => display.value += '3');
button4.addEventListener('click', () => display.value += '4');
button5.addEventListener('click', () => display.value += '5');
button6.addEventListener('click', () => display.value += '6');
button7.addEventListener('click', () => display.value += '7');
button8.addEventListener('click', () => display.value += '8');
button9.addEventListener('click', () => display.value += '9');
button0.addEventListener('click', () => display.value += '0');
 
addButton.addEventListener('click', () => display.value += '+');
subtractButton.addEventListener('click', () => display.value += '-');
multiplyButton.addEventListener('click', () => display.value += '*');
divideButton.addEventListener('click', () => display.value += '/');
 
equalsButton.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Invalid calculation';
  }
});
 
clearButton.addEventListener('click', () => {
  display.value = '';
});
 
    