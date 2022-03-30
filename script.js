//querySelector untuk mengambil elemen dari DOM
const calculatorScreen = document.querySelector(".calculator-screen");

//function update screen
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

//querySelectorAll number
const numbers = document.querySelectorAll(".number");

//event Listeners update screen
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});

//variabel angka & operator
let previousNumber = "";
let calculationOperator = "";
let currentNumber = "0";

//querySelector percentage
const percent = document.querySelector(".percentage")

// Event Listeners percentage
percent.addEventListener("click", () => {
  currentNumber = currentNumber / 100
  updateScreen(currentNumber)
})

//function inputNumber
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number
  } else {
    currentNumber += number
  }
};

//querySelectorAll operator
const operators = document.querySelectorAll(".operator")

//event Listeners operator
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.innerText)
    updateScreen(currentNumber)
  });
});

//function inputOperator
const inputOperator = (operator) => {
  previousNumber = currentNumber
  calculationOperator = operator
  currentNumber = ""
};

//querySelector equalSign
const equalSign = document.querySelector(".equal-sign");

//event Listeners equalSign
equalSign.addEventListener("click", () => {
  calculate()
  updateScreen(currentNumber)
})

//querySelector clear
const clear = document.querySelector(".all-clear");

//event listener clear
clear.addEventListener("click", () => {
  clearAll()
  updateScreen(currentNumber)
})

//function clearAll
const clearAll = () => {
  currentNumber = "0"
  previousNumber = ""
  operator = ""
};

//function calculate
const calculate = () => {
  let result = 0;
  switch (calculationOperator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "×":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "÷":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    case "÷":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result
  calculationOperator = ""
}

//querySelector decimal
const decimal = document.querySelector(".decimal");

//event listener decimal
decimal.addEventListener("click", () => {
  inputDecimal()
  updateScreen(currentNumber)
})

//function inputDecimal
const inputDecimal = () => {
  if (!currentNumber.includes(".")) {
    currentNumber += "."
  }
}
