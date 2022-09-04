import "./App.css";
import Navigation from "./components/Navigation";
import CalendarPage from "./pages/CalendarPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-5/6">
        <CalendarPage />
      </div>
    </div>
  );
}

export default App;
