/**
 * Class ModelCart
 */

function ModelCart() {
  this.goods = [];
}

ModelCart.prototype.getQuantityGood = function () {
  return this.goods.length();
};

ModelCart.prototype.findGood = function (good) {
  const foundedGood = this.goods.find((currentGood) => {
    return currentGood.getId() === good.getId();
  });
  return foundedGood;
};

ModelCart.prototype.isExistsGood = function (good) {
  return Boolean(this.findGood(good));
};

ModelCart.prototype.addGood = function (good) {
  const increaseGoodQuantity = (currentGood) =>
    currentGood.getId() === good.getId()
      ? currentGood.increaseQuantity(good.getQuantity())
      : currentGood;

  this.goods = this.isExistsGood(good)
    ? this.goods.map(increaseGoodQuantity)
    : [...this.goods, good];
};

ModelCart.prototype.removeGood = function (good) {
  if (!this.isExistsGood(good)) {
    return;
  }

  const decreaseGoodQuantity = (currentGood) =>
    currentGood.getId() === good.getId()
      ? currentGood.decreaseQuantity(good.getQuantity())
      : currentGood;

  const deleteGood = () =>
    this.goods.filter((currentGood) => currentGood.getId() !== good.getId());

  this.goods =
    this.findGood(good).getQuantity() === 1
      ? deleteGood()
      : this.goods.map(decreaseGoodQuantity);
};

ModelCart.prototype.clear = function () {
  this.goods = [];
};

ModelCart.prototype.getSumm = function () {
  return this.goods.reduce((summ, good) => summ + good.getSumm(), 0);
};

module.exports = ModelCart;
