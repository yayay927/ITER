import api from "../utils/Api.js";
import ProductView from "../views/ProductView.js";
import ProductModel from "../models/ProductModel.js";

class ProductController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.id = this.getId();

    this.getProduct();
  }

  getId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
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
    api.getProduct(this.id).then(({ data: product }) => {
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

const app = new ProductController(new ProductModel(), new ProductView());
