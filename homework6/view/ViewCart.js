const createCartHtmlContainer = (content) =>
  `<div id="cart" class="cart">${content}</div>`;

const createCartHtmlContent = (cart) => {
  return `
          <div class="cart__info">В корзине <span class="danger-text">${cart.getQuantityGood()}</span> 
          на <span class="danger-text">${cart.getSumm()}</span> ₽</div>
          <button class="cart__clear button">Очистить</button>`;
};

function ViewCart(containerId, cart) {
  this.containerId = containerId;
  this.cart = cart;
}

ViewCart.prototype.buildHtmlTree = function () {
  const container = document.getElementById(this.containerId);
  const cartContainer = document.getElementById("cart");

  if (cartContainer) {
    cartContainer.innerHTML = createCartHtmlContent(this.cart);
  } else {
    container.innerHTML =
      container.innerHTML +
      createCartHtmlContainer(createCartHtmlContent(this.cart));
  }
};

ViewCart.prototype.createHandlers = function () {
  const clearCartButton = document.querySelectorAll(".cart__clear");

  clearCartButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      this.cart.clear();
      this.render();
    });
  });
};

ViewCart.prototype.render = function () {
  this.buildHtmlTree();
};

export default ViewCart;
