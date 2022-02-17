import React, { useState, useEffect } from 'react';
/* eslint-disable object-shorthand */
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button } from '@mui/material';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEdit } from '../redux/actionCreators/editProject';

function Project() {
  const origin = useLocation().state;
  const navigate = useNavigate();
  const user = useSelector((state) => state.checkSessionReducer.user);
  const dispatch = useDispatch();
  const [projects, setProjects] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/project/${origin}`)
      .then((res) => setProjects(res.data));
  }, [origin]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log(user);
    const input = new FormData(event.currentTarget);
    const body = {
      title: input.get('title'),
      description: input.get('description'),
      short_description: input.get('SDescription'),
      creator_id: user.id,
    };

    const data = await dispatch(fetchEdit({ body, origin }));

    if (data.payload) {
      dispatch(fetchEdit({ body, origin }));
      navigate('/personal');
    }
  };
  setTimeout(() => (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Typography container spacing={3}>
        <Typography item xs={12} sm={6}>
          <Typography
            required
            id="title"
            name="title"
            label="title"
            value={`${projects.title}`}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Typography>
        <Typography item xs={12} sm={6}>
          <Typography
            required
            id="short_description"
            name="short_description"
            label="short_description"
              // value={`${projects.short_description}`}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Typography>
        <Typography item xs={12}>
          <Typography
            required
            id="description"
            name="description"
            label="description"
              // value={`${projects.description}`}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Typography>
      </Typography>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Изменить
      </Button>
    </Box>
  ), 100);
  // console.log('jnhfhsjdjnsjdvks', projects.id);
}

export default Project;
