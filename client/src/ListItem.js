import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import UpdateItemForm from './UpdateItemForm'

export default function ListItem({name, price, siteUrl, picture, id, listItemsArr, setListItemArr}){


  const [updateItemAnchorEl, setUpdateItemAnchorEl] = useState(null);
  const [newListData, setNewListData] = useState([])
  // const [itemId, setItemId] = useState('')
  

    function handleItemCardClick(siteUrl){
        console.log(siteUrl)
        console.log('you clicked the card')
    }

    function handleDeleteItem(id){

      fetch(`items/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setListItemArr(listItemsArr.filter(p => p.id !== id))
      })
    }
  
    const handleUpdateItemClose = () => {
      setUpdateItemAnchorEl(null);
    };

    function handleUpdateItemFormClick(event){
      setUpdateItemAnchorEl(event.currentTarget)
      // setItemId(prevState => {
      //   return {id}
      // }
      // )
    }
    

    function handleItemButtonClick(){
        console.log('you clicked the item card button')
    }

        return (

          <Grid item xs={12} sm={6} md={1.5}>
            <Card onClick={()=>handleItemCardClick(siteUrl)} sx={{ maxWidth: 345, minHeight: 350, maxHeight: 350}}>
              <CardMedia
                component="img"
                src= {picture}
                alt="item image"
                height="200"
                // image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h8" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {null ? '' : price}
                </Typography>
                <Button onClick={() => handleDeleteItem(id)} size="small">Delete</Button>
                 <UpdateItemForm name= {name} price= {price} siteUrl= {siteUrl} picture= {picture} itemId={id} updateItemAnchorEl={updateItemAnchorEl} handleUpdateItemClose={handleUpdateItemClose} listItemsArr= {listItemsArr} setListItemArr= {setListItemArr}/>
              </CardContent>
              <CardActions>
                <Button onClick={handleItemButtonClick} size="small">...</Button>
              </CardActions>
            </Card>
            </Grid>
          );
        }