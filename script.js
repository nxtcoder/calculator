let clear = document.querySelector(".clear")
let backspace = document.querySelector(".backspace")
let digits = document.querySelectorAll(".digit")
let operators = document.querySelectorAll(".operator")
let decimal = document.querySelector(".decimal")
let equal = document.querySelector(".equal")
let historyScreen = document.querySelector(".history")
let currentScreen = document.querySelector(".current")

let operator,historyValue,currentValue = "";

digits.forEach((digit) => digit.addEventListener("click", function(e){
    handleNumber(e.target.textContent)
    currentScreen.textContent = currentValue
}))

operators.forEach((op) => op.addEventListener("click", function(e){
    handleOperator(e.target.textContent)
    historyScreen.textContent = historyValue + " " + operator
    currentScreen.textContent = currentValue
}))

decimal.addEventListener("click", function(){
    addDecimal()
})

//need fix
clear.addEventListener("click", function(){
    historyScreen = ""
    currentScreen = ""
    operator = ""
    historyScreen.textContent = ""
    currentScreen.textContent = ""
    console.log("clear")
})

equal.addEventListener("click", function(){
    operate()
    historyScreen.textContent = ""
    currentScreen.textContent = historyValue
})

function operate(){
    historyValue = Number(historyValue)
    currentValue = Number(currentValue)

    if(operator === "+"){historyValue += currentValue}
    else if(operator === "-"){historyValue -= currentValue}
    else if(operator === "*"){historyValue *= currentValue}
    else if(operator === "/"){historyValue /= currentValue}
    else {console.log("operation error")}
    console.log(historyValue)
}

function handleNumber(number){
    currentValue += number
}

function handleOperator(op){
    operator = op
    historyValue = currentValue
    currentValue = ''
}

function addDecimal(){
    if (!currentValue.includes(".")){
        currentValue += "."
    }
}
