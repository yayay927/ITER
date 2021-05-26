import verificationReducer from "./verification.js";
// import signupReducer from "./signup.js";
// import createEventReducer from "./createEvent";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  verification: verificationReducer,
  //   signup: signupReducer,
  //   createEvent: createEventReducer,
});

export default allReducers;
