import BaseModel from "./BaseModel.js";

class ThankyouModel extends BaseModel {
  constructor() {
    super();

    this.number = this.getNumber();
  }

  getNumber() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("number");
  }
}

export default ThankyouModel;
