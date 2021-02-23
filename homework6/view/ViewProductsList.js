import Good from "../model/ModelGood.js";

const createModalImageHtmlElemnt = (good) => {
  const isVisible = (i) => (i > 0 ? `hidden` : `visible`);
  const imgTag = (image, i) =>
    `<img class="${isVisible(i)}" src="assets/img/${image}">`;

  return good.getImageList().map(imgTag).join("");
};

const createModalImagePreview = (goods) =>
  goods
    .map(
      (good) =>
        `<div class="modal__img-preview hidden" data-product-id=${good.getId()}>
          <button class="modal__img-prev"> < </button> 
          ${createModalImageHtmlElemnt(good)}
          <button class="modal__img-next"> > </button>
        </div>`
    )
    .join("");

const createModalHtmlElement = (goods) =>
  `<div id="modalContainer" class="modal__container hidden"></div>
    <div id="modal" class="modal hidden">
    ${createModalImagePreview(goods)}
    </div>
    `;

const createProductsListHtmlElement = (goodsListHtml, goods) =>
  `<div class="products__container">
    <ul id="products" class="products">${goodsListHtml}</ul>
    ${createModalHtmlElement(goods)}
  </div>`;

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
    (g) => new Good(g.id, g.name, g.image, g.price, g.unit, 1, g.imageList)
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

  const imagePrevButtons = document.querySelectorAll(".modal__img-prev");
  const imageNextButtons = document.querySelectorAll(".modal__img-next");
  const productImages = document.querySelectorAll(".product__img");
  const modalWindow = document.getElementById("modalContainer");
  const modal = document.getElementById("modal");

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
        good.getQuantity(),
        good.getImageList()
      );
      this.cart.addGood(newGood);
      this.render();
      this.onUpdate();
    });
  });

  removeFromCartButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      const { productId } = e.target.parentNode.dataset;
      const good = this.findGood(productId);
      this.cart.removeGood(good);
      this.render();
      this.onUpdate();
    })
  );

  imagePrevButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      const currentVisibleImage = e.target.parentNode.querySelector(
        "img.visible"
      );

      let prevHiddendImage = currentVisibleImage.previousElementSibling;
      if (!prevHiddendImage || prevHiddendImage.tagName === "BUTTON") {
        const hiddendImageList = currentVisibleImage.parentNode.querySelectorAll(
          "img.hidden"
        );
        prevHiddendImage = hiddendImageList[hiddendImageList.length - 1];
      }
      currentVisibleImage.classList.remove("visible");
      currentVisibleImage.classList.add("hidden");

      prevHiddendImage.classList.remove("hidden");
      prevHiddendImage.classList.add("visible");
    })
  );

  imageNextButtons.forEach((button) =>
    button.addEventListener("click", (e) => {
      const currentVisibleImage = e.target.parentNode.querySelector(
        "img.visible"
      );

      let nextHiddendImage = currentVisibleImage.nextElementSibling;
      if (!nextHiddendImage || nextHiddendImage.tagName === "BUTTON") {
        const hiddendImageList = currentVisibleImage.parentNode.querySelectorAll(
          "img.hidden"
        );
        nextHiddendImage = hiddendImageList[0];
      }
      currentVisibleImage.classList.remove("visible");
      currentVisibleImage.classList.add("hidden");

      nextHiddendImage.classList.remove("hidden");
      nextHiddendImage.classList.add("visible");
    })
  );

  const hideModalWindow = () => {
    modalWindow.classList.remove("visible");
    modalWindow.classList.add("hidden");
    modal.classList.remove("visible");
    modal.classList.add("hidden");
    document.removeEventListener("keydown", (e) => {});
  };

  const showModalWindow = () => {
    modalWindow.classList.remove("hidden");
    modalWindow.classList.add("visible");
    modal.classList.remove("hidden");
    modal.classList.add("visible");
    document.addEventListener("keydown", (e) => {
      if (e.key == "Escape") {
        hideModalWindow();
      }
    });
  };

  productImages.forEach((image) => {
    image.addEventListener("click", (e) => {
      const { productId } = e.target.parentNode.dataset;
      const currentModalImagePreview = document.querySelector(
        `.modal__img-preview[data-product-id='${productId}']`
      );

      const allModalImagesPreview = document.querySelectorAll(
        ".modal__img-preview"
      );

      allModalImagesPreview.forEach((el) => {
        el.classList.remove("visible");
        el.classList.add("hidden");
      });

      currentModalImagePreview.classList.add("visible");

      showModalWindow();
    });
  });

  modalWindow.addEventListener("click", (e) => {
    hideModalWindow();
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
      container.innerHTML +
      createProductsListHtmlElement(goodsListHtml, this.goods);
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
