import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ListItem({name, price, site_url, picture, listItemsArr, setListItemArr}){

  const [newListData, setNewListData] = useState([])


    function handleItemCardClick(){
        console.log('you clicked the card')
    }

    function handleDeleteItem(id){

      fetch(`items/${id}`, {
      method: "DELETE",
    })
      // .then((r) => r.json())
      .then(() => {
        setListItemArr(listItemsArr.filter(p => p.id !== id))
      })

    }
  
    function handleItemButtonClick(){
        console.log('youclicked the item card button')
    }
        return (
            <Card onClick={handleItemCardClick} sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                src= {`${picture}`}
                alt="test image"
                height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {`${name}`}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`${price}`}
                </Typography>
                <Button onClick={() => handleDeleteItem(itemData.id)} size="small">Delete</Button>
              </CardContent>
              <CardActions>
                <Button onClick={handleItemButtonClick} size="small">...</Button>
               
              </CardActions>
            </Card>
          );
        }