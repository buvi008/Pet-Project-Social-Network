import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Album from "./components/mainPage/main";
import Auth from "./components/login.js/signIn";
import Login from "./components/Auth/Signup";
import Logout from "./components/Auth/Logout";
import Personal from "./components/Personal";
import FormCreate from "./components/FormCreate";
import Project from "./components/Project";
import EditProjects from "./components/EditProjects";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Album />} />
          <Route path="login" element={<Login />} />
          <Route path="auth" element={<Auth />} />
          <Route path="logout" element={<Logout />} />
          <Route
            path="personal"
            element={
              <Login>
                <Personal />
              </Login>
            }
          />
          <Route
            path="projects/create"
            element={
              <Login>
                <FormCreate />
              </Login>
            }
          />
          <Route
            path="projects/:title"
            element={
              <Login>
                <Project />
              </Login>
            }
          />
          <Route
            path="projects/:title/edit"
            element={
              <Login>
                <EditProjects />
              </Login>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
