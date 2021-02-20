import BaseController from "./BaseController.js";
import ThankyouView from "../views/ThankyouView.js";
import ThankyouModel from "../models/ThankyouModel.js";

import Cart from "../utils/Cart.js";
import Fb from "../utils/Fb.js";
import Tappay from "../utils/Tappay.js";

class ThankyouController extends BaseController {
  constructor(model, view, fb, tappay) {
    super(model, view, fb, tappay);

    this.view.renderNumber(this.paramsNumber);
    this.fb.setup();
  }
}

const app = new ThankyouController(
  new ThankyouModel(new Cart()),
  new ThankyouView(),
  new Fb(),
  new Tappay()
);
