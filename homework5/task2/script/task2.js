/**
3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
 */

'use strict';

const basket_good = {
    id: 0,
    name: "",
    count: 0,
    unit: "",
    price: 0,
    money_unit: "Rub",

    init(id, name, unit, price) {
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.price = price;
    },

    increaseCount(max) {
        this.count += 1;
        if (this.count > max) {
            this.count = max;
        }
    },

    decreaseCount() {
        this.count -= 1;
        if (this.count < 0) {
            this.count = 0;
        }
    },

    calcTotal() {
        const total = this.count * this.price;
        // console.log(`${this.name}: ${this.price} * ${this.count}${this.unit} : \t ${total} ${this.money_unit}`);
        return total;
    }
};

function findGood(element, index, a_array, good) {
    if (element.id === good.id)
        return element;
}

const basket = {
    goods_arr: [],
    money_unit: "Rub",

    addGoodToBasket: function (good) {
        const new_basket_good = Object.create(basket_good);
        let el_idx = this.goods_arr.findIndex((e, i, arr) => findGood(e, i, arr, good));
        if (el_idx > -1) {
            this.goods_arr[el_idx].increaseCount();
        } else {
            new_basket_good.init(good.id, good.name, good.unit, good.price);
            new_basket_good.increaseCount();
            this.goods_arr.push(new_basket_good);
        }
    },

    delGoodFromBasket(id) {
        let el_idx = this.goods_arr.findIndex((e, i, arr) => findGood(e, i, arr, good));
        if (el_idx > -1) {
            this.goods_arr[el_idx].decreaseCount();
            if (this.goods_arr[el_idx].count == 0) {
                delete this.goods_arr[el_idx];
            }
        }
    },

    calcSummOfgoods() {
        let total = 0;
        this.goods_arr.forEach(element => total += element.calcTotal());
        // console.log(`Итого: \t\t\t${total} ${this.money_unit}`);
        return total;
    },
}

basket.addGoodToBasket(grape);
basket.addGoodToBasket(apple);
basket.addGoodToBasket(pear);
basket.addGoodToBasket(apple);
basket.addGoodToBasket(pear);
basket.addGoodToBasket(pear);
basket.delGoodFromBasket(pear);


basket.calcSummOfgoods();