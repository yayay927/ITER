import ProfileView from "../views/ProfileView.js";
import ProfileModel from "../models/ProfileModel.js";

class ProfileController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }
}

const app = new ProfileController(new ProfileModel(), new ProfileView());
