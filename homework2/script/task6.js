/**
 * Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
 * где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
 * В зависимости от переданного значения выполнить одну из арифметических операций 
 * (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
 * 
 */

'use strict';

function sum(a, b) {
    return a + b
};

function sub(a, b) {
    return a - b
};

function div(a, b) {
    return a / b
};

function mul(a, b) {
    return a * b
};

function mathOperation(arg1, arg2, operation) {
    let res;
    switch (operation) {
        case '+':
        case 'sum':
            res = sum(arg1, arg2)
            break;
        case '-':
        case 'sub':
            res = sub(arg1, arg2)
            break;
        case '/':
        case 'div':
            res = div(arg1, arg2)
            break;
        case '*':
        case 'mul':
            res = mul(arg1, arg2)
            break;
        default:
            res = NaN;
            break;
    }
    return res;
}

console.log(mathOperation(3, 4, '+'));
console.log(mathOperation(3, 4, '-'));
console.log(mathOperation(3, 4, '/'));
console.log(mathOperation(3, 4, '*'));
console.log(mathOperation(3, 4, 'sum'));
console.log(mathOperation(3, 4, 'sub'));
console.log(mathOperation(3, 4, 'div'));
console.log(mathOperation(3, 4, 'mul'));

/**
 * 
node ./task6.js 
7
-1
0.75
12
7
-1
0.75
12

 */