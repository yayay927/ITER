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
// import firebase from "firebase/app";
import "firebase/firestore";
import { getEventsData } from "../../Utils/firebase.js";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Confirm = styled.div`
  display: flex;
  width: 90%;
  margin: 60px auto 40px auto;
`;

const ComponentToPrint = styled.div`
  /* width: 70%; */
`;

const Calendar = styled.div`
  width: 100%;
  margin: 50px;
`;
const Additional = styled.div`
  margin-left: 100px;
  /* visibility: hidden; */
`;
const Save = styled.button`
  /* margin-top: 60px; */
  height: 80px;
  width: 300px;
  cursor: pointer;
`;
const Export = styled.button`
  margin-top: 60px;
  height: 80px;
  width: 300px;
  cursor: pointer;
`;
const GoBack = styled.button`
  margin-top: 60px;
  height: 80px;
  width: 300px;
  cursor: pointer;
`;
const Share = styled.button`
  margin-top: 60px;
  height: 80px;
  width: 300px;
  cursor: pointer;
`;
const Copy = styled.button`
  margin-top: 60px;
  height: 80px;
  width: 300px;
  cursor: pointer;
`;
// const Hotel = styled.button`
//   margin-top: 60px;
//   height: 100px;
//   width: 300px;
//   cursor: pointer;
// `;
// const Restaurant = styled.button`
//   margin-top: 65px;
//   height: 100px;
//   width: 300px;
//   cursor: pointer;
// `;
// const Ticket = styled.button`
//   margin-top: 65px;
//   height: 100px;
//   width: 300px;
//   cursor: pointer;
// `;
const Weather = styled.button`
  margin-top: 60px;
  height: 80px;
  width: 300px;
  cursor: pointer;
`;
const pageStyle = ` @page{ size: 2.5in 3in}`;

function ConfirmSchedule() {
  let history = useHistory();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    Swal.fire("Congratulations on completing your schedule!");
  }, []);

  console.log("1");

  function renderEventContent(eventInfo) {
    console.log(eventInfo);
    // console.log(eventInfo.timeText);
    // console.log(eventInfo.event.title);
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  let url = window.location.search;
  let params = new URLSearchParams(url);
  let tripId = params.get("number");
  let cityName = params.get("city");
  // let tripId = "Y0ynOuM8PMTKUtj77JdN";
  // console.log(window.location.href);

  useEffect(() => {
    const renderEventsData = async () => {
      let data = await getEventsData(tripId);
      console.log(data);

      setEventsData(data);
    };
    renderEventsData();
  }, []);

  // console.log(cityName);

  function backToEdit() {
    history.push(`/city/${cityName}?number=${tripId}`);
    // document.location.href = `../city/${cityName}?number=${tripId}`;
  }

  function save() {
    let time = new Date().toISOString().substr(0, 10);
    console.log(time);
  }

  function share() {
    let edit_UID = prompt("Enter the email you want to share with.");
    alert(
      "or share the link with friends to view:       " + window.location.href
    );
  }

  function copy() {
    // var copyText = document.getElementById("copy");
    // copyText.select();
    // document.execCommand("copy");

    alert("Copied the text: " + window.location.href);
  }

  return (
    <div>
      <Confirm>
        <Calendar>
          {/* <a href="../calendar"> */}
          {/* <Previous>Go Back</Previous> */}
          {/* </a> */}
          {/* <h1>
            Congrantulations on finishing your schedule! If you want to do any
            change, please click go back to edit your schedule.
          </h1> */}
          <ComponentToPrint
            id="printComponent"
            height="1200px"
            width="1000px"
            pageStyle={pageStyle}
            ref={componentRef}
          >
            <div>
              <FullCalendar
                // id="fullCalendar"
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
                // minTime="06:00:00"
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
            <Save onClick={save}>Save to my trip</Save>
          </div> */}
          <div>
            <Export onClick={handlePrint} /* onClick={exportPDF}*/>
              Export to PDF/ Print
            </Export>
          </div>
          {/* <div>
            <GoBack onClick={backToEdit}>Go back to edit trip</GoBack>
          </div> */}
          {/* <div>{JSON.stringify(eventsData)}</div> */}
          <div>
            <Share onClick={share}>Share</Share>
          </div>
          <div>
            {/* <div id="copy">{window.location.href}</div> */}
            <Copy onClick={copy}>Copy trip link</Copy>
          </div>
          {/* <div>
            <Hotel>Book Hotels</Hotel>
          </div> */}

          {/* <div>
            <Restaurant>Find Restaurants</Restaurant>
          </div> */}

          {/* <div>
            <Ticket>Buy Tickets</Ticket>
          </div> */}

          {/* <div>
            <Weather>Local Weather</Weather>
          </div> */}
        </Additional>
      </Confirm>
    </div>
  );
}

export default ConfirmSchedule;
