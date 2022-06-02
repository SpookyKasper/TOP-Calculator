const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const operate = (opp, a, b) => {
    switch(opp){
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mul(a, b);
        case '/':
            return div(a, b);
    }
}
// Declare useful variables with initial values
let displayValue = [];
let firstNum = null;
let operator = null;
let secondNum = null;
let displayIsInfinity = false;
let nanMessage = "Woh woh woh! You'r probably trying to multiply Infinity by 0 or divide 0 by 0... " + 
                    "Those operations are not supported by this calculator!" + "\n" + 
                    "I will clear the display and you can keep going ;) " + "\n" + 
                    "Thanks for your understanding :)";
let tooLongMessage = "Hey, I understand your enthusiasm but try to keep it under 18 characters hehe ;) ";

function clear(){
    displayValue.length = 0;
    firstNum = null;
    operator = null;
    secondNum = null;
}
function equal(){
    if (operator === null) return;
    let oppIndex = displayValue.indexOf(operator);
    firstNum = displayValue.slice(0, oppIndex).join('');
    secondNum = displayValue.slice(oppIndex + 1).join('');
    let result = Math.round((operate(operator[0], +firstNum, +secondNum) + Number.EPSILON) * 1000) / 1000;
    clear();
    displayValue.push(result);
}
function backspace(){
    if (displayValue.length === 1 && displayValue[0] !== 0){
        let num = displayValue[0].toString();
        clear();
        displayValue.push(Number(num.slice(0, -1)));
    } else {
        displayValue = displayValue.slice(0, -1);
    }
    if(!displayValue.includes(operator)){
        operator = null;
    }
};
function decimal(){
    let oppIndex = displayValue.indexOf(operator);
    if (displayValue.length > 0 && operator === null && (displayValue.includes('.') || displayValue[0].toString().includes('.')) ||
        operator !== null && displayValue.slice(oppIndex).includes('.')) {
        return;
    }
    displayValue.push('.')
}
