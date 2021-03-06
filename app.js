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
    if( b == 0){
        return false;
    }
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
let res = 0;


keys.forEach(key => key.addEventListener('click', function(event){
    const target = event.target;
    let value = target.value;
    let keyClass = target.className;
    calculate(keyClass, value);
      
}))

function printDisplay(val){
    displayContent = display.textContent += val;
    return displayContent
 }
function clearDisplay(){
    return displayContent = display.textContent = "";
}
function toNum(str){
    if(str.includes(".")){
        return parseFloat(str);
    }else{
        return parseInt(str);
    }
}

function calculate(keyClass, value){
    if(value == '.'){
        disable();
    }
    if (keyClass == 'num' || keyClass == 'decimal' ){
        if(res > 0){
            clearDisplay();
        } 
        printDisplay(value);
    }

    if((keyClass == 'num' || keyClass == 'decimal') && operator.length === 0){
        firstNum +=  value;
        console.log(firstNum)
        lastMove = "firstNum";
        return firstNum
    }
    if(keyClass == 'operators' && firstNum > 0 && operator.length < 1){
        operator = value;
        clearDisplay();
        lastMove = "operator"
        enable();
        return operator
    }
    if((keyClass == 'num' || keyClass == 'decimal') && operator.length > 0 && res == 0){
        clearDisplay();
        secondNum += value;
        lastMove = "secondNum"
        console.log(secondNum)
        return secondNum;
    }
    if(keyClass == 'operators' && secondNum.length > 0){
        clearDisplay();
        enable();
        if(secondNum == 0 && operator == '/'){
            printDisplay('Invalid input')
            secondNum = " ";
            return
        }
        firstNum = toNum(firstNum);
        secondNum = toNum(secondNum);
        res = operate(operator, firstNum, secondNum);
        console.log(res)
        operator = value;
        printDisplay(res);
        firstNum = res;
        secondNum = "";
        if(value == '='){
            enable();
            operator = '';
        }
    }
    if((keyClass == 'num' || keyClass == 'decimal') && res > 0){
        firstNum = firstNum.toString();
        secondNum += value;
        clearDisplay();
        console.log(secondNum);
        return secondNum;
    }
    if(value == "Clear"){
        clearDisplay();
    }
    if(value == "CE"){
        if(secondNum.length > 0){
            clearDisplay();
            secondNum = "";
            printDisplay(firstNum); 
            return;
        }
        if(operator.length > 0){
            operator = "";
            return;
        }
        if(firstNum.length > 0){
            firstNum = "";
            clearDisplay();
            return
        }
        
    }

    

    
}

function disable(){
    document.getElementById("decimal").disabled = true;
}
function enable(){
    document.getElementById("decimal").disabled = false;
}