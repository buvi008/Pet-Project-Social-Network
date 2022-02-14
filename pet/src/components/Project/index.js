import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios'

export default function Project() {
 // запрос на ручку для получения тегов
  useEffect(() => {
    (async function onChange () {
      await axios.get('http://localhost:5000/profile')
        .then((res) => setStatistic(res.data));
    })()
  }, [])

 // отправка жанных на сервер
 const data = async (arg) => {
  console.log('clients tries to logout');
  await fetch('http://localhost:5000/project/create', {
      method: 'post',
      credentials: 'include',        
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' , },
      body: arg,
  })

}

      


  return (
    <React.Fragment>
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
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
          // onChange={OnChange(value?)}
            id="tags"
            name="tags"
            label="tags"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
      
        <Grid item xs={12}>
          <FormControlLabel
         // data={data(value?)} // отправка на сервер
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default Project;
