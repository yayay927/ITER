const initialState = [
  {
    eventTitle: "",
    startTime: "",
    endTime: "",
  },
  {
    eventTitle: "",
    startTime: "",
    endTime: "",
  },
];

export default function calendarEvent(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_EVENTTITLE":
      return { ...state, eventTitle: action.data }; // 避免覆蓋 state
    case "UPDATE_EVENTDATE":
      return { ...state, startTime: action.data };
    case "UPDATE_DURATION":
      return { ...state, endTime: action.data };
    default:
      return state;
  }
}
