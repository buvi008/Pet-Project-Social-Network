/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/prefer-default-export */

import './App.css';
import React from 'react';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Album from './components/mainPage/main';
import Auth from './components/login.js/signIn';
import Login from './components/signUp.js/signUp';
import Logout from './components/Auth/Logout';
import Personal from './components/cabinet/Dashboard';
import FormCreate from './components/FormCreate';
import Project from './components/Project';
import EditProjects from './components/EditProjects';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Album />} />
        <Route path="login" element={<Login />} />
        <Route path="auth" element={<Auth />} />
        <Route path="logout" element={<Logout />} />
        <Route path="personal" element={<Personal />} />
        <Route path="projects/create" element={<Project />} />
        <Route path="projects/:title" element={<FormCreate />} />
        <Route path="projects/:title/edit" element={<EditProjects />} />
      </Routes>
    </div>
  );
}

export default App;
