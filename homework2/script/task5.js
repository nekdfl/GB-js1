/**
 * Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
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

console.log(sum(10, 1));
console.log(sub(10, 1));
console.log(div(10, 1));
console.log(mul(10, 1));

console.log(div(10, 0));
console.log(mul(10, 0));


/**
 * 
#node ./task5.js 
11
9
10
10
Infinity
0
 */