import api from "../utils/Api.js";
import CartView from "../views/CartView.js";
import CartModel from "../models/CartModel.js";
import Cart from "../utils/Cart.js";
import Tappay from "../utils/Tappay.js";

class CartController {
  constructor(model, view, tappay) {
    this.model = model;
    this.view = view;
    this.tappay = tappay;

    this.onCartItemsChanged(this.model.cart.getItems());
    this.view.bindClickCheckout(this.handleClickCheckout.bind(this));
    this.tappay.setup();
  }

  onCartItemsChanged(cartItems) {
    this.view.renderCartItems(cartItems);
    this.view.bindChangeItemSelect(this.handleChangeItemQuantity.bind(this));
    this.view.bindClickItemRemove(this.handleRemoveItem.bind(this));
  }

  handleChangeItemQuantity(index, quantity) {
    this.model.changeCartItemQuantity(index, quantity);
    this.onCartItemsChanged(this.model.cart.getItems());
  }

  handleRemoveItem(index) {
    this.model.removeCartItem(index);
    this.onCartItemsChanged(this.model.cart.getItems());
  }

  makeCheckoutData(prime, cartItems, recipient) {
    const subtotal = Cart.calculateSubtotal(cartItems);
    const order = {
      shipping: "delivery",
      payment: "credit_card",
      subtotal: subtotal,
      freight: 60,
      total: subtotal + 60,
      recipient,
      list: cartItems,
    };
    const data = { prime, order };
    return data;
  }

  async handleClickCheckout(recipient) {
    const cartItems = this.model.cart.getItems();

    if (this.tappay.canGetPrime) {
      let prime;
      try {
        prime = await this.tappay.getPrime();
      } catch (error) {
        window.alert(error);
      }
      const data = this.makeCheckoutData(prime, cartItems, recipient);

      api.checkout(data).then(({ data: { number } }) => {
        this.model.cart.setItems([]);
        window.location.href = `/thankyou.html?number=${number}`;
      });
    } else {
      window.alert(this.tappay.cannotGetPrimeReason);
    }
  }
}

const app = new CartController(new CartModel(), new CartView(), new Tappay());
