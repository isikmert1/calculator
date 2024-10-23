let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

let operationNums = document.querySelectorAll(".btn-number");
let btnOperation = document.querySelectorAll(".btn-operation");
let displayHistory = document.querySelector(".display-history");
let displayResult = document.querySelector(".display-result");
let clearBtn = document.querySelector(".btn-clear");
let deleteBtn = document.querySelector(".btn-delete");
let equalBtn = document.getElementById("equalBtn");

clearBtn.addEventListener("click", () => {clearScreen()});
equalBtn.addEventListener("click", () => {evaluate()});
deleteBtn.addEventListener("click", () => {deleteNumber()});

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
    if (displayResult.textContent === "0" || shouldResetScreen) {
        resetScreen();
    }
    displayResult.textContent += num;
};

function deleteNumber() {
    displayResult.textContent = displayResult.textContent.toString().slice(0,-1);
};

function setOperation(operator) {
    firstOperand = displayResult.textContent;
    currentOperation = operator;
    displayHistory.textContent = `${firstOperand} ${currentOperation}`;
    shouldResetScreen = true;
};

function resetScreen() {
    displayResult.textContent= "";
    shouldResetScreen = false;
};

function clearScreen() {
    displayHistory.textContent = "";
    displayResult.textContent = "0";
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
};

function evaluate () {
    if (currentOperation === null || shouldResetScreen) return;
    if (currentOperation === '÷' && displayResult.textContent === '0') {
        alert("You can't divide by 0!")
        return
    }
    secondOperand = displayResult.textContent;
    displayHistory.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`;
    displayResult.textContent = Math.round(operate(currentOperation, firstOperand, secondOperand) * 1000) / 1000;
    currentOperation = null;
};

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
};