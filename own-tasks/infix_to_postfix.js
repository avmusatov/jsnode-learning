'use strict'

const s = '((5+(1+2)*(2+3))+5)'
const operationStack = [], resultList = [], operandStack = [];
let tokens;
let topElem;

console.log(`Infix expresion: ${s}`);

const precedence = c =>{
    switch (c) {
        case '+': return 2;
        case '-': return 2;
        case '/': return 3;
        case '*': return 3;
        default: return 1;
    }
};

const doMAth = (a,b,operation) => {
    switch (operation){
        case '+': return (a + b);
        case '-': return (a - b);
        case '/': return (a / b);
        case '*': return (a * b);
        default: new Error(`Invalid operation, ${operation}`);
    }
};

const infixToPostfix = s => {
    tokens = s.split('');
    for (const token of tokens) {
        if (token === '(') operationStack.push(token)
        else if (parseInt(token,10)) resultList.push(token);
        else if (token == ')') {
            topElem = operationStack.pop();
            while (topElem !== '('){
                resultList.push(topElem);
                topElem = operationStack.pop();
            }
        }
        else {
            while (operationStack.length !== 0 && precedence(operationStack[operationStack.length - 1]) >= precedence(token))
                resultList.push(operationStack.pop());
            operationStack.push(token);
        }
    }
    return resultList.join('');
};

const expression = infixToPostfix(s);
console.log(`Postfix expression: ${expression}`);

const postfixMath = expression => {
    let operand1 = '', operand2 = '';
    tokens = expression.split('');
    for (const token of tokens){
        if (parseInt(token,10)) operandStack.push(parseInt(token,10));
        else {
            operand2 = operandStack.pop();
            operand1 = operandStack.pop();
            operandStack.push(doMAth(operand1,operand2,token));
        }
    }
    return operandStack.pop();
}


console.log(`Answer: ${postfixMath(expression)}`);
