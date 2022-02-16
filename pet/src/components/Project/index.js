/* eslint-disable object-shorthand */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCreate } from '../redux/actionCreators/createProject';

export default function Project({ tags }) {
  const navigate = useNavigate();
  // const [title, SetTitle] = useState(null);
  // const [description, SetDescription] = useState(null);
  // const [SDescription, SetSDescription] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    const input = new FormData(event.currentTarget);
    const body = {
      title: input.get('title'),
      description: input.get('description'),
      short_description: input.get('SDescription'),
      creator_id: user.id,
    };

    const data = await dispatch(fetchCreate(body));

    if (data.payload) {
      dispatch(fetchCreate(body));
      navigate('/personal');
    }
  };

  return (
    <>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='title'
              name='title'
              label='title'
              fullWidth
              autoComplete='given-name'
              variant='standard'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id='short_description'
              name='short_description'
              label='short_description'
              fullWidth
              autoComplete='family-name'
              variant='standard'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id='description'
              name='description'
              label='description'
              fullWidth
              autoComplete='shipping address-line1'
              variant='standard'
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Создать
        </Button>
      </Box>
    </>
  );
}
