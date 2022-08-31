import "./App.css";
import Navigation from "./components/Navigation";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="flex">
      <Navigation />
      <div className="w-5/6">
        <ProfilePage />
      </div>
    </div>
  );
}

export default App;
