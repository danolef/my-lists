import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid';
import { Carousel } from "react-bootstrap";



export default function RotatingList({ name, imageUrl }) {

  return (
    <>
    <Grid item xs={12} sm={8} md={4}>
<Card sx={{ maxWidth: 285, minHeight: 385, maxHeight: 300}}>
 
  <CardMedia
    component="img"
    height="350"
    image={imageUrl}
    alt={name}
  />

  </Card>
  </Grid>
    </>

  )
}