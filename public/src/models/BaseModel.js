import Cart from "../utils/Cart.js";

class BaseModel {
  constructor() {
    this.cart = new Cart();
  }
}

export default BaseModel;
