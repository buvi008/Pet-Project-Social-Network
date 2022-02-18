/* eslint-disable */
/* eslint-disable import/prefer-default-export */

import "./App.css";
import React, { useState, useEffect } from "react";
// import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import Album from "./components/mainPage/main";
import Auth from "./components/signUp.js/signUp";
import Login from "./components/login.js/signIn";
import Personal from "./components/cabinet/Dashboard";
import Project from "./components/FormCreate";
import FormCreate from "./components/Project";
import EditProjects from "./components/EditProjects";
import Header from "./components/Header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer";
import { fetchCheckSession } from "./redux/actionCreators/isAuthorizedAC";
import { useDispatch, useSelector } from "react-redux";

axios.defaults.withCredentials = true;

function App() {
  const [tags, setTags] = useState(null);
  const dispatch = useDispatch();

  let auth = useSelector((state) => state.checkSessionReducer.isAuthorized);

  useEffect(() => {
    fetchCheckSession()(dispatch);
    (async function () {
      await axios
        .get("http://localhost:4000/project/tags")
        .then((res) => setTags(res.data));
    })();
  }, []);

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Album />} />
        <Route
          exact
          path="/login"
          element={!auth ? <Login /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/auth"
          element={!auth ? <Auth /> : <Navigate to="/" />}
        />
        {/* <Route path="logout" element={<Logout />} /> */}
        <Route exact path="/personal" element={<Personal />} />
        <Route
          exact
          path="/projects/create"
          element={<FormCreate tags={tags} />}
        />
        <Route exact path="/projects/:id" element={<Project />} />
        <Route exact path="/projects/:id/edit" element={<EditProjects />} />
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404</h1>}
        />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
