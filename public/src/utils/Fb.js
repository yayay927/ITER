import api from './Api.js';

class Fb {
  constructor() {
    window.fbAsyncInit = this.init.bind(this);
    this.jwtToken = undefined;
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
      js.src = 'https://connect.facebook.net/zh_TW/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  init() {
    window.FB.init({
      appId: '700590737403665',
      cookie: true,
      xfbml: true,
      version: 'v3.1',
    });

    window.FB.getLoginStatus((response) => {
      this.handleLoginStatus(response);
    });
  }

  login() {
    window.FB.login(
      (response) => {
        this.handleLoginStatus(response);
      },
      { scope: 'public_profile,email' }
    );
  }

  async handleLoginStatus(response) {
    if (response.status === 'connected') {
      const { data } = await api.signin({
        provider: 'facebook',
        access_token: response.authResponse.accessToken,
      });
      this.jwtToken = data.access_token;
      this.profile = data.user;
    }
    if (typeof this.getLoginStatusCallback === 'function') {
      if (this.profile) {
        this.getLoginStatusCallback(this.profile);
      } else {
        window.location.href = '/';
      }
    }
  }
}

export default Fb;
