class BaseController {
  constructor(model, view, fb, tappay) {
    this.model = model;
    this.view = view;
    this.fb = fb;
    this.tappay = tappay;

    this.view.renderCount(this.model.cart.items.length);
    this.view.handleTag(this.paramsTag);
    this.view.bindInputSearchPressEnter(this.redirectToIndexPageWithTag);
    this.view.bindClickProfile(this.handleClickProfile.bind(this));
  }

  get paramsNumber() {
    return this.getParams("number");
  }

  get paramsId() {
    return this.getParams("id");
  }

  get paramsTag() {
    return this.getParams("tag") || "all";
  }

  getParams(key) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }

  redirectToIndexPageWithTag(tag) {
    window.location.href = `/?tag=${tag}`;
  }

  handleClickProfile() {
    if (this.fb.auth) {
      window.location.href = "/profile.html";
    } else {
      this.fb.loginToFb();
    }
  }
}

export default BaseController;
