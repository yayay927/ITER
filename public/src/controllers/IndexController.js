import api from "../utils/Api.js";
import IndexView from "../views/IndexView.js";
import IndexModel from "../models/IndexModel.js";

class IndexController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.tag = this.getTag();
    this.nextPaging = 0;
    this.isFetching = false;

    this.interval = undefined;
    this.intervalTime = 5000;

    this.getMoreProducts();
    this.getCampaigns();

    this.view.bindScrollToBottom(this.getMoreProducts.bind(this));
  }

  getTag() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("tag") || "all";
  }

  get isPredefinedTag() {
    return ["women", "men", "accessories", "all"].indexOf(this.tag) > -1;
  }

  getMoreProducts() {
    if (this.isFetching || this.nextPaging === undefined) return;

    this.isFetching = true;

    (this.isPredefinedTag
      ? api.getProducts(this.tag, this.nextPaging)
      : api.searchProducts(this.tag, this.nextPaging)
    ).then(({ data: products, next_paging }) => {
      this.isFetching = false;
      this.nextPaging = next_paging;
      this.model.appendProducts(products);
      this.onProductsChanged(this.model.products);
    });
  }

  getCampaigns() {
    api.getCampaigns().then(({ data: campaigns }) => {
      this.model.setCampaigns(campaigns);
      this.onCampaignsChanged(
        this.model.campaigns,
        this.model.activeCampaignIndex
      );
      this.setupInterval();
    });
  }

  onProductsChanged(products) {
    this.view.renderProducts(products);
  }

  onCampaignsChanged(campaigns, index) {
    this.view.renderCampaigns(campaigns);
    this.view.setActiveCampaign(index);
    this.view.bindClickDot(this.handleClickDot.bind(this));
  }

  onActiveCampaignChanged(index) {
    this.view.setActiveCampaign(index);
  }

  handleClickDot(index) {
    this.model.setActiveCampaignIndex(index);
    this.onActiveCampaignChanged(this.model.activeCampaignIndex);
    this.setupInterval();
  }

  handleInterval() {
    this.model.setNextActiveCampaignIndex();
    this.onActiveCampaignChanged(this.model.activeCampaignIndex);
  }

  setupInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = window.setInterval(
      this.handleInterval.bind(this),
      this.intervalTime
    );
  }
}

const app = new IndexController(new IndexModel(), new IndexView());
