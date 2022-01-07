import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import UpdateItemForm from './UpdateItemForm'

export default function ListItem({name, price, siteUrl, picture, id, listItemsArr, setListItemArr}){

  const [updateItemAnchorEl, setUpdateItemAnchorEl] = useState(null);
  const [newListData, setNewListData] = useState([])
  // const [itemId, setItemId] = useState('')
  

    // function handleItemCardClick(){
    //     console.log('you clicked the card')
    // }

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
        console.log('youclicked the item card button')
    }
        return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                src= {picture}
                alt="test image"
                height="140"
                // image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {price}
                </Typography>
                <Button onClick={() => handleDeleteItem(id)} size="small">Delete</Button>
                <Button onClick={handleUpdateItemFormClick} > Update Item </Button>
                <UpdateItemForm name= {name} price= {price} siteUrl= {siteUrl} picture= {picture} itemId={id} updateItemAnchorEl={updateItemAnchorEl} handleUpdateItemClose={handleUpdateItemClose} listItemsArr= {listItemsArr} setListItemArr= {setListItemArr}/>
              </CardContent>
              <CardActions>
                <Button onClick={handleItemButtonClick} size="small">...</Button>
               
              </CardActions>
            </Card>
          );
        }