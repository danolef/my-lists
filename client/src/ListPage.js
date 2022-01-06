import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import NewItemForm from './NewItemForm';
import MenuHeader from './MenuHeader'
import ListItem from './ListItem'


export default function ListPage(){
    const [newItemAnchorEl, setNewItemAnchorEl] = useState(null);
    const [listItemsArr, setListItemArr] = useState([]);
    
    useEffect( () => {
      fetch("/items")
      .then ((res) => res.json())
      .then((items) => setListItemArr(items))
    }, [])

    const handleNewItemClose = () => {
        setNewItemAnchorEl(null);
      };

      function handleNewItemFormClick(event){
        setNewItemAnchorEl(event.currentTarget)
        console.log('hey im the new item button')
      }


    const listItemsCard = listItemsArr.map(itemData => <ListItem key ={itemData.id} listItemsArr= {listItemsArr} setListItemArr= {setListItemArr} name= {itemData.name} siteUrl= {itemData.site_url} picture= {itemData.image_url} price= {itemData.price} id={itemData.id} newItemAnchorEl={newItemAnchorEl} handleNewItemClose={handleNewItemClose} />)
  
    return(
        <div>
            <MenuHeader/>
            <h1>List Name</h1>
            {listItemsCard}
            <Button onClick={handleNewItemFormClick}> Add New Item </Button>
            <NewItemForm newItemAnchorEl={newItemAnchorEl} handleNewItemClose={handleNewItemClose} />
        </div>
    )
}