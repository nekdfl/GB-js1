/**
 * если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
 */

'use strict';

function testAB(a, b) {

    if (a > 0 && b > 0) {
        console.log(`1. a - b = ${a - b}`);
    } else if (a < 0 && b < 0) {
        console.log(`2. a * b = ${a * b}`);
    } else if ((a > 0 && b < 0) || (a < 0) && (b > 0)) {
        console.log(`3. a + b = ${ a + b}`);
    }
}

testAB(3, 2);
testAB(-2, -2);
testAB(-2, 3);
testAB(3, -2);

/**
 * 
node task3.js
1. a - b = 1
2. a * b = 4
3. a + b = 1
3. a + b = 1

 */