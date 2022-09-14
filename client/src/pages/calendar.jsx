import Calendar from "../components/content/Calendar";
import DashboardLayout from "../layouts/DashboardLayout";

const CalendarPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-black text-3xl font-bold">Calendar</h1>
      <div className="my-8">
        <Calendar />
      </div>
    </DashboardLayout>
  );
};

export default CalendarPage;
