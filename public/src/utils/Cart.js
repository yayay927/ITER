class Cart {
  constructor() {
    this.cartItems = JSON.parse(window.localStorage.getItem("cart") || "[]");
    this.renderCart(this.cartItems);
  }

  static calculateSubtotal(items) {
    return items.reduce(
      (accumulator, item) => accumulator + item.qty * item.price,
      0
    );
  }

  renderCart(items) {
    document.querySelector(".count").textContent = items.length;
  }

  getItems() {
    return this.cartItems;
  }

  setItems(items) {
    this.cartItems = items;
    this.renderCart(this.cartItems);
    window.localStorage.setItem("cart", JSON.stringify(this.cartItems));
  }
}

export default Cart;
