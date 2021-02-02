/**
 * С помощью рекурсии организовать функцию возведения числа в степень. 
 * Формат: function power(val, pow), где val — заданное число, pow –— степень.
 */

function recursionPower(num, pow) {
    let is_negatiov_pow = false;
    pow = parseInt(pow);
    // console.log(`pow =${pow}`)

    if (pow == 0) // base situation;
        return 1;

    if (pow < 0) {
        is_negatiov_pow = true;
        pow = pow * -1; // invert pow sign
        // console.log(`pow = ${pow};`)
    }
    if (pow > 0) // if pow is positive
    {
        // console.log(`num = ${num}; pow = ${pow};`)
        num *= recursionPower(num, pow - 1);
    }

    if (is_negatiov_pow == true)
        num = 1 / num;

    return num;
}

console.log(`${recursionPower(2, 0)} expect 1`);
console.log(`${recursionPower(2, 1)} expect 2`);
console.log(`${recursionPower(2, 2)} expect 4`);
console.log(`${recursionPower(2, 3)} expect 8`);

console.log(`${recursionPower(2, -3)} expect 0,125`);
console.log(`${recursionPower(2, -2)} expect 0.25`);
console.log(`${recursionPower(2, -1)} expect 0.5`);

console.log(`${recursionPower(2, '3')} expect 8`);
console.log(`${recursionPower(2, '-3')} expect 0.125`);

// вывод программы
// node. / task8.js
// 1 expect 1
// 2 expect 2
// 4 expect 4
// 8 expect 8
// 0.125 expect 0, 125
// 0.25 expect 0.25
// 0.5 expect 0.5
// 8 expect 8
// 0.125 expect 0.125