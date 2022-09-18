import "./assets/css/index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import CalendarPage from "./pages/calendar";
import Teams from "./pages/teams";
import People from "./pages/teams/people";
import ProjectDashboard from "./pages/teams/projects";
import Profile from "./pages/profile";
import Settings from "./pages/teams/settings";
import Meeting from "./pages/teams/meeting";
import Login from "./pages/login";
import Register from "./pages/register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="calendar" element={<CalendarPage />} />
      <Route path="profile" element={<Profile />} />
      <Route path="teams" element={<Teams />} />
      <Route path="teams/:teamId/projects" element={<ProjectDashboard />} />
      <Route path="teams/:teamId/people" element={<People admin={true} />} />
      <Route path="teams/:teamId/meeting" element={<Meeting />} />
      <Route path="teams/:teamId/settings" element={<Settings />} />
      <Route path="teams/:teamId" element={<ProjectDashboard />} />
    </Routes>
  </BrowserRouter>
);
