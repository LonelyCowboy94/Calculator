//TODO: fix calculation with minus sign by converting a string to a number
//HINT: try to do operations somewere else instead of display than updateDisplay to display.value = something;
//TODO: add keyboard support
//TODO: add ON/OFF button
//TODO: complete toggle positive/negative button

const display = document.getElementById("display");
display.value = "0";

const acButton = document.getElementById("ac");
const percentButton = document.getElementById("percent");
const divideButton = document.getElementById("devide");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const multiplyButton = document.getElementById("multiply");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const minusButton = document.getElementById("minus");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const plusButton = document.getElementById("plus");
const dotButton = document.getElementById("dot");
const zeroButton = document.getElementById("zero");
const equalButton = document.getElementById("equal");

// TODO: figure out how to do percenage operation
// const numBefore = /(\d+)(+\-*\/)/g
// const numAfter = /(+\-*\/)(\d+)/g

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const devide = (a, b) => a / b;
const percent = (a) => a / 20;

const displayDigit = (digit) => {
    if (display.value === "0") {
        display.value = digit;
    } else {
        display.value += digit;
    }
}

const clearDisplay = () => display.value = "0";

oneButton.addEventListener('click', () => displayDigit(1));
twoButton.addEventListener('click', () => displayDigit(2));
threeButton.addEventListener('click', () => displayDigit(3));
fourButton.addEventListener('click', () => displayDigit(4));
fiveButton.addEventListener('click', () => displayDigit(5));
sixButton.addEventListener('click', () => displayDigit(6));
sevenButton.addEventListener('click', () => displayDigit(7));
eightButton.addEventListener('click', () => displayDigit(8));
nineButton.addEventListener('click', () => displayDigit(9));
zeroButton.addEventListener('click', () => displayDigit(0));
acButton.addEventListener('click' , () => {
    display.value = "";
    setTimeout(clearDisplay, 100);
});

const calculate = () => {
    const expression = display.value;
    const numbers = expression.match(/\d+/g);
    const operators = expression.match(/[+\-*\/]/g);
    let result = parseFloat(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
        const number = parseFloat(numbers[i + 1]);
        switch (operators[i]) {
            case '+':
                result = add(result, number);
                break;
            case '-':
                result = subtract(result, number);
                break;
            case '*':
                result = multiply(result, number);
                break;
            case '/':
                result = devide(result, number);
                break;
        }
        console.log(display.value);
    }
    display.value = result;
}

const updateDisplay = (operator) => {
    if (['+', '-', '*', '/'].includes(display.value[display.value.length - 1])) {
        display.value = display.value.slice(0, -1) + operator;
    }   else if (/[^\-]([+\-*/])/.test(display.value)) {
        calculate();
        display.value += operator;
    }   else if (!display.value.includes(operator))  {
        display.value += operator;
    }   else if (display.value.includes(operator)) {
        calculate();
        display.value += operator;
    }
};

percentButton.addEventListener('click', () => display.value = percent(display.value));
dotButton.addEventListener('click', () => display.value += '.');
plusButton.addEventListener('click', () => {
    updateDisplay('+');
});
minusButton.addEventListener('click', () => {
    updateDisplay('-');
});
multiplyButton.addEventListener('click', () => {
    updateDisplay('*');
});
divideButton.addEventListener('click', () => {
    updateDisplay('/');
});



equalButton.addEventListener('click', calculate);