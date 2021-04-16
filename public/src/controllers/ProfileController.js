import BaseController from './BaseController.js';
import ProfileView from '../views/ProfileView.js';
import ProfileModel from '../models/ProfileModel.js';

import Cart from '../utils/Cart.js';
import Fb from '../utils/Fb.js';
import Tappay from '../utils/Tappay.js';

class ProfileController extends BaseController {
  constructor(model, view, fb, tappay) {
    super(model, view, fb, tappay);

    this.fb.setup(this.getFbLoginStatusCallback.bind(this));
  }

  getFbLoginStatusCallback(proflie) {
    this.view.renderProfile(proflie);
  }
}

const app = new ProfileController(
  new ProfileModel(new Cart()),
  new ProfileView(),
  new Fb(),
  new Tappay()
);
