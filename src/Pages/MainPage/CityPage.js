// Calendar part in main page
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ScheduleMap from "./ScheduleMap.js";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import { mockComponent } from "react-dom/test-utils";
import { useParams } from "react-router-dom";
import TouristAttractions from "./TouristAttractions.js";
import Transportations from "./Transportations.js";
import { MainFullCalendar } from "./MainFullCalendar.js";

const CalendarPage = styled.div`
  margin: 20px 50px;
  width: 100vw;
  /* display: flex; */
  margin-top: 100px;
  @media (max-width: 768px) {
    margin: 80px 0px;
  }
`;
const MainPart = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;

const MapAndAttractions = styled.div`
  margin-right: 20px;
  width: 45%;
  height: 100%;
  overflow: scroll;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CityName = styled.div`
  width: 100%;
  font-size: 55px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const Map = styled.div`
  width: 100%;
`;

const CalendarSpace = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const OwnEvent = styled.div`
  width: 100%;
  font-size: 42px;
  margin-top: 30px;
`;
const Input = styled.div`
  width: 100%;
`;
const Events = styled.div`
  width: 99%;
  border: 1px solid lightgrey;
  height: 300px;
  margin-top: 10px;
`;
const AddSchedule = styled.input`
  width: 50%;
  height: 50px;
  margin-right: 20px;
  font-size: 20px;
  padding-left: 5px;
`;
const CreateEvent = styled.button`
  width: 100px;
  height: 50px;
`;
const EachEvent = styled.button`
  width: 50px;
  height: 50px;
  background-color: lightpink;
`;

const ConfirmButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 50px;
  margin-top: 5px;
`;

function CityPage() {
  let { cityName } = useParams();

  // console.log(cityName);

  if (cityName === "BuenosAires") {
    cityName = "Buenos Aires";
  } else if (cityName === "CapeTown") {
    cityName = "Cape Town";
  }

  const test = () => {};
  test();

  const INITIAL_EVENTS = [
    {
      title: "event 0",
      date: new Date().toISOString().substr(0, 10),
    },
  ];

  const [events, setEvents] = useState(INITIAL_EVENTS);
  const calendarRef = useRef();
  console.log(events);

  useEffect(() => {
    const containerEl = document.querySelector("#events");
    new Draggable(containerEl, {
      itemSelector: ".event",
      eventData: (eventEl) => {
        return {
          title: eventEl.innerText,
        };
      },
    });
  }, []);

  useEffect(() => {
    const containerEl = document.querySelector("#trans");
    new Draggable(containerEl, {
      itemSelector: ".trans",
      eventData: (eventEl) => {
        return {
          title: eventEl.innerText,
          color: "#b6e13d",
        };
      },
    });
  }, []);

  // const handleChangeTitleInput = (e) => {
  //   setEventTitle(e.target.value);
  //   // console.log(eventTitle);
  // };

  //get events and save
  function getEvents() {
    console.log("getEvents");
    let e = calendarRef.current.getApi().getEvents();
    console.log(e);
  }

  return (
    <CalendarPage>
      <CityName>{cityName}</CityName>
      <MainPart>
        <MapAndAttractions>
          <Map>
            <ScheduleMap />
          </Map>
          <div id="events">
            {/* <li className="event">event 1</li> */}
            <TouristAttractions className="event"></TouristAttractions>
          </div>
          <div id="trans">
            {/* <li className="trans">Driving</li>
            <li className="trans">Walking</li>
            <li className="trans">Cycling</li> */}
            <Transportations className="trans">
              {/* <TouristAttractions className="event"></TouristAttractions> */}
            </Transportations>
          </div>
        </MapAndAttractions>
        <CalendarSpace>
          {/* <MainFullCalendar></MainFullCalendar> */}
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
                  let dateStr = prompt(
                    "Enter a start date in YYYY-MM-DD format"
                  );
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
            events={
              [
                // {
                //   title: "Cuba music festival",
                //   date: "2021-05-14",
                //   color: "pink",
                //   // textColor: "green",
                //   start: "2021-05-20T10:30:00",
                //   end: "2021-05-22T11:30:00",
                // },
                // { title: "Italian restaurant gala", date: "2021-05-22" },
              ]
            }
          />
          {/* <a href="../confirm"> */}
          <ConfirmButton onClick={getEvents}>Finish Edit</ConfirmButton>
          {/* </a> */}
        </CalendarSpace>
      </MainPart>
    </CalendarPage>
  );
}

export default CityPage;
