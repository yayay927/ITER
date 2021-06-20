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
// import Swal from "sweetalert2";
import printer from "../../images/printer.png";
// import link from "../../Components/link.png";
// import shareTo from "../../Components/share.png";
import map from "../../images/map.png";
import SocialMediaShare from "./SocialMediaShare.js";
// import ReactDOM from "react-dom";
import Joyride from "react-joyride";

const Confirm = styled.div`
  max-width: 1280px;
  width: 55.5%;
  margin: 60px auto 140px auto;
`;
const Title = styled.div`
  font-family: "Allura";
  font-size: 80px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 40px;
  width: fit-content;
  @media (max-width: 1024px) {
    font-size: 7vw;
  }
`;

const ComponentToPrint = styled.div`
  /* width: 70%; */
`;

const Calendar = styled.div`
  width: 100%;
  margin-bottom: 50px;
`;
const Additional = styled.div`
  margin-left: 100px;
  position: fixed;
  right: 30px;
  top: 30%;
`;

const Export = styled.div`
  margin-top: 60px;
  height: 60px;
  width: 60px;
  cursor: pointer;
  border-radius: 50px;
  border: 2px solid #91ccb9;
  background-color: #91ccb9;
  :hover {
    background-color: #eedd42;
    border: 2px solid #eedd42;
  }
`;
const Img = styled.img`
  height: 40px;
  width: 40px;
  margin: 10px;
`;

// const Share = styled.div`
//   margin-top: 30px;
//   height: 60px;
//   width: 60px;
//   cursor: pointer;
//   border-radius: 50px;
//   border: 2px solid #e1e4e7;
//   background-color: #e1e4e7;
//   :hover {
//     background-color: #eedd42;
//     border: 2px solid #eedd42;
//   }
// `;
// const Copy = styled.div`
//   margin-top: 30px;
//   height: 60px;
//   width: 60px;
//   cursor: pointer;
//   border-radius: 50px;
//   border: 2px solid #e1e4e7;
//   background-color: #e1e4e7;
//   :hover {
//     background-color: #eedd42;
//     border: 2px solid #eedd42;
//   }
// `;
// const Printer = styled.img`
//   margin-top: 60px;
//   height: 80px;
//   width: 80px;
//   cursor: pointer;
//   border-radius: 50px;
//   border: 1px solid #eedd42;
//   resize: both;
// `;

// const Weather = styled.button`
//   margin-top: 60px;
//   height: 80px;
//   width: 300px;
//   cursor: pointer;
// `;
const pageStyle = ` @page{ size: 2.5in 3in}`;

function ConfirmSchedule() {
  let history = useHistory();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const [eventsData, setEventsData] = useState([]);
  // const [copySuccess, setCopySuccess] = useState("");
  // const textAreaRef = useRef(null);
  // const [run, setRun] = useState(false);
  const [steps, setSteps] = useState([
    {
      target: ".fc-toolbar-title",
      content:
        "Congratulations on completing the schedule! You can check schedule here",
      // placement: "center",
    },
    {
      target: ".step-2",
      content: "You can export the itinerary to PDF file or print it out.",
    },
    {
      target: ".step-3",
      content: "You can share the itinerary on social media.",
    },

    {
      target: ".step-4",
      content: "You can check and manage trip here.",
    },
    {
      target: ".step-5",
      content: "Or explore more cities on map!",
    },

    //   ...
  ]);

  // useEffect(() => {
  //   Swal.fire("Congratulations on completing your schedule!");
  // }, []);

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
  if (tripId === undefined) {
    history.push(`/error`);
  }

  useEffect(() => {
    const renderEventsData = async () => {
      let data = await getEventsData(tripId);
      console.log(data);

      setEventsData(data);
    };
    renderEventsData();
    //eslint-disable-next-line
  }, []);

  // console.log(cityName);

  // function share() {
  //   let edit_UID = prompt("Enter the email you want to share with.");
  //   alert(
  //     "or share the link with friends to view:       " + window.location.href
  //   );
  // }

  // function copy() {
  //   console.log("hey");
  //   // var copyText = document.getElementById("copy");
  //   // copyText.select();
  //   // document.execCommand("copy");

  //   function copyToClipboard(e) {
  //     textAreaRef.current.select();
  //     document.execCommand("copy");
  //     // This is just personal preference.
  //     // I prefer to not show the the whole text area selected.
  //     e.target.focus();
  //     setCopySuccess("Copied!");
  //     console.log("here");
  //   }

  //   return (
  //     <div>
  //       {document.queryCommandSupported("copy") && (
  //         <div>
  //           <button onClick={copyToClipboard}>Copy</button>
  //           {copySuccess}
  //         </div>
  //       )}
  //       <form>
  //         <textarea ref={textAreaRef} value="" />
  //       </form>
  //     </div>
  //   );
  //   // alert("Copied the text: " + window.location.href);
  // }

  function goToMap() {
    history.push("/");
  }

  return (
    <div>
      <div>
        <Title>Have a good time in {cityName}!</Title>
      </div>
      <SocialMediaShare></SocialMediaShare>
      <Confirm>
        <Calendar>
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
                display="none"
                plugins={[
                  dayGridPlugin,
                  timeGridPlugin,
                  interactionPlugin,
                  adaptivePlugin,
                ]}
                headerToolbar={{
                  left: "",
                  center: "title",
                  right: "prev next today",
                }}
                initialView="timeGridWeek"
                // initialView="timeGrid"
                // initialView="timeline"
                // duration={{ days: 7 }}
                // visibleRange={{ start: "2021-05-20", end: "2021-05-31" }}
                // editable={true}
                selectable={false}
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
            <Export
              onClick={handlePrint}
              title="Export to PDF/ Print"
              className="step-2"
            >
              <Img src={printer}></Img>
            </Export>
          </div>
          <div>
            <Export
              onClick={goToMap}
              title="Explore other cities."
              className="step-5"
            >
              <Img src={map}></Img>
            </Export>
          </div>
          {/* <div>
            <GoBack onClick={backToEdit}>Go back to edit trip</GoBack>
          </div> */}

          {/* <div>
            <Share onClick={share} title="Share">
              <Img src={shareTo}></Img>
            </Share>
          </div> */}

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
      <Joyride
        run={true}
        steps={steps}
        continuous={true}
        // callback={(data) => handleJoyrideCallback(data, setRun)}
        // styles={{ options: defaultOptions }}
      ></Joyride>
    </div>
  );
}

export default ConfirmSchedule;
