/**
 * Class ModelCart
 */

function ModelCart() {
  this.goods = [];
}

ModelCart.prototype.getQuantityGood = function () {
  return this.goods.length;
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

  const decreaseGoodQuantity = (goods, currentGood) => {
    if (Number(currentGood.getId()) !== Number(good.getId())) {
      return [...goods, currentGood];
    }

    if (good.getQuantity() >= currentGood.getQuantity()) {
      return [...goods];
    }

    currentGood.decreaseQuantity(good.getQuantity());
    return [...goods, currentGood];
  };

  this.goods = this.goods.reduce(decreaseGoodQuantity, []);
};

ModelCart.prototype.clear = function () {
  this.goods = [];
};

ModelCart.prototype.getSumm = function () {
  return this.goods.reduce((summ, good) => summ + good.getSumm(), 0);
};

export default ModelCart;
