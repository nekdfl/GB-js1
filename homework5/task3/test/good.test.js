/**
 *
 */

const goodsList = require("./fixture.js");
const Good = require("../model/ModelGood.js");
const assert = require("./assert.js");

const testGood = new Good(
  goodsList[0].id,
  goodsList[0].name,
  goodsList[0].image,
  goodsList[0].price,
  goodsList[0].unit
);

const isIncrease = () => {
  const previousQuantity = testGood.getQuantity();
  testGood.increaseQuantity(2);
  return testGood.getQuantity() === previousQuantity + 2;
};

const isDecrease = () => {
  const previousQuantity = testGood.getQuantity();
  testGood.decreaseQuantity(2);
  return testGood.getQuantity() === previousQuantity - 2;
};

const isNameSet = () => {
  return testGood.getName() === goodsList[0].name;
};

assert("increase good quantity", isIncrease);
assert("decrease good quantity", isDecrease);
assert("set good name", isNameSet);
