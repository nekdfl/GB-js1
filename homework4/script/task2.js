/**
 * Продолжить работу с интернет-магазином:
 * 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. 
 * Какими объектами можно заменить их элементы?
 * 2.2. Реализуйте такие объекты.
 * 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.
 */

'use strict';

// let catalog = {
//     category_arr = [],

//     'addCategory': function (category_obj) {
//         this.category_arr.push(categoty_obj);
//     }
// }

// let category = {
//     'id': 0,
//     'root_category_id': 0,
//     'name': "",
//     'short_desc': "",
//     'long_desc': "",
//     'small_img_url': "",
//     'big_img_url': "",

//     'init': function (id, root_category_id, name, short_desc, long_desc, small_img_url, big_img_url) {
//         this.id = id;
//         this.root_category_id = root_category_id;
//         this.name = name;
//         this.short_desc = short_desc;
//         this.long_desc = long_desc;
//         this.small_img_url = small_img_url;
//         this.big_img_url = big_img_url;
//     },
// };

const basket_good = {
    'id': 0,
    'name': "",
    'count': 0,
    'unit': "",
    'price': 0,
    'money_unit': "Rub",

    'init': function (id, name, unit, price) {
        this.id = id;
        this.name = name;
        this.unit = unit;
        this.price = price;
    },

    'increaseCount': function (max) {
        this.count += 1;
        if (this.count > max) {
            this.count = max;
        }
    },

    'decreaseCount': function () {
        this.count -= 1;
        if (this.count < 0) {
            this.count = 0;
        }
    },

    'calcTotal': function () {
        const total = this.count * this.price
        console.log(`${this.name}: ${this.price} * ${this.count}${this.unit} : \t ${total} ${this.money_unit}`);
        return total;
    }

};

function findGood(element, index, a_array, good) {
    if (element.id === good.id)
        return element;
}

const basket = {
    goods_arr: [],
    'money_unit': "Rub",

    'addGoodToBasket': function (good) {
        const new_basket_good = Object.create(basket_good);
        let el_idx = this.goods_arr.findIndex((e, i, arr) => findGood(e, i, arr, good));
        if (el_idx > -1) {
            this.goods_arr[el_idx].increaseCount();
            // console.log("increase");
        } else {
            // console.log("add to cart");
            new_basket_good.init(good.id, good.name, good.unit, good.price);
            new_basket_good.increaseCount();
            this.goods_arr.push(new_basket_good);
        }
    },

    'delGoodFromBasket': function (id) {
        let el_idx = this.goods_arr.findIndex((e, i, arr) => findGood(e, i, arr, good));
        if (el_idx > -1) {
            // console.log("decrease");
            this.goods_arr[el_idx].decreaseCount();
            if (this.goods_arr[el_idx].count == 0) {
                delete this.goods_arr[el_idx];
            }
        }
    },

    'calcSummOfgoods': function () {
        let total = 0;
        this.goods_arr.forEach(element => total += element.calcTotal());
        console.log(`Итого: \t\t\t${total} ${this.money_unit}`);
    },
}

const good = {
    'id': 0,
    'name': "",
    'short_desc': "",
    'long_desc': "",
    'category_id': "",
    'small_img_url': "",
    'big_img_url': "",
    'price': 0,
    'unit': "",
    'discount': 0,
    'init': function (id, name, short_desc, long_desc, category_id, small_img_url, big_img_url, unit, price, discount) {
        this.id = id;
        this.name = name;
        this.short_desc = short_desc;
        this.long_desc = long_desc;
        this.category_id = category_id;
        this.small_img_url = small_img_url;
        this.big_img_url = big_img_url;
        this.unit = unit;
        this.price = price;
        this.discount = discount;
    },
}

const apple = Object.create(good);
apple.init(1, "Яблоки", "", "", 1, '/images/goods/apple_l.png', "", "кг.", 10, 0);

const pear = Object.create(good);
pear.init(2, "Груши", "", "", 1, '/images/goods/pear_l.png', "", "кг.", 11, 0);

const grape = Object.create(good);
grape.init(3, "Виноград", "", "", 1, '/images/goods/grape_l.png', "", "кг.", 15, 0);


basket.addGoodToBasket(grape);
basket.addGoodToBasket(apple);
basket.addGoodToBasket(pear);
basket.addGoodToBasket(apple);
basket.addGoodToBasket(pear);
basket.addGoodToBasket(pear);
basket.delGoodFromBasket(pear);


basket.calcSummOfgoods();

//console output
// GB-js1/homework4/script$ node task2.js 
// Виноград: 15 * 1кг. : 	 15 Rub
// Яблоки: 10 * 2кг. : 	 20 Rub
// Груши: 11 * 3кг. : 	 33 Rub
// Итого: 			68 Rub