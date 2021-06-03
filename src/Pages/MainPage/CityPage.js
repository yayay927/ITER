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
// import { MainFullCalendar } from "./MainFullCalendar.js";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";
import { storeEventsData, getEventsData } from "../../Utils/firebase.js";
import { useHistory } from "react-router-dom";
// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// CommonJS
// const Swal = require("sweetalert2");

// Swal.fire({
//   title: "Error!",
//   text: "Do you want to continue",
//   icon: "error",
//   confirmButtonText: "Cool",
// });

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
  /* height: 100%; */
  height: 87vh;
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
  let history = useHistory();
  let { cityName } = useParams();
  let url = window.location.search;
  let params = new URLSearchParams(url);
  let tripId = params.get("number");
  // console.log(tripId);
  const [renderEvent, setRenderEvent] = useState();

  // console.log(cityName);

  if (cityName === "BuenosAires") {
    cityName = "Buenos Aires";
  } else if (cityName === "CapeTown") {
    cityName = "Cape Town";
  }

  const INITIAL_EVENTS = [
    // {
    //   title: "event 0",
    //   date: new Date().toISOString().substr(0, 10),
    // },
  ];

  const [events, setEvents] = useState(INITIAL_EVENTS);
  const calendarRef = useRef();
  const dispatch = useDispatch();
  const eventTitle = useSelector((state) => state.eventTitle);
  const startTime = useSelector((state) => state.startTime);
  const endTime = useSelector((state) => state.endTime);

  useEffect(() => {
    Swal.fire("Feel free to explore the city!");
  }, []);

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

  //get events and save
  function getEvents() {
    let e = calendarRef.current.getApi().getEvents();
    console.log(e);
    let saveEvents = [];
    e.forEach(function (item) {
      let eTitle = item._def.title;
      let eStart = item._instance.range.start.toISOString().substr(0, 19);
      let eEnd = item._instance.range.end.toISOString().substr(0, 19);
      let eColor = item._def.ui.backgroundColor;
      console.log(eColor);
      saveEvents.push({
        title: eTitle,
        start: eStart,
        end: eEnd,
        color: eColor,
      });
      setEvents({ title: eTitle, start: eStart, end: eEnd, color: eColor });
    });
    // console.log(saveEvents);

    // let cityData = [city: cityName]
    let UID = "GMRfBP2uJVcIeG3pGGfJHXLTG4e2";
    let tripName = "";
    async function idData() {
      let idNumber = await storeEventsData(saveEvents, cityName, UID, tripName);
      console.log(idNumber);
      history.push(`/confirm?city=${cityName}&number=${idNumber}`);
    }
    idData();
  }

  useEffect(() => {
    // console.log(tripId);
    if (tripId) {
      const renderEventsData = async () => {
        let data = await getEventsData(tripId);
        console.log(data);

        setRenderEvent(data);
        // renderEvent(tripId);
      };
      renderEventsData();
    }
  }, []);

  return (
    <CalendarPage>
      <CityName>{cityName}</CityName>
      <MainPart>
        <MapAndAttractions>
          <Map>
            <ScheduleMap />
          </Map>
          <div id="events">
            <TouristAttractions className="event"></TouristAttractions>
          </div>
          <div id="trans">
            <Transportations className="trans"></Transportations>
          </div>
        </MapAndAttractions>
        <CalendarSpace>
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
                click: async function () {
                  // setEvents([
                  //   ...events,
                  //   {
                  //     title: "event 1",
                  //     date: new Date().toISOString().substr(0, 10),
                  //   },
                  // ]);
                  // alert("clicked the custom button!");

                  const answer1 = async function test() {
                    const { value: evtDate } = await Swal.fire({
                      title: "Enter your event date",
                      input: "text",
                      inputLabel: "in YYYY-MM-DD format",
                      inputValue: "",
                      showCancelButton: true,
                      inputValidator: (value) => {
                        if (!value) {
                          return "You need to write something!";
                        }
                      },
                    });

                    if (evtDate) {
                      await Swal.fire(`Your event date is ${evtDate}`);
                    }
                    return evtDate;
                  };
                  const a = await answer1();

                  async function test2() {
                    const { value: evtTitle } = await Swal.fire({
                      title: "Enter your event title",
                      input: "text",
                      inputLabel: "",
                      inputValue: "",
                      showCancelButton: true,
                      inputValidator: (value) => {
                        if (!value) {
                          return "You need to write something!";
                        }
                      },
                    });

                    if (evtTitle) {
                      await Swal.fire(`Your event title is ${evtTitle}`);
                    }
                    return evtTitle;
                  }
                  const b = await test2();

                  // let dateStr = prompt(
                  //   "Enter a start date in YYYY-MM-DD format"
                  // );
                  // console.log("dateStr = " + dateStr);
                  // let title = prompt("Enter a title for your event");

                  // let date = new Date(dateStr + "T00:00:00"); //Sun May 30 2021 00:00:00 GMT+0800 (台北標準時間)
                  // // let dateT = new Date(dateStr).toISOString(); //2021-05-30T00:00:00.000Z
                  // let dateTest = new Date(dateStr).toISOString().substr(0, 19); //2021-05-30T00:00:00
                  // console.log("dateTest = " + dateTest);
                  // // console.log(new Date(dateStr)); //Sun May 30 2021 08:00:00 GMT+0800 (台北標準時間)

                  // console.log(a.valueOf());
                  // console.log(b.valueOf());
                  // console.log(typeof a);
                  // console.log(typeof b);
                  let c = new Date(a + "T00:00:00");
                  // console.log(c.valueOf());
                  // console.log(typeof c);

                  if (!isNaN(c.valueOf())) {
                    calendarRef.current.getApi().addEvent({
                      title: b,
                      date: a,
                      allDay: true,
                      color: "pink",
                    });

                    // alert("Great. Now, update your database...");
                    Swal.fire("Great. Now, update your database...");
                  } else {
                    alert("Invalid date.");
                  }
                },
              },
            }}
            initialView="timeGridWeek"
            initialEvents={INITIAL_EVENTS}
            editable={true}
            selectable={false}
            selectMirror={true}
            dayMaxEvents={true}
            draggable={true}
            droppable={true}
            weekends={true}
            nowIndicator={true}
            // allDaySlot={false}
            minTime="06:00:00"
            // maxTime="24:00:00"
            height="80vh" //"1000px"
            events={
              renderEvent
              // [
              // {
              //   title: "Cuba music festival",
              //   date: "2021-05-14",
              //   color: "pink",
              //   // textColor: "green",
              //   start: "2021-05-20T10:30:00",
              //   end: "2021-05-22T11:30:00",
              // },
              // { title: "Italian restaurant gala", date: "2021-05-22" },
              // ]
            }
          />
          <ConfirmButton onClick={getEvents}>Finish Edit</ConfirmButton>
        </CalendarSpace>
      </MainPart>
    </CalendarPage>
  );
}

export default CityPage;
