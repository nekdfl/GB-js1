/**
 * Сравнить null и 0. Объяснить результат.
 */


console.log(`Нестрогое сравнение null и 0 ${null == 0}`)
console.log(`Строгое сравнение null и 0 ${null === 0}`)

/**
 * node ./task7.js 
Нестрогое сравнение null и 0 false
Строгое сравнение null и 0 false
 */

//Ответ: объект null и объект number - разные типы данных, причем объект null представляет пустой объект, а number несет в себе значение числа 0.
//Первый означает, что результата нет, а второй означает число 0.