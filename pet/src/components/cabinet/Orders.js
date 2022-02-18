/* eslint-disable */
import * as React from "react";
import Title from "./Title";
import Card from "./Card";
import { Grid } from "@mui/material";

export default function Orders({ list }) {
  return (
    <>
      <Title>Список проектов</Title>
      <Grid container spacing={3}>
        {list?.map((el) => (
          <Grid xs={12} xl={3} lg={3} md={3} sm={4} item key={el.id}>
            <Card project={el} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
