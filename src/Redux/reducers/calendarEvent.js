const initialState = [
  {
    eventTitle: "",
    eventTime: "",
    eventDate: "",
    startTime: "",
    endTime: "",
  },
  {
    eventTitle: "",
    eventTime: "",
    eventDate: "",
    startTime: "",
    endTime: "",
  },
];

export default function calendarEvent(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_EVENTTITLE":
      return { ...state, eventTitle: action.data }; // 避免覆蓋 state
    case "UPDATE_EVENTTIME":
      return { ...state, eventTime: action.data };
    case "UPDATE_EVENTDATE":
      return { ...state, eventDate: action.data };
    case "UPDATE_DURATION":
      return { ...state, duration: action.data };
    default:
      return state;
  }
}
