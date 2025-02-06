const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    const display = document.getElementById("display");
    display.value = "";
}

function calculate() {
    let expression = display.value;

    expression = expression.replace(/(\d+)%/g, (match, number) => {
        // return `(${number} * 0.1)`;  !PROCENT PROBLEM
    });
    try {
        display.value = eval(expression); 
    } catch (error) {
        display.value = "Error"; 
    }
}

function toggleSign() {
    const display = document.getElementById("display");
    let value = display.value;
    if (value === "") return;
    if (value.startsWith("-")) {
        display.value = value.substring(1);
    } else {
        display.value = "-" + value;
    }
}

document.addEventListener('keydown', function(event) {
    const display = document.getElementById("display");

    if (event.key >= 0 && event.key <= 9) {
        appendToDisplay(event.key);
    }
    else if (event.key === '+' || event.key === '-' || event.key === '*' || event.key === '/' || event.key === '%') {
        appendToDisplay(event.key);
    }
    else if (event.key === 'Enter') {
        calculate();
    }
    else if (event.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
    else if (event.key === 'Escape') {
        clearDisplay();
    }
    else if (event.key === '.') {
        appendToDisplay('.');
    }
});
