import ThankyouView from "../views/ThankyouView.js";
import ThankyouModel from "../models/ThankyouModel.js";

class ThankyouController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.renderNumber(this.model.number);
  }
}

const app = new ThankyouController(new ThankyouModel(), new ThankyouView());
