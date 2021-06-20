import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import adaptivePlugin from "@fullcalendar/adaptive";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import "firebase/firestore";
import { getEventsData } from "../../Utils/firebase.js";
import { useHistory } from "react-router-dom";
import printer from "../../images/printer.png";
import map from "../../images/map.png";
import SocialMediaShare from "./SocialMediaShare.js";
import Joyride from "react-joyride";

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
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const Confirm = styled.div`
  max-width: 1280px;
  width: 65%;
  margin: 60px auto 140px auto;
  @media (max-width: 768px) {
    margin-top: 10px;
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
  @media (max-width: 730px) {
    display: none;
  }
`;
const Img = styled.img`
  height: 40px;
  width: 40px;
  margin: 10px;
`;

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

  function renderEventContent(eventInfo) {
    console.log(eventInfo);
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
                selectable={false}
                selectMirror={true}
                dayMaxEvents={true}
                draggable={true}
                droppable={true}
                weekends={true}
                height="1300px"
                eventContent={renderEventContent}
                events={eventsData}
              />
            </div>
          </ComponentToPrint>
        </Calendar>
        <Additional media="print" type="text/css">
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
