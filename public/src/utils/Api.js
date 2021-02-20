class Api {
  constructor() {
    this.API_HOST = "https://api.appworks-school.tw/api/1.0";
  }

  async getProducts(category, paging) {
    const response = await fetch(
      `${this.API_HOST}/products/${category}?paging=${paging}`
    );
    return await response.json();
  }

  async getCampaigns() {
    const response = await fetch(`${this.API_HOST}/marketing/campaigns`);
    return await response.json();
  }

  async searchProducts(keyword, paging) {
    const response = await fetch(
      `${this.API_HOST}/products/search?keyword=${keyword}&paging=${paging}`
    );
    return await response.json();
  }

  async getProduct(id) {
    const response = await fetch(`${this.API_HOST}/products/details?id=${id}`);
    return await response.json();
  }

  async checkout(data, accessToken) {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    const response = await fetch(`${this.API_HOST}/order/checkout`, {
      body: JSON.stringify(data),
      headers,
      method: "POST",
    });
    return await response.json();
  }

  async signin(data) {
    const response = await fetch(`${this.API_HOST}/user/signin`, {
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: "POST",
    });
    return await response.json();
  }
}

export default new Api();
