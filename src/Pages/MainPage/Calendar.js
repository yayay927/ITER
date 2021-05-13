// Calendar part in main page
// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ScheduleMap from "./ScheduleMap.js";

function CalendarTable() {
  return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />;
}

export default CalendarTable;
