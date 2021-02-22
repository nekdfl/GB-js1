import goodsList from "./fixture/FixtureProducts.js";
import ViewProductList from "./view/ViewProductsList.js";
import Cart from "./model/ModelCart.js";
import ViewCart from "./view/ViewCart.js";

const cart = new Cart();
const viewCart = new ViewCart("app", cart);
const onUpdate = () => {
  viewCart.render();
  viewCart.createHandlers();
};
const viewProductList = new ViewProductList("app", cart, goodsList, onUpdate);

const render = () => {
  viewProductList.render();
  viewCart.render();
  viewProductList.createHandlers();
  viewCart.createHandlers();
};

render();
