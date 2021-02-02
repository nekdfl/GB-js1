/**
 * С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
 * Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней 
 * товаров. Товары в корзине хранятся в массиве. Задачи:
 * a) Организовать такой массив для хранения товаров в корзине;
 * b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
 * 
 */

'use sctrict';

let basket = [];

function addGoodInBasket(good) {
    basket.push(good);
};

function countBasketPrice() {
    let summ = 0;

    // for (const good_index in basket) {
    //     summ += basket[good_index]['price'];
    // }

    // for (const good of basket) {
    //     summ += good['price'];
    // }

    basket.forEach(good => summ += good['price']);

    return summ;
}

let apple = [];
apple['name'] = 'apple';
apple['img_url'] = '/images/goods/apple.png';
apple['price'] = 10;

let pear = [];
pear['name'] = 'pear';
pear['img_url'] = '/images/goods/pear.png';
pear['price'] = 11;

let grape = [];
grape['name'] = 'grape';
grape['img_url'] = '/images/goods/grape.png';
grape['price'] = 15;


addGoodInBasket(apple);
addGoodInBasket(apple);
addGoodInBasket(apple);
addGoodInBasket(grape);
addGoodInBasket(grape);
addGoodInBasket(pear);

let basket_sum = countBasketPrice();
console.log(`Сумма за все ${basket_sum}`);