import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import Dashboard from './pages/dashboard';
import Teams from './pages/teams';
import People from './pages/teams/people';
import ProjectDashboard from './pages/teams/projects';
import Settings from './pages/teams/settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='teams' element={<Teams/>}/>
            <Route path='teams/:teamId' element={<ProjectDashboard/>}/>
            <Route path='teams/:teamId/projects' element={<ProjectDashboard/>}/>
            <Route path='teams/:teamId/people' element={<People/>}/>
            <Route path='teams/:teamId/settings' element={<Settings/>}/>    
        </Routes>
    </BrowserRouter>
);
