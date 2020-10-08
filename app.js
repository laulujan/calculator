function add (a, b) {
	return a + b;
}

function substract (a, b) {
	return a - b;
	
}

function multiply (a, b) {
    return a *b;
}

function divide (a, b){
    return a / b;
}

function operate(op, a, b){
    let result = 0;
    switch(op){
        case "+":
           result = add(a, b);
           break;
        case "-":
            result = substract(a,b);
            break;
        case "*":
            result = multiply(a,b);
            break;
        case "/":
            result = divide(a,b);
            break;
    }
    if(!Number.isInteger(result)){
        return Number.parseFloat(result).toFixed(2);
    }else{
        return result;
    }
    
}

const display = document.querySelector('#display').children[0];


const keys = Array.from(document.querySelector('#keys').children);

let firstNum = "";
let secondNum = ""
let operator = "";
let displayContent;


keys.forEach(key => key.addEventListener('click', function(event){
    const target = event.target;
    let value = target.value;
    if (target.className == 'num' || target.className == 'decimal' ){ 
        printDisplay(value);
    }

    if((target.className == 'num' || target.className == 'decimal') && operator.length === 0){
        firstNum +=  value;
        console.log(firstNum)
        return firstNum
    }
    if(target.className == 'operators' && firstNum > 0 && operator.length < 1){
        operator = value;
        clearDisplay();
    }
    if((target.className == 'num' || target.className == 'decimal') && operator.length > 0){
        secondNum += value;
        console.log(secondNum)
        return secondNum;
    }
    if(target.className == 'operators' && secondNum > 0){
        clearDisplay();
        isfloat(firstNum);
        isfloat(secondNum);
        let res = operate(operator, firstNum, secondNum);
        printDisplay(res);
    }
   
    
}))

function printDisplay(val){
    displayContent = display.textContent += val;
    return displayContent
 }
function clearDisplay(){
    return displayContent = display.textContent = "";
}
function isfloat(str){
    if(str.includes(".")){
        return parseFloat(str);
    }else{
        return parseInt(str);
    }
}