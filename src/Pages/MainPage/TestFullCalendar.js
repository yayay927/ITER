import $ from "jquery";
import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
// import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { Calendar /*as FullCalendar*/ } from "@fullcalendar/core";
import "@fullcalendar/common/main.css";
import anchor from "../../Components/anchor.png";
import citiesofartistsin from "../../Components/cities-of-artists-in.jpg";
import sempre from "../../Components/montecarlo-e-sempre-un.jpg";
import caption from "../../Components/caption.jpg";

const Container = styled.div`
  display: flex;
  margin-bottom: 100px;
  width: 50%;
`;

class Application extends React.Component {
  render() {
    return (
      <Container>
        <External />
        <CalendarCompo />
      </Container>
    );
  }
}

/*
 * A simple React component
 */
class CalendarCompo extends React.Component {
  render() {
    return <div id="calendar"></div>;
  }
  componentDidMount() {
    console.log($("#calendar").get(0));
    const fullCalendar = new Calendar($("#calendar").get(0), {
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today, myCustomButton",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      },
      //   height: "500px",
      //   width: "500px",
      editable: true,
      dayHeaders: true,
      nowIndicator: true,
      customButtons: {
        myCustomButton: {
          text: "create event",
          click: function () {
            let dateStr = prompt("Enter a start date in YYYY-MM-DD format");
            let title = prompt("Enter a title for your event");
            // let days = prompt("Enter how many days the trip is");
            let date = new Date(dateStr + "T00:00:00");

            if (!isNaN(date.valueOf())) {
              //   $("#calendar").fullCalendar("renderEvent", {
              //     title: title,
              //     start: date,
              //     allDay: true,
              //   });

              fullCalendar.addEvent({
                title: title,
                start: date,
                allDay: true,
              });

              alert("Great. Now, update your database...");
            } else {
              alert("Invalid date.");
            }
          },
        },
      },
      //   draggable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function () {
        // is the "remove after drop" checkbox checked?
        if ($("#drop-remove").is(":checked")) {
          // if so, remove the element from the "Draggable Events" list
          $(this).remove();
        }
      },
    });
    fullCalendar.render();
  }
}

class External extends React.Component {
  render() {
    return (
      <div id="external-events">
        <h4>Draggable Events</h4>
        <div className="fc-event">My Event 1</div>
        <div className="fc-event">My Event 2</div>
        <div className="fc-event">My Event 3</div>
        <div className="fc-event">My Event 4</div>
        <div className="fc-event">My Event 5</div>
        <div
          //   id="draggable-el"

          data-event='{ "title": "anchor" }'
          className="fc-event"
          style={{
            background: `url(${anchor})`,
            backgroundSize: `cover`,
            height: "100px",
            cursor: "pointer",
          }}
        >
          anchor
        </div>
        <div
          data-event='{ "title": "monaco" }'
          className="fc-event"
          style={{
            background: `url(${citiesofartistsin})`,
            backgroundSize: `cover`,
            height: "100px",
            cursor: "pointer",
          }}
        >
          monaco
        </div>
        <div
          data-event='{ "title": "montecarlo" }'
          className="fc-event"
          style={{
            background: `url(${sempre})`,
            backgroundSize: `cover`,
            height: "100px",
            cursor: "pointer",
          }}
        >
          montecarlo
        </div>
        <div
          data-event='{ "title": "caption" }'
          className="fc-event"
          style={{
            background: `url(${caption})`,
            backgroundSize: `cover`,
            height: "100px",
            cursor: "pointer",
          }}
        >
          caption
        </div>

        <p>
          <input type="checkbox" id="drop-remove" />
          <label for="drop-remove">remove after drop</label>
        </p>
      </div>
    );
  }
  componentDidMount() {
    $("#external-events .fc-event").each(function () {
      new Draggable($(this).get(0), {
        // eventData: {
        //   title: "my event 3",
        //   //   duration: "02:00",
        // },
      });
      // store data so the calendar knows to render an event upon drop
      //   $(this).data("event", {
      //     title: $.trim($(this).text()), // use the element's text as the event title
      //     stick: true, // maintain when user navigates (see docs on the renderEvent method)
      //   });

      // make the event draggable using jQuery UI
      //   $(this).draggable({
      //     zIndex: 999,
      //     revert: true, // will cause the event to go back to its
      //     revertDuration: 0, //  original position after the drag
      //   });
    });
  }
}

export { Application, CalendarCompo, External };
