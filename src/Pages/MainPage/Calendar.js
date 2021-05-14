// Calendar part in main page
// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ScheduleMap from "./ScheduleMap.js";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { mockComponent } from "react-dom/test-utils";

function CalendarTable() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev, next, today",
        center: "title",
        right: "dayGridMonth, timeGridWeek, timeGridDay",
      }}
      initialView="dayGridMonth"
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      draggable={true}
      weekends={true}
      events={[
        {
          title: "event 1",
          date: "2021-05-14",
          // start: moment().add(7, "days"),
          // end: moment().add(14, "days"),
          color: "pink",
          // textColor: "green",
        },
        { title: "event 2", date: "2021-05-22" },
      ]}
      // weekends={this.state.weekendsVisible}
      // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
      // select={this.handleDateSelect}
      // eventContent={renderEventContent} // custom render function
      // eventClick={this.handleEventClick}
      // eventsSet={this.handleEvents}
    />
  );
}

export default CalendarTable;
