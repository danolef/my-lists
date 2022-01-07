import { useContext, useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import NewItemForm from './NewItemForm';
import MenuHeader from './MenuHeader'
import ListItem from './ListItem'
import Grid from '@mui/material/Grid';
import {ListIdContext} from './context/listIdState'
import {ListNameContext} from './context/listNameState'


export default function ListPage(){
    const [newItemAnchorEl, setNewItemAnchorEl] = useState(null);
    const [listItemsArr, setListItemArr] = useState([]);
    const [filteredItemsArr, setFilteredItemsArr] = useState([]);
    const {listId, setListId} = useContext(ListIdContext)
    const {listName, setListName} = useContext(ListNameContext)


    useEffect(() => {
      fetch("/items")
      .then ((res) => res.json())
      .then((items) => {
        console.log('hello')
        setListItemArr(items)
        setFilteredItemsArr(items)
      })
    }, [])

    
    const handleNewItemClose = () => {
        setNewItemAnchorEl(null);
      };

      function handleNewItemFormClick(event){
        setNewItemAnchorEl(event.currentTarget)
        console.log('hey im the new item button')
      }

    let filteredItems
    if (filteredItemsArr.length > 0) { filteredItems = filteredItemsArr.filter(item =>  { 
     return item.lists[0].id === listId}) }
    let listItemsCard = filteredItems?.map(itemData => <ListItem key={itemData.id} listItemsArr={listItemsArr} setListItemArr={setListItemArr} name={itemData.name} siteUrl= {itemData.site_url} picture={itemData.image_url} price={itemData.price} id={itemData.id} newItemAnchorEl={newItemAnchorEl} handleNewItemClose={handleNewItemClose} /> )

    return(
        <div>
            <MenuHeader  />
            <h1>{listName}</h1>
            <Grid sx={{ flexGrow: 1, paddingLeft: 20 }} container spacing={2}>
            {listItemsCard}  
            </Grid>
            <Button onClick={handleNewItemFormClick} style={{color: '#7C8988', padding: 10}}> Add New Item </Button>
            <NewItemForm filteredItemsArr={filteredItemsArr} listId={listId} newItemAnchorEl={newItemAnchorEl} handleNewItemClose={handleNewItemClose}  />
        </div>
    )
}