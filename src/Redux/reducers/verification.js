const initialState = {
  userEmail: "",
  userPassword: "",
  userName: "",
  userUID: "",
};

export default function verificationReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USEREMAIL":
      return { ...state, userEmail: action.data }; // 避免覆蓋 state
    case "UPDATE_USERPASSWORD":
      return { ...state, userPassword: action.data };
    case "UPDATE_USERNAME":
      return { ...state, userName: action.data };
    case "UPDATE_USERUID":
      return { ...state, userUID: action.data };
    default:
      return state;
  }
}
