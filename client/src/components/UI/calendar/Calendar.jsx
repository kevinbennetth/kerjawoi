import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import "./Calendar.css";

const Calendar = () => {
  function onDateClick() {
    alert("hehe");
  }
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      headerToolbar={{
        left: "title",
        center: "",
        right: "today prev next",
      }}
      events={[
        {
          id: "a",
          title: "my event",
          start: "2022-08-01",
        },
      ]}
      eventColor={"#8985f233"}
      eventTextColor={"black"}
      dateClick={onDateClick}
      initialView="dayGridMonth"
      themeSystem=""
    />
  );
};

export default Calendar;
