/* eslint-disable */
import React, { useState, useEffect } from "react";
/* eslint-disable object-shorthand */
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchEdit } from "../../redux/actionCreators/editProject";

function EditProject() {
  const origin = useLocation().state;
  const { id } = useParams();
  const dispatch = useDispatch();
  const [project, setProjects] = useState({});

  useEffect(() => {
    (async function () {
      await axios
        .get(`http://localhost:4000/project/${id}`)
        .then((res) => setProjects(res.data));
    })();
  }, [project]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    const input = new FormData(event.currentTarget);
    const body = {
      title: input.get("title"),
      description: input.get("description"),
      short_description: input.get("SDescription"),
    };

    const data = await dispatch(fetchEdit({ body, origin: id }));

    if (data.payload) {
      dispatch(fetchEdit({ body, origin }));
      navigate("/personal");
    }
  };

  return (
    <>
      <Container maxWidth={"lg"} sx={{ py: 6 }}>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {project.id && (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="title"
                  label="Название проекта"
                  fullWidth
                  defaultValue={project.title ?? ""}
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="short_description"
                  label="Краткое описание"
                  fullWidth
                  defaultValue={project.short_description ?? ""}
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  name="description"
                  label="Подробное описание"
                  fullWidth
                  defaultValue={project.description}
                  autoComplete="shipping address-line1"
                  variant="standard"
                />
              </Grid>
            </Grid>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Создать
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default EditProject;
