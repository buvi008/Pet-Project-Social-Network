/* eslint-disable */
import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import axios from "axios";

export default function Album() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async function () {
      await axios
        .get("http://localhost:4000/project/find")
        .then((res) => setCards(res.data));
    })();
  }, []);
  console.log(cards);
  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card, i) => (
            // eslint-disable-next-line space-infix-ops
            // eslint-disable-next-line react/no-array-index-key
            <Grid item key={i} xs={12} sm={6} md={4}>
              <CardActionArea component={Link} to={`/projects/${card.id}`}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      height: "150px",
                    }}
                    image={card.projectImg}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>{card.short_description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                  </CardActions>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
