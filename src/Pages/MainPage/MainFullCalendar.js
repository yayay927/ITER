import React, { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
// import { Calendar } from "@fullcalendar/core";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
// import TouristAttractions from "./TouristAttractions.js";
// import { mockComponent } from "react-dom/test-utils";

function MainFullCalendar() {
  const INITIAL_EVENTS = [
    {
      title: "event 0",
      date: new Date().toISOString().substr(0, 10),
    },
  ];
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const calendarRef = useRef();

  useEffect(() => {
    const containerEl = document.querySelector("#events");
    console.log("a");
    new Draggable(containerEl, {
      itemSelector: ".event",
      eventData: (eventEl) => {
        return {
          title: eventEl.innerText,
        };
      },
    });
  }, []);

  //   const handleChangeTitleInput = (e) => {
  //     setEventTitle(e.target.value);
  //     // console.log(eventTitle);
  //   };

  return (
    <FullCalendar
      id="FullCalendar"
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "prev, next, today, myCustomButton",
        center: "title",
        right: "dayGridMonth, timeGridWeek, timeGridDay",
      }}
      ref={calendarRef}
      customButtons={{
        myCustomButton: {
          text: "create event",
          click: function () {
            // setEvents([
            //   ...events,
            //   {
            //     title: "event 1",
            //     date: new Date().toISOString().substr(0, 10),
            //   },
            // ]);

            // alert("clicked the custom button!");
            let dateStr = prompt("Enter a start date in YYYY-MM-DD format");
            let title = prompt("Enter a title for your event");
            let date = new Date(dateStr + "T00:00:00");
            let dateT = new Date(dateStr).toISOString();
            let dateTest = new Date(dateStr).toISOString().substr(0, 10);
            console.log(new Date(dateStr));
            console.log(date);
            console.log(dateT);
            console.log(dateTest);
            // let startTime;
            // let endTime;
            // const [startTime, setStartTime] = useState();

            // console.log(startTime);
            // console.log(endTime);

            console.log(FullCalendar);
            if (!isNaN(date.valueOf())) {
              calendarRef.current.getApi().addEvent({
                title: title,
                // start: date,
                // date: new Date().toISOString().substr(0, 10),
                date: date,
                allDay: true,
                // start: date + startTime,
                // end: date + endTime,
              });

              console.log(events);

              alert("Great. Now, update your database...");
            } else {
              alert("Invalid date.");
            }
          },
        },
      }}
      initialView="dayGridMonth"
      initialEvents={INITIAL_EVENTS}
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      draggable={true}
      droppable={true}
      weekends={true}
      nowIndicator={true}
      // allDaySlot={false}
      minTime="06:00:00"
      // maxTime="24:00:00"
      height="1000px"
      events={[
        {
          title: "Cuba music festival",
          date: "2021-05-14",
          color: "pink",
          // textColor: "green",
          start: "2021-05-20T10:30:00",
          end: "2021-05-22T11:30:00",
        },
        { title: "Italian restaurant gala", date: "2021-05-22" },
      ]}
    />
  );
}

export { MainFullCalendar };
