function add (a, b) {
	return a + b;
}

function subtract (a, b) {
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
        return parseFloat(result.toFixed(2));
    }
    return result;
}
