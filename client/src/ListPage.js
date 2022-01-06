import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import NewItemForm from './NewItemForm';
import MenuHeader from './MenuHeader'

export default function ListPage(){
    const [newItemAnchorEl, setNewItemAnchorEl] = useState(null);
    const [listCards, setListCards] = useState([])

    const handleNewItemClose = () => {
        setNewItemAnchorEl(null);
      };

      function handleNewItemFormClick(event){
        setNewItemAnchorEl(event.currentTarget)
        console.log('hey im the new item button')
      }

    /*const listItemsArr = data.map(itemData => <ListItem newItemAnchorEl={newItemAnchorEl} handleNewItemClose={handleNewItemClose} our props here />*/ 
    return(
        <div>
            <MenuHeader/>
            <h1>Hats</h1>
            {/*{listItemsArr}*/} 
            <Button onClick={handleNewItemFormClick}> Add New Item </Button>
            <NewItemForm newItemAnchorEl={newItemAnchorEl} handleNewItemClose={handleNewItemClose}  />
        </div>
    )
}