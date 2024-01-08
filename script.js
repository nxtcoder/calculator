let num1;
let num2;
let operator;

const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

function operate (operator, num1, num2) {
    if(operator = "add"){return add(num1, num2)}
    else if(operator = "subtract"){return subtract(num1, num2)}
    else if(operator = "multiply"){return multiply(num1, num2)}
    else if(operator = "divide"){return divide(num1, num2)}
    else{console.log("Syntax Error")}
};

