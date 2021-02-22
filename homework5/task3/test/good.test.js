/**
 *
 */

import goodsList from "../fixture/FixtureProducts.js";
import Good from "../model/ModelGood.js";
import assert from "./assert.js";

let testGood;

const beforeAssert = () => {
  testGood = new Good(
    goodsList[0].id,
    goodsList[0].name,
    goodsList[0].image,
    goodsList[0].price,
    goodsList[0].unit
  );
};

const isIncrease = () => {
  const expectedQuantity = testGood.getQuantity();
  testGood.increaseQuantity(2);
  return testGood.getQuantity() === expectedQuantity + 2;
};

const isDecrease = () => {
  testGood.increaseQuantity(2);
  const expectedQuantity = testGood.getQuantity();
  testGood.decreaseQuantity(2);
  return testGood.getQuantity() === expectedQuantity - 2;
};

const isNameSet = () => {
  return testGood.getName() === goodsList[0].name;
};

assert("increase good quantity", isIncrease, beforeAssert);
assert("decrease good quantity", isDecrease, beforeAssert);
assert("set good name", isNameSet, beforeAssert);
