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
import DashboardLayout from "./layouts/DashboardLayout";
import TeamLayout from "./layouts/TeamLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<DashboardLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="teams">
          <Route path="" element={<Teams />} />
          <Route path=":teamId" element={<TeamLayout />}>
            <Route index path="projects" element={<ProjectDashboard />} />
            <Route path="people" element={<People admin={true} />} />
            <Route path="meeting" element={<Meeting />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
