import api from "./Api.js";

class Fb {
  constructor() {
    window.fbAsyncInit = this.init.bind(this);
    this.auth = undefined;
  }

  setup(getLoginStatusCallback) {
    this.getLoginStatusCallback = getLoginStatusCallback;
    this.loadSdk();
  }

  loadSdk() {
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/zh_TW/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  init() {
    window.FB.init({
      appId: "700590737403665",
      cookie: true,
      xfbml: true,
      version: "v3.1",
    });

    window.FB.getLoginStatus((response) => {
      this.handleLoginStatus(response);
      if (typeof this.getLoginStatusCallback === "function") {
        if (this.auth) {
          this.getProfile().then((profile) => {
            this.getLoginStatusCallback(profile);
          });
        } else {
          window.location.href = "/";
        }
      }
    });
  }

  handleLoginStatus(response) {
    if (response.status === "connected") {
      this.auth = response.authResponse;
      this.loginToServer();
    }
  }

  loginToServer() {
    api.signin({
      provider: "facebook",
      access_token: this.auth.accessToken,
    });
  }

  loginToFb() {
    window.FB.login(
      (response) => {
        this.handleLoginStatus(response);
      },
      { scope: "public_profile,email" }
    );
  }

  getProfile() {
    return new Promise((resolve, reject) => {
      window.FB.api(
        "/me?fields=id,name,email,picture.height(2048)",
        (response) => {
          if (response.error) {
            reject(response.error);
          } else {
            resolve(response);
          }
        }
      );
    });
  }
}

export default Fb;
