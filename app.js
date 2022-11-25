//add functions for basic math operators

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
let displayValue = "";
const calc = ["+", 0, 0];

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
  if (displayValue.length < 10) {
    displayValue = displayValue + num;
    changeDisplay(displayValue);
  }
}

function changeDisplay(number) {
  const display = document.getElementById("display");
  display.innerHTML = "";
  console.log(number.length);
  if (number.toString().length > 10 && number % 1 != 0) {
    display.innerHTML = number.toString().substring(0, 10);
  } else if (number.toString().length > 9) {
    display.innerHTML = "ERROR";
  } else {
    display.innerHTML = number;
  }
}
function performCalc(operator, num) {
  if (calc[0] === "=") {
    calc[0] = operator;
    calc[1] = Number(num);
    calc[2] = Number(num);
    console.log(calc);
    changeDisplay(calc[1]);
    displayValue = "";
  } else {
    calc[2] = Number(num);
    calc[1] = operate(calc[0], calc[1], calc[2]);
    console.log(calc[0]);
    calc[0] = operator;
    console.log(calc[0]);
    console.log(calc);
    displayValue = "";
  }
}

function clearAll() {
  calc[0] = "+";
  calc[1] = 0;
  calc[2] = 0;
  displayValue = "";
  changeDisplay(calc[1]);
}

//Add event listenters to numbers for button presses

document.getElementById("0").addEventListener("click", function () {
  makeDisplay("0");
});
document.getElementById("1").addEventListener("click", function () {
  makeDisplay("1");
});
document.getElementById("2").addEventListener("click", function () {
  makeDisplay("2");
});
document.getElementById("3").addEventListener("click", function () {
  makeDisplay("3");
});
document.getElementById("4").addEventListener("click", function () {
  makeDisplay("4");
});
document.getElementById("5").addEventListener("click", function () {
  makeDisplay("5");
});
document.getElementById("6").addEventListener("click", function () {
  makeDisplay("6");
});
document.getElementById("7").addEventListener("click", function () {
  makeDisplay("7");
});
document.getElementById("8").addEventListener("click", function () {
  makeDisplay("8");
});
document.getElementById("9").addEventListener("click", function () {
  makeDisplay("9");
});

//add operator button functionality

document.getElementById("+").addEventListener("click", function () {
  if (calc[0] === "/") {
    if (displayValue === "" || displayValue === "0") {
      alert("Silly kids, you can't divide by 0!");
      clearAll();
    } else {
      performCalc("+", displayValue);
      changeDisplay(calc[1]);
    }
  } else {
    performCalc("+", displayValue);
    changeDisplay(calc[1]);
  }
});

document.getElementById("-").addEventListener("click", function () {
  if (calc[0] === "/") {
    if (displayValue === "" || displayValue === "0") {
      alert("Silly kids, you can't divide by 0!");
      clearAll();
    } else {
      performCalc("-", displayValue);
      changeDisplay(calc[1]);
    }
  } else {
    performCalc("-", displayValue);
    changeDisplay(calc[1]);
  }
});
document.getElementById("*").addEventListener("click", function () {
  if (calc[0] === "/") {
    if (displayValue === "" || displayValue === "0") {
      alert("Silly kids, you can't divide by 0!");
      clearAll();
    } else {
      performCalc("*", displayValue);
      changeDisplay(calc[1]);
    }
  } else {
    performCalc("*", displayValue);
    changeDisplay(calc[1]);
  }
});
document.getElementById("/").addEventListener("click", function () {
  // test for divide by 0 and display error message if true

  if (calc[0] === "/") {
    if (displayValue === "" || displayValue === "0") {
      alert("Silly kids, you can't divide by 0!");
      clearAll();
    } else {
      performCalc("/", displayValue);
      changeDisplay(calc[1]);
    }
  } else {
    performCalc("/", displayValue);
    changeDisplay(calc[1]);
  }
});

document.getElementById("=").addEventListener("click", function () {
  if (calc[0] === "/") {
    if (displayValue === "" || displayValue === "0") {
      alert("Silly kids, you can't divide by 0!");
      clearAll();
    } else {
      performCalc("=", displayValue);
      changeDisplay(calc[1]);
    }
  } else {
    performCalc("=", displayValue);
    changeDisplay(calc[1]);
  }
});

//add AC button functionality
document.getElementById("AC").addEventListener("click", function () {
  clearAll();
});

function addDecimal() {
  makeDisplay(".");
}

document
  .getElementById(".")
  .addEventListener("click", addDecimal, { once: true });
