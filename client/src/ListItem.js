import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ListItem({ setListItemArr, itemData, listItemArr }){
  

    function handleItemCardClick(){
        console.log('you clicked the card')
    }

    function handleDeleteItem(id){
      fetch(`/items/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((data) => setListItemArr(listItemArr.filter(p => p.id !== id)));
    }

    function handleItemButtonClick(){
        console.log('youclicked the item card button')
    }
        return (
            <Card onClick={handleItemCardClick} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="test image"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Item name
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={handleItemButtonClick} size="small">...</Button>
               
              </CardActions>
            </Card>
          );
        }