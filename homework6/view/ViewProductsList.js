import Good from "../model/ModelGood.js";

const createProductsListHtmlElement = (goodsListHtml) =>
  `<ul id="products" class="products">${goodsListHtml}</ul>`;

const createProductHtmlElement = (good) => {
  return `<li class="product" data-product-id=${good.getId()}>
            <img class="product__img" src="assets/img/${good.getImage()}">
            <div class="product__description">${good.getName()} - ${good.getPrice()} ₽</div>
            <button class="product__increase-quantity button" >+</button>
            <div class="product__quantity" >${good.getQuantity()} ${good.getUnit()}</div>
            <button class="product__decrease-quantity button">-</button>
            <button class="product__add-to-cart button">Добавить</button>
            <button class="product__remove-from-cart button">Удалить</button>
          </li>`;
};

function ViewProductList(containerId, cart, goods = [], onUpdate) {
  this.cart = cart;
  this.onUpdate = onUpdate;
  this.containerId = containerId;
  this.goods = goods.map(
    (g) => new Good(g.id, g.name, g.image, g.price, g.unit)
  );
}

ViewProductList.prototype.createHandlers = function () {
  const increaseButtons = document.querySelectorAll(
    ".product__increase-quantity"
  );

  const decreaseButtons = document.querySelectorAll(
    ".product__decrease-quantity"
  );

  const addToCartButtons = document.querySelectorAll(".product__add-to-cart");
  const removeFromCartButtons = document.querySelectorAll(
    ".product__remove-from-cart"
  );

  increaseButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const { productId } = e.target.parentNode.dataset;
      const good = this.findGood(productId);
      good.increaseQuantity(1);
      this.render();
    });
  });

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const { productId } = e.target.parentNode.dataset;
      const good = this.findGood(productId);
      good.decreaseQuantity(1);
      this.render();
    });
  });

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const { productId } = e.target.parentNode.dataset;
      const good = this.findGood(productId);
      const newGood = new Good(
        good.getId(),
        good.getName(),
        good.getImage(),
        good.getPrice(),
        good.getUnit(),
        good.getQuantity()
      );
      this.cart.addGood(newGood);
      this.render();
      this.onUpdate();
    });
  });

  removeFromCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const { productId } = e.target.parentNode.dataset;
      const good = this.findGood(productId);
      this.cart.removeGood(good);
      this.render();
      this.onUpdate();
    });
  });
};

ViewProductList.prototype.buildHtmlTree = function () {
  const container = document.getElementById(this.containerId);
  const productsContainer = document.getElementById("products");

  const goodsListHtml = this.goods.reduce(
    (html, g) => `${html}${createProductHtmlElement(g)}`,
    ""
  );

  if (productsContainer) {
    productsContainer.innerHTML = goodsListHtml;
  } else {
    container.innerHTML =
      container.innerHTML + createProductsListHtmlElement(goodsListHtml);
  }
};

ViewProductList.prototype.findGood = function (productId) {
  return this.goods.find((g) => g.getId() === Number(productId));
};

ViewProductList.prototype.render = function () {
  this.buildHtmlTree();
  this.createHandlers();
};

export default ViewProductList;
