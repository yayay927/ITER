// Calendar part in main page
// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";
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

const CalendarPage = styled.div`
  margin: 20px 50px;
  width: 100vw;
  display: flex;
  margin-top: 100px;
`;

const MapAndAttractions = styled.div`
  margin-right: 20px;
  width: 45%;
  height: 100%;
  overflow: scroll;
`;

const CityName = styled.div`
  width: 100%;
  font-size: 55px;
`;

const Map = styled.div`
  width: 100%;
`;

const CalendarSpace = styled.div`
  width: 45%;
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

function CalendarTable() {
  let { cityName } = useParams();
  const [eventTitle, setEventTitle] = useState("");

  // console.log(cityName);

  if (cityName === "BuenosAires") {
    cityName = "Buenos Aires";
  } else if (cityName === "CapeTown") {
    cityName = "Cape Town";
  }

  const test = () => {};
  test();

  function renderEventContent(/*eventInfo*/) {
    // console.log(eventInfo);
    // console.log(eventInfo.timeText);
    // console.log(eventInfo.event.title);
    // calendar.addEvent( event [, source ] )
    console.log(eventTitle);
    return (
      <EachEvent>
        {/* <b>{eventInfo.timeText}</b> */}
        <b>{"2021 - 05 - 27"}</b>
        {/* <i>{eventInfo.event.title}</i> */}
        <i>{eventTitle}</i>
      </EachEvent>
    );
  }

  const handleChangeTitleInput = (e) => {
    setEventTitle(e.target.value);
    // console.log(eventTitle);
  };

  return (
    <CalendarPage>
      <MapAndAttractions>
        <CityName>{cityName}</CityName>
        <Map>
          <ScheduleMap />
        </Map>
        <TouristAttractions></TouristAttractions>
        <OwnEvent>
          You can also create your own event here.
          <Input>
            <AddSchedule
              type="text"
              onChange={handleChangeTitleInput}
              placeholder="Please enter event title."
            />
            <CreateEvent onClick={renderEventContent}>Create</CreateEvent>
          </Input>
          <Events>{renderEventContent}</Events>
        </OwnEvent>
        <Transportations> </Transportations>
      </MapAndAttractions>
      <CalendarSpace>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev, next, today, myCustomButton",
            center: "title",
            right: "dayGridMonth, timeGridWeek, timeGridDay",
          }}
          customButtons={{
            myCustomButton: {
              text: "create event",
              click: function () {
                // alert("clicked the custom button!");
                let dateStr = prompt("Enter a start date in YYYY-MM-DD format");
                let title = prompt("Enter a title for your event");
                let days = prompt("Enter how many days the trip is");
                let date = new Date(dateStr + "T00:00:00");

                if (!isNaN(date.valueOf())) {
                  // $("#calendar").fullCalendar("renderEvent", {
                  //   title: "dynamic event",
                  //   start: date,
                  //   allDay: true,
                  // });
                  FullCalendar.addEvent({
                    title: "Cuba music festival",
                    start: date,
                    date: "2021-05-16",
                  });
                  // calendar.addEvent({
                  //   title: title,
                  //   start: date,
                  //   allDay: true,
                  // });
                  alert("Great. Now, update your database...");
                } else {
                  alert("Invalid date.");
                }
              },
            },
          }}
          initialView="dayGridMonth"
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
          // eventContent={renderEventContent}
          events={[
            {
              title: "Cuba music festival",
              date: "2021-05-14",
              // start: moment().add(7, "days"),
              // end: moment().add(14, "days"),
              color: "pink",
              // textColor: "green",
            },
            { title: "Italian restaurant gala", date: "2021-05-22" },
          ]}
        />
        <a href="../confirm">
          <ConfirmButton>Finish Edit</ConfirmButton>
        </a>
      </CalendarSpace>
    </CalendarPage>
  );
}

export default CalendarTable;
