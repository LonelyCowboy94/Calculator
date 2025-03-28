//TODO: fix dot behaviour
//TODO: add keyboard support
//TODO: add ON/OFF button
//TODO: complete toggle positive/negative button

const display = document.getElementById("display");
display.value = "0";
let calculation = "0";

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
const percent = (a) => a / 100;

const realCalculatorBehaviour = () => { 
    display.value = '';
    setTimeout(() => {
        try {
            let expression = calculation.trim();
            
            if (/[+\-*/]$/.test(expression)) {
                expression = expression.slice(0, -1);
            }   
            display.value = eval(expression);
        }
        catch (error) {
            display.value = "Error";
        }
   }, 50)
    }


const displayDigit = (digit) => {
    if (calculation === "0") {
        calculation = digit;
    } else {
        calculation += digit;
    }
    console.log(calculation);
};

const clearDisplay = () => {
    calculation = "0";
    display.value = calculation;
};

const removeOperator = (digit) => {
    if (/[+\-*\/]$/.test(calculation)) {
        display.value = "";
    }
   
    displayDigit(String(digit));
    display.value = calculation.match(/-?\d+(\.\d+)?$/)[0];
};

oneButton.addEventListener('click', () => removeOperator(1));
twoButton.addEventListener('click', () => removeOperator(2));
threeButton.addEventListener('click', () => removeOperator(3));
fourButton.addEventListener('click', () => removeOperator(4));
fiveButton.addEventListener('click', () => removeOperator(5));
sixButton.addEventListener('click', () => removeOperator(6));
sevenButton.addEventListener('click', () => removeOperator(7));
eightButton.addEventListener('click', () => removeOperator(8));
nineButton.addEventListener('click', () => removeOperator(9));
zeroButton.addEventListener('click', () => removeOperator(0));
acButton.addEventListener('click' , () => {
    display.value = "";
    calculation = "0";
    setTimeout(clearDisplay, 50);
});

// const calculate = () => {
//     const expression = calculation;
//     const numbers = expression.match(/-?\d+(\.\d+)?/g);
    
//     let result = parseFloat(numbers[0]);
//     for (let i = 0; i < operators?.length; i++) {
//         const number = parseFloat(numbers[i + 1]);
//         switch (operators[i]) {
//             case '+':
//                 result = add(result, number);
//                 break;
//             case '-':
//                 result = subtract(result, number);
//                 break;
//             case '*':
//                 result = multiply(result, number);
//                 break;
//             case '/':
//                 result = devide(result, number);
//                 break;
//         }
//     }
//     calculation = result.toString(); 
// };

const updateDisplay = (operator) => {
    if (['+', '-', '*', '/'].includes(calculation[calculation.length - 1])) {
       calculation = calculation.slice(0, -1) + operator;
    } else if (/[\d)]$/.test(calculation)) {
       calculation += operator;
    } else if (operator === '-' && calculation === "0") {
      calculation = operator;
    }
    console.log(calculation);
};

percentButton.addEventListener('click', () => display.value = percent(display.value));
dotButton.addEventListener('click', () => calculation += '.');
plusButton.addEventListener('click', () => {
    updateDisplay('+');
    realCalculatorBehaviour();
});
minusButton.addEventListener('click', () => {
    updateDisplay('-');
    realCalculatorBehaviour();
});
multiplyButton.addEventListener('click', () => {
    updateDisplay('*');
    realCalculatorBehaviour();
});
divideButton.addEventListener('click', () => {
    updateDisplay('/');
    realCalculatorBehaviour();
});



equalButton.addEventListener('click', () => {
    display.value = eval(calculation).toString();
});
