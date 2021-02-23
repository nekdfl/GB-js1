import goodsList from "../fixture/FixtureProducts.js";
import Good from "../model/ModelGood.js";
import Cart from "../model/ModelCart.js";
import assert from "./assert.js";

let testGood1, testGood2, testGood3, cart;

const beforeAssert = () => {
  cart = new Cart();

  testGood1 = new Good(
    goodsList[0].id,
    goodsList[0].name,
    goodsList[0].image,
    goodsList[0].price,
    goodsList[0].unit,
    1,
    goodsList[0].imageList
  );

  testGood2 = new Good(
    goodsList[1].id,
    goodsList[1].name,
    goodsList[1].image,
    goodsList[1].price,
    goodsList[1].unit,
    1,
    goodsList[1].imageList
  );

  testGood3 = new Good(
    goodsList[2].id,
    goodsList[2].name,
    goodsList[2].image,
    goodsList[2].price,
    goodsList[2].unit,
    1,
    goodsList[2].imageList
  );
};

const isCalcSummCartGoods = () => {
  cart.addGood(testGood1);
  cart.addGood(testGood1);
  cart.addGood(testGood2);
  cart.addGood(testGood3);
  const expectedSumm =
    testGood1.getSumm() + testGood2.getSumm() + testGood3.getSumm();
  return cart.getSumm() === expectedSumm;
};

const isAddCartGoods = () => {
  cart.addGood(testGood1);
  return cart.getQuantityGood() === 1;
};

const isRemoveCartGoods = () => {
  cart.addGood(testGood1);
  cart.addGood(testGood2);
  cart.removeGood(testGood1);
  return cart.getQuantityGood() === 1;
};

assert("summa of cart's goods", isCalcSummCartGoods, beforeAssert);
assert("add good to cart", isAddCartGoods, beforeAssert);
assert("remove good from cart", isRemoveCartGoods, beforeAssert);
