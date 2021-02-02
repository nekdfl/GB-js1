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

let basket_good = {
    'id': 0,
    'name': "",
    'count': 0,
    'price': 0,

    'init': function (id, name, price) {
        this.id = id;
        this.name = name;
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

};

function findGood(element, index, array) {
    console.log(`${element.id} === ${good.id}`);
    if (element.id === good.id)
        return element;
}

let basket = {
    goods_arr: [],

    'addGoodToBasket': function (good) {
        let new_basket_good = basket_good;
        let el_idx = this.goods_arr.findIndex(findGood);
        if (el_idx > -1) {
            this.goods_arr[el_idx].increaseCount();
            console.log("increase");
        } else {
            console.log("add to cart");
            new_basket_good.init(good.id, good.name, good.price);
            new_basket_good.increaseCount();
            this.goods_arr.push(new_basket_good);
        }

    },

    'delGoodFromBasket': function (id) {
        let new_basket_good = basket_good;
        let el_idx = this.goods_arr.findIndex(findGood);
        if (el_idx > -1) {
            console.log("decrease");
            this.goods_arr[el_idx].decreaseCount();
            if (this.goods_arr[el_idx].count == 0) {
                delete this.goods_arr[el_idx];
                console.log("delete from cart");
            }
        }
    },

    'calcSummOfgoods': function () {

    },
}

let good = {
    'id': 0,
    'name': "",
    'short_desc': "",
    'long_desc': "",
    'category_id': "",
    'small_img_url': "",
    'big_img_url': "",
    'price': 0,
    'discount': 0,
    'init': function (id, name, short_desc, long_desc, category_id, small_img_url, big_img_url, price, discount) {
        this.id = id;
        this.name = name;
        this.short_desc = short_desc;
        this.long_desc = long_desc;
        this.category_id = category_id;
        this.small_img_url = small_img_url;
        this.big_img_url = big_img_url;
        this.price = price;
        this.discount = discount;
    },
}

let apple = good;
apple.init(1, "Яблоки", "", "", 1, '/images/goods/apple_l.png', "", 10, 0);

let pear = good;
pear.init(2, "Груши", "", "", 1, '/images/goods/pear_l.png', "", 11, 0);

let grape = good;
grape.init(3, "Виноград", "", "", 1, '/images/goods/grape_l.png', "", 15, 0);

basket.addGoodToBasket(apple);
basket.addGoodToBasket(pear);
basket.addGoodToBasket(grape);

console.log(basket);