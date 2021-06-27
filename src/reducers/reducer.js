const initialState = {
  userEmail: "",
  userUID: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USEREMAIL":
      return { ...state, userEmail: action.data }; // 避免覆蓋 state
    case "UPDATE_USERUID":
      return { ...state, userUID: action.data };
    default:
      return state;
  }
}
