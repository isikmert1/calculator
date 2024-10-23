let firstOperand = '';
let secondOperand = '';
let currentOperand = null;

let operationNums = document.querySelectorAll(".btn-number");
let btnOperation = document.querySelectorAll(".btn-operation");
let displayHistory = document.querySelector(".display-history");
let displayResult = document.querySelector(".display-result");
let clearBtn = document.querySelector(".btn-clear");
let deleteBtn = document.querySelector(".btn-delete");


operationNums.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.textContent);
    });
});

btnOperation.forEach(button => {
    button.addEventListener("click", () => {
        setOperation(button.textContent)
    });
});

function appendNumber(num) {
    if (displayResult.textContent === "0") {
        resetScreen();
    }
    displayResult.textContent += num;
}

function setOperation(operator) {
    firstOperand = displayResult.textContent;
    currentOperand = operator;
    displayHistory.textContent = `${firstOperand} ${currentOperand}`
}

function resetScreen() {
    displayResult.textContent="";
}

function evaluate () {

}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return a + b;
        case '−':
            return a - b;
        case '×':
            return a * b;
        case '÷':
            if (b === 0) return null;
            else return a / b;
        default:
            return null;
    }
}