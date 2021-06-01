//Confirm schedule page
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import adaptivePlugin from "@fullcalendar/adaptive";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
// import { ComponentToPrint } from "../../ComponentToPrint";
import firebase from "firebase/app";
import "firebase/firestore";
import { getEventsData } from "../../Utils/firebase.js";

const Confirm = styled.div`
  margin: 100px 20px 40px 20px;
  display: flex;
`;
const Previous = styled.button`
  cursor: pointer;
  margin-bottom: 20px;
`;
const ComponentToPrint = styled.div`
  /* width: 70%; */
`;

const Calendar = styled.div`
  width: 70%;
`;
const Additional = styled.div`
  margin-left: 100px;
  /* visibility: hidden; */
`;
const Save = styled.button`
  margin-top: 65px;
  height: 100px;
  width: 300px;
  cursor: pointer;
`;
const Export = styled.button`
  margin-top: 65px;
  height: 100px;
  width: 300px;
  cursor: pointer;
`;
const Share = styled.button`
  margin-top: 65px;
  height: 100px;
  width: 300px;
  cursor: pointer;
`;
const Hotel = styled.button`
  margin-top: 65px;
  height: 100px;
  width: 300px;
  cursor: pointer;
`;
const Restaurant = styled.button`
  margin-top: 65px;
  height: 100px;
  width: 300px;
  cursor: pointer;
`;
const Ticket = styled.button`
  margin-top: 65px;
  height: 100px;
  width: 300px;
  cursor: pointer;
`;
const Weather = styled.button`
  margin-top: 65px;
  height: 100px;
  width: 300px;
  cursor: pointer;
`;
const pageStyle = `{ size: 2.5in 4in}`;

function ConfirmSchedule() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [eventsData, setEventsData] = useState([]);

  function renderEventContent(eventInfo) {
    console.log(eventInfo);
    console.log(eventInfo.timeText);
    console.log(eventInfo.event.title);
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  function exportPDF() {
    Additional.style.visibility = "hidden";
    window.print();
  }

  let url = window.location.search;
  let params = new URLSearchParams(url);
  let tripId = params.get("number");
  // let tripId = "Y0ynOuM8PMTKUtj77JdN";

  useEffect(() => {
    const renderEventsData = async () => {
      let data = await getEventsData(tripId);
      console.log(data);

      setEventsData(data);
    };
    renderEventsData();
  }, []);

  return (
    <div>
      <Confirm>
        <Calendar>
          <a href="../calendar">
            <Previous>Go Back</Previous>
          </a>
          <h1>
            Congrantulations on finishing your schedule! If you want to do any
            change, please click go back to edit your schedule.
          </h1>
          <ComponentToPrint
            width="800px"
            pageStyle={pageStyle}
            ref={componentRef}
          >
            <div width="700px">
              <FullCalendar
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  adaptivePlugin,
                ]}
                headerToolbar={{
                  left: "prev, next, today",
                  center: "title",
                  right: "timeGridWeek",
                }}
                initialView="timeGrid"
                // initialView="timeline"
                duration={{ days: 7 }}
                visibleRange={{ start: "2021-05-20", end: "2021-05-31" }}
                // editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                draggable={true}
                droppable={true}
                weekends={true}
                minTime="06:00:00"
                height="1300px"
                eventContent={renderEventContent}
                events={
                  eventsData
                  // {
                  //   title: "Cuba music festival",
                  //   date: "2021-05-14",
                  //   // start: moment().add(7, "days"),
                  //   // end: moment().add(14, "days"),
                  //   color: "pink",
                  //   // textColor: "green",
                  //   display: "background",
                  // },
                  // { title: "Italian restaurant gala", date: "2021-05-22" },
                  // {
                  //   title: "Centro Storico di Venezia",
                  //   start: "2021-06-21T00:00:00",
                  //   end: "2021-06-22T00:00:00",
                  // },
                }
              />
            </div>
          </ComponentToPrint>
        </Calendar>
        <Additional media="print" type="text/css">
          {/* <div>
            <Save>Save to my trip</Save>
          </div> */}
          <div>
            <Export onClick={handlePrint} /* onClick={exportPDF}*/>
              Export
            </Export>
          </div>
          {/* <div>{JSON.stringify(eventsData)}</div> */}
          <div>
            <Share>Share</Share>
          </div>

          <div>
            <Hotel>Book Hotels</Hotel>
          </div>

          <div>
            <Restaurant>Find Restaurants</Restaurant>
          </div>

          <div>
            <Ticket>Buy Tickets</Ticket>
          </div>

          <div>
            <Weather>Local Weather</Weather>
          </div>
        </Additional>
      </Confirm>
    </div>
  );
}

export default ConfirmSchedule;
