/**
 *
 */

const goodsList = require("./fixture.js");
const Good = require("../model/ModelGood.js");
const Cart = require("../model/ModelCart.js");
const assert = require("./assert.js");

const testGood1 = new Good(
  goodsList[0].id,
  goodsList[0].name,
  goodsList[0].image,
  goodsList[0].price,
  goodsList[0].unit
);

const testGood2 = new Good(
  goodsList[1].id,
  goodsList[1].name,
  goodsList[1].image,
  goodsList[1].price,
  goodsList[1].unit
);

const testGood3 = new Good(
  goodsList[2].id,
  goodsList[2].name,
  goodsList[2].image,
  goodsList[2].price,
  goodsList[2].unit
);

const cart = new Cart();

const isCalcSummCartGoods = () => {
  cart.addGood(testGood1);
  cart.addGood(testGood1);
  cart.addGood(testGood2);
  cart.addGood(testGood3);
  const expectedSumm =
    testGood1.getSumm() + testGood2.getSumm() + testGood3.getSumm();
  return cart.getSumm() === expectedSumm;
};

assert("summa of cart's goods", isCalcSummCartGoods);
// assert("decrease good quantity", isDecrease);
// assert("set good name", isNameSet);
