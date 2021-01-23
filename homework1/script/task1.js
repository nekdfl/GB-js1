
/**
Задать температуру в градусах по Цельсию. Вывести в alert соответствующую 
температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: 
Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, 
Tc – температура по Цельсию 
*/
let temperature_celseum = prompt('Введите для в градусах цельсия: ');
let temperature_farengheit = (9/5)*temperature_celseum+32;
alert(`Введенные ${temperature_celseum} будет ${temperature_farengheit}`);

