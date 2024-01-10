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

clear.addEventListener("click", function(){
    historyValue = ""
    currentValue = ""
    operator = ""
    historyScreen.textContent = ""
    currentScreen.textContent = ""
})

backspace.addEventListener("click", function(){
    currentValue = currentValue.slice(0, -1)
    currentScreen.textContent = currentScreen.textContent.slice(0, -1)
})

equal.addEventListener("click", function(){
    operate()
    historyScreen.textContent = ""
    currentScreen.textContent = historyValue
    currentValue = ""
})

function operate(){
    historyValue = Number(historyValue)
    currentValue = Number(currentValue)

    if(operator === "+"){historyValue += currentValue}
    else if(operator === "-"){historyValue -= currentValue}
    else if(operator === "*"){historyValue *= currentValue}
    else if(operator === "/"){historyValue /= currentValue}
    else {console.log("operation error")}
}

function handleNumber(number){
    currentValue += number
}

function handleOperator(op){
    operator = op
    historyValue = currentValue
    currentValue = ""
}

function addDecimal(){
    if (!currentValue.includes(".")){
        currentValue += "."
    }
}
