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

export default function Project({ tags }) {
  const navigate = useNavigate();
  const [title, SetTitle] = useState(null);
  const [description, SetDescription] = useState(null);
  const [SDescription, SetSDescription] = useState(null);

  function onChangeTitle(value) {
    SetTitle(value);
  }
  function onChangeDescription(value) {
    SetDescription(value);
  }
  function onChangeSDescription(value) {
    SetSDescription(value);
  }

  async function OnClick() {
    await axios
      .post('http://localhost:4000/projects/create', {
        title: title,
        description: description,
        short_description: SDescription,
      })
      .then((res) => navigate('/'));
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="title"
            name="title"
            label="title"
            onChange={onChangeTitle()}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="short_description"
            name="short_description"
            label="short_description"
            onChange={onChangeSDescription()}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="description"
            name="description"
            label="description"
            onChange={onChangeDescription()}
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="tags"
            name="tags"
            label="tags"
            options={tags}
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
      <Button onClick={OnClick()}>Создать проект</Button>
    </>
  );
}
