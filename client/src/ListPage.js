import { useContext, useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import NewItemForm from './NewItemForm';
import MenuHeader from './MenuHeader'
import ListItem from './ListItem'
import Grid from '@mui/material/Grid';
import {ListIdContext} from './context/listIdState'

export default function ListPage(){
    const [newItemAnchorEl, setNewItemAnchorEl] = useState(null);
    const [listItemsArr, setListItemArr] = useState([]);
    const [filteredItemsArr, setFilteredItemsArr] = useState([]);
    const {listId, setListId} = useContext(ListIdContext)

    useEffect( () => {
      fetch("/items")
      .then ((res) => res.json())
      .then((items) => {
        setListItemArr(items)
        setFilteredItemsArr(items)
        console.log(listId)
      })
    }, [])

    const handleNewItemClose = () => {
        setNewItemAnchorEl(null);
      };

      function handleNewItemFormClick(event){
        setNewItemAnchorEl(event.currentTarget)
        console.log('hey im the new item button')
      }


    // const listItemsCard = listItemsArr.map(itemData => <ListItem itemData= {itemData} listItemsArr={listItemsArr} setListItemArr={setListItemArr} newItemAnchorEl={newItemAnchorEl} 
    //   handleNewItemClose={handleNewItemClose} />)
    const filteredItems = filteredItemsArr.filter(item => item.lists[0].id === listId)
    const listItemsCard = filteredItems.map(itemData =>   <ListItem key ={itemData.id} listItemsArr= {listItemsArr} setListItemArr= {setListItemArr} name= {itemData.name} siteUrl= {itemData.site_url} picture= {itemData.image_url} price= {itemData.price} id={itemData.id} newItemAnchorEl={newItemAnchorEl} handleNewItemClose={handleNewItemClose} /> )
    
    
    return(
        <div>
            <MenuHeader/>
            <h1>List Name</h1>
            <Grid sx={{ flexGrow: 1, paddingLeft: 20 }} container spacing={2}>
            {listItemsCard}  
            </Grid>
            <Button onClick={handleNewItemFormClick} style={{padding: 10}}> Add New Item </Button>
            <NewItemForm newItemAnchorEl={newItemAnchorEl} handleNewItemClose={handleNewItemClose}  />
        </div>
    )
}