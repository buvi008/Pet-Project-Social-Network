/* eslint-disable */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Blog from "./Blog";
import Grid from "@mui/material/Grid";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  console.log(project);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/project/${id}`)
      .then((res) => setProject(res.data));
  }, [origin]);

  return (
    <Grid container sx={{ py: 3 }}>
      <Blog project={project} />
    </Grid>
  );
}

export default Project;
