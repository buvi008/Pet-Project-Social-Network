/* eslint-disable */
import * as React from "react";
import { ResponsiveContainer } from "recharts";
import Grid from "@mui/material/Grid";
import Title from "./Title";
import Card from "./Card";

export default function Chart({ list }) {
  return (
    <>
      <Title>Today</Title>
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
