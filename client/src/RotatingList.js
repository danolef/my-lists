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

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RotatingList() {
  return (

    <Grid item xs={12} sm={1} md={1.5}>
    <Card sx={{ maxWidth:240}}>
     
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2021/12/19/10/42/old-6880626__340.jpg"
        alt="green iguana"
      />
      
      <Item>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2021/12/19/10/42/old-6880626__340.jpg"
        alt="green iguana"
      />
      </Item>
      <Item>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2021/12/19/10/42/old-6880626__340.jpg"
        alt="green iguana"
      />
      </Item>
      <Item>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2021/12/19/10/42/old-6880626__340.jpg"
        alt="green iguana"
      />
      </Item>
      <Item>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2021/12/19/10/42/old-6880626__340.jpg"
        alt="green iguana"
      />
      </Item>
      <Item>
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2021/12/19/10/42/old-6880626__340.jpg"
        alt="green iguana"
      />
      </Item>
     
      </Card>
      </Grid>
    
  );
}