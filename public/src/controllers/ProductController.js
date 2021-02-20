import BaseController from "./BaseController.js";
import ProductView from "../views/ProductView.js";
import ProductModel from "../models/ProductModel.js";

import api from "../utils/Api.js";
import Cart from "../utils/Cart.js";
import Fb from "../utils/Fb.js";
import Tappay from "../utils/Tappay.js";

class ProductController extends BaseController {
  constructor(model, view, fb, tappay) {
    super(model, view, fb, tappay);

    this.getProduct();
    this.fb.setup();
  }

  handleClickColorCode(index) {
    this.model.changeColorCode(index);
    this.onProductVariantChanged(
      this.model.product,
      this.model.selectedColorCode,
      this.model.selectedSize,
      this.model.quantity
    );
  }

  handleClickSize(index) {
    this.model.changeSize(index);
    this.onProductVariantChanged(
      this.model.product,
      this.model.selectedColorCode,
      this.model.selectedSize,
      this.model.quantity
    );
  }

  handleClickIncrement() {
    this.model.incrementQuantity();
    this.onProductVariantChanged(
      this.model.product,
      this.model.selectedColorCode,
      this.model.selectedSize,
      this.model.quantity
    );
  }

  handleClickDecrement() {
    this.model.decrementQuantity();
    this.onProductVariantChanged(
      this.model.product,
      this.model.selectedColorCode,
      this.model.selectedSize,
      this.model.quantity
    );
  }

  handleClickAddToCart() {
    this.model.addToCart();
    this.view.renderCount(this.model.cart.items.length);
  }

  onProductChanged(product, selectedColorCode, selectedSize, quantity) {
    this.view.renderProductDetail(product);
    this.view.renderProductVariant(
      product,
      selectedColorCode,
      selectedSize,
      quantity
    );
    this.view.bindClickColorCode(this.handleClickColorCode.bind(this));
    this.view.bindClickSize(this.handleClickSize.bind(this));
    this.view.bindClickIncrement(this.handleClickIncrement.bind(this));
    this.view.bindClickDecrement(this.handleClickDecrement.bind(this));
    this.view.bindClickAddToCart(this.handleClickAddToCart.bind(this));
  }

  onProductVariantChanged(product, selectedColorCode, selectedSize, quantity) {
    this.view.renderProductVariant(
      product,
      selectedColorCode,
      selectedSize,
      quantity
    );
    this.view.bindClickColorCode(this.handleClickColorCode.bind(this));
    this.view.bindClickSize(this.handleClickSize.bind(this));
  }

  getProduct() {
    api.getProduct(this.paramsId).then(({ data: product }) => {
      this.model.setProduct(product);
      this.onProductChanged(
        this.model.product,
        this.model.selectedColorCode,
        this.model.selectedSize,
        this.model.quantity
      );
    });
  }
}

const app = new ProductController(
  new ProductModel(new Cart()),
  new ProductView(),
  new Fb(),
  new Tappay()
);
