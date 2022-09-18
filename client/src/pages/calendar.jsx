import Calendar from "../components/content/Calendar";
import DashboardLayout from "../layouts/DashboardLayout";

const CalendarPage = () => {
  return (
    <>
      <h1 className="text-black text-3xl font-bold">Calendar</h1>
      <div className="my-8">
        <Calendar />
      </div>
    </>
  );
};

export default CalendarPage;
