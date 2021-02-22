/**
 *  class ModelGood
 */
function ModelGood(id, name, image, price, unit, quantity = 1) {
  this.id = id;
  this.name = name;
  this.image = image;
  this.price = price;
  this.unit = unit;
  this.quantity = quantity;
}

ModelGood.prototype.getId = function () {
  return this.id;
};

ModelGood.prototype.getName = function () {
  return this.name;
};

ModelGood.prototype.getImage = function () {
  return this.image;
};

ModelGood.prototype.getPrice = function () {
  return this.price;
};

ModelGood.prototype.getUnit = function () {
  return this.unit;
};

ModelGood.prototype.getQuantity = function () {
  return this.quantity;
};

ModelGood.prototype.increaseQuantity = function (quantity) {
  this.quantity += quantity;
  return this;
};

ModelGood.prototype.decreaseQuantity = function (quantity) {
  this.quantity -= quantity;

  if (this.quantity < 1) {
    this.quantity = 1;
  }

  return this;
};

ModelGood.prototype.getSumm = function () {
  return this.price * this.quantity;
};

module.exports = ModelGood;
