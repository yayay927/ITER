// Calendar part in main page
// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
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
`;

const MapAndAttractions = styled.div`
  margin-right: 20px;
  width: 45%;
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

const AddSchedule = styled.input`
  width: 50%;
  height: 50px;
`;

function CalendarTable() {
  let { cityName } = useParams();
  console.log(cityName);
  const test = () => {
    console.log("1");
  };
  test();

  function RenderEventContent(eventInfo) {
    console.log(eventInfo);
    return (
      <>
        <b>{eventInfo.timeText}</b>
        {/* <i>{eventInfo.event.title}</i> */}
      </>
    );
  }
  // RenderEventContent();

  return (
    <CalendarPage>
      <MapAndAttractions>
        {/* <CityName>Cuba</CityName> */}
        <CityName>{cityName}</CityName>
        <Map>
          <ScheduleMap />
        </Map>
        <AddSchedule type="text" placeholder="Create your event" />
        <RenderEventContent></RenderEventContent>
        <TouristAttractions></TouristAttractions>
        <Transportations> </Transportations>
      </MapAndAttractions>
      <CalendarSpace>
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
          droppable={true}
          weekends={true}
          height="1000px"
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
      </CalendarSpace>
    </CalendarPage>
  );
}

export default CalendarTable;
