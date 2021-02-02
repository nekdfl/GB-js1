/**
 *  Написать функцию, преобразующую число в объект. Передавая на вход число
 * от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих 
 * свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны
 * получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если
 * число превышает 999, необходимо выдать соответствующее сообщение с помощью 
 * console.log и вернуть пустой объект.
 */

'use strict';

// Использование кирилических имен для членов объекта сделано по заданию. Надеюсь больше никогда не придется так делать.

//объявление не нужно, но без описания класса совсем не удобно.
// let objNum = {
//     'еденицы': 0,
//     'десятки': 0,
//     'сотни': 0
// }

function numToObj(num) {
    let res;
    num = parseInt(num);
    if (num <= 999 && num >= 0) {
        res = {};
        res.сотни = Math.floor(num / 100);
        res.десятки = Math.floor((num % 100) / 10);
        res.еденицы = Math.floor(num % 10);
    } else
        res = {};

    return res;
}

console.log(numToObj(789));
console.log(numToObj(89));
console.log(numToObj(9));
console.log(numToObj(0));
console.log(numToObj(-1));
console.log(numToObj(1789));