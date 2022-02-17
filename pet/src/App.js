/* eslint-disable */
/* eslint-disable import/prefer-default-export */

import './App.css';
import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Album from './components/mainPage/main';
import Auth from './components/signUp.js/signUp';
import Login from './components/login.js/signIn';
import Personal from './components/cabinet/Dashboard';
import Project from './components/FormCreate';
import FormCreate from './components/Project';
import EditProjects from './components/EditProjects';
import Header from './components/Header';

axios.defaults.withCredentials = true;

function App() {
  const [tags, setTags] = useState(null);
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    (async function () {
      await axios
        .get('http://localhost:4000/projects/tags')
        .then((res) => setTags(res.data));
    })();
  }, []);

  useEffect(() => {
    (async function () {
      await axios
        .get('http://localhost:4000/projects/find')
        .then((res) => setProjects(res.data));
    })();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Album projects={projects} />} />
        <Route path='login' element={<Login />} />
        <Route path='auth' element={<Auth />} />
        {/* <Route path="logout" element={<Logout />} /> */}
        <Route path="personal" element={<Personal />} />
        <Route path="projects/create" element={<FormCreate tags={tags} />} />
        <Route path="projects/:title" element={<Project />} />
        <Route path="projects/:title/edit" element={<EditProjects />} />
      </Routes>
    </div>
  );
}

export default App;
