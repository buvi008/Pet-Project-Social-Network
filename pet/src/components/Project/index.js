/* eslint-disable */
import * as React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Button,
  Box,
  Container,
  TextField,
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCreate } from "../../redux/actionCreators/createProject";

export default function CreateForm({ tags }) {
  const navigate = useNavigate();
  // const [title, SetTitle] = useState(null);
  // const [description, SetDescription] = useState(null);
  // const [SDescription, SetSDescription] = useState(null);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    const input = new FormData(event.currentTarget);
    const body = {
      title: input.get("title"),
      description: input.get("description"),
      short_description: input.get("SDescription"),
    };

    const data = await dispatch(fetchCreate(body));
    navigate("/personal");
  };

  return (
    <Container maxWidth={"lg"} sx={{ py: 6 }}>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="title"
              name="title"
              label="Название проекта"
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
              label="Краткое описание"
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
              label="Подробное описание"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
            />
          </Grid>
        </Grid>
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
  );
}
