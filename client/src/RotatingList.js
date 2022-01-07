import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
export default function RotatingList({ name, imageUrl }) {
  return (
    <>
    <Grid item xs={12} sm={8} md={1}>
<Card sx={{ maxWidth: 285, minHeight: 385, maxHeight: 300}}>
  <CardMedia
    component="img"
    height="400"
    image={imageUrl}
    alt={name}
  />
  </Card>
  </Grid>
    </>
  )
}