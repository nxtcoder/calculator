let clear = document.querySelector(".clear")
let backspace = document.querySelector(".backspace")
let digits = document.querySelectorAll(".digit")
let operators = document.querySelectorAll(".operator")
let decimal = document.querySelector(".decimal")
let equal = document.querySelector(".equal")
let historyScreen = document.querySelector(".history")
let currentScreen = document.querySelector(".current")
let num1,num2 = ''
let opr = null
let resetMain = false

digits.forEach((digit) => digit.addEventListener("click", function(e){
    appendNumber(e.target.textContent)
}))

operators.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
}))

equal.addEventListener("click", function(){
    evaluate()
})

decimal.addEventListener("click", function(){
    appendDecimal()
})

clear.addEventListener("click", function(){
    num1 = ""
    num2 = ""
    opr = null
    historyScreen.textContent = ""
    currentScreen.textContent = "0"
})

backspace.addEventListener("click", function(){
    currentScreen.textContent = currentScreen.textContent.toString().slice(0, -1)
})

const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const mutiply = (a,b) => a*b;
const divide = (a,b) => a/b;

function resetCurrentScreen (){
    currentScreen.textContent = '';
    resetMain = false;
}

function appendNumber(num){
    if(currentScreen.textContent === '0' || resetMain){
        resetCurrentScreen();
    }
    currentScreen.textContent += num;
}

function handleOperator(oper){
    if(opr !== null) evaluate()
    num1 = currentScreen.textContent;
    opr = oper;
    historyScreen.textContent = `${num1} ${opr}`;
    resetMain = true;
}

function evaluate(){
    if(opr === null || resetMain) return
    if(opr === '/' && mainScreen.textContent === '0'){
        console.log("num / 0 ?")
        return 
    }
    num2 = currentScreen.textContent;
    currentScreen.textContent = roundResult(operate(opr, num1, num2));
    historyScreen.textContent = `${num1} ${opr} ${num2}`
    opr = null;
}

function roundResult(num){
    return Math.round(num*1000)/1000;
}

function appendDecimal(){
    if(resetMain) resetCurrentScreen();
    if(currentScreen.textContent === ''){
        currentScreen.textContent='0';
    }
    if(currentScreen.textContent.includes('.'))return 
    currentScreen.textContent += '.'
}

function operate(operator, a, b){
    a = Number(a)
    b = Number(b)
    switch(operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'x':
            return mutiply(a,b);
        case "/":
            return divide(a,b);
    }
}