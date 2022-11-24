//add functions for basic math operators

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let displayValue = "";
let total = 0;

//function that take operator and two numbers and
//preforms a arithmetic function on the nubers based on the operator

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

//function to populate display when number button is pressed

function makeDisplay(num) {
  displayValue = displayValue + num;
  const display = document.getElementById("display");
  display.innerHTML = "";
  display.innerHTML = displayValue;
}

//Add event listenters to numbers for button presses

document.getElementById("1").addEventListener("click", function () {
  makeDisplay("1");
});
