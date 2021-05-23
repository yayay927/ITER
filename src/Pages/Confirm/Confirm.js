//Confirm schedule page
import styled from "styled-components";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";

const Confirm = styled.div`
  margin: 100px 20px 40px 20px;
  display: flex;
`;
const Previous = styled.button`
  cursor: pointer;
  margin-bottom: 20px;
`;
const Calendar = styled.div`
  width: 70%;
`;
const Additional = styled.div`
  margin-left: 100px;
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

function ConfirmSchedule() {
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
  return (
    <div>
      <Confirm>
        <Calendar>
          <Previous>Go Back</Previous>
          <h1>
            Congrantulations on finishing your schedule! If you want to do any
            change, please click go back to edit your schedule.
          </h1>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: "prev, next, today",
              center: "title",
              right: "timeGridWeek",
            }}
            initialView="timeGridWeek"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            draggable={true}
            droppable={true}
            weekends={true}
            height="1000px"
            eventContent={renderEventContent}
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
        </Calendar>
        <Additional>
          <div>
            <Export>Export</Export>
          </div>

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
