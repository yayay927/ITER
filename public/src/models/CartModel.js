import BaseModel from "./BaseModel.js";

class CartModel extends BaseModel {
  constructor() {
    super();
  }

  changeCartItemQuantity(index, quantity) {
    const cartItems = this.cart.getItems();
    cartItems[index].qty = quantity;
    this.cart.setItems(cartItems);
  }

  removeCartItem(index) {
    const cartItems = this.cart.getItems();
    cartItems.splice(index, 1);
    this.cart.setItems(cartItems);
    window.alert("已從購物車移除");
  }
}

export default CartModel;
