import { useState, useContext } from 'react'
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import {ListIdContext} from './context/listIdState'


export default function NewItemForm({filteredItemsArr, listId, newItemAnchorEl, handleNewItemClose}){
    const open = Boolean(newItemAnchorEl);
    const id = open ? 'simple-popover' : undefined;
    // const {listId, setListId} = useContext(ListIdContext)

    const [newItemData, setNewItemData] = useState({
        name: '',
        image_url: '',
        site_url: '',
        price: '',
    })

    function handleNewItemSubmit(e){
        e.preventDefault();
        console.log(e.target.value)
      fetch("/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({...newItemData, list_id: listId})
      })
      .then((r) => r.json())
      .then((newItem) => setNewItemData([...filteredItemsArr, newItem]));
  }

    function handleNewItemChange(e){
        setNewItemData({...newItemData, [e.target.name]:e.target.value})
        console.log(e.target.value)
        console.log(listId)
    }

    return (
        <div>
     <Popover
        id={id}
        open={open}
        anchorEl={newItemAnchorEl}
        onClose={handleNewItemClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
      >
 <Box
      onSubmit={handleNewItemSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          onChange={handleNewItemChange}
          noerror
          type="text" 
          name="name"
          value={newItemData.name}
          id="outlined-error-helper-text"
          label="name"
          // defaultValue=""
          // helperText="You must enter an item name"
        />
        <TextField
          onChange={handleNewItemChange}
          noerror
          type="text" 
          name="image_url"
          value={newItemData.image_url}
          id="outlined-error-helper-text"
          label="Image URL"
          // defaultValue=""
          // helperText="You must enter the items URL"
        />

        <TextField
          onChange={handleNewItemChange}
          noerror
          type="text" 
          name="site_url"
          value={newItemData.site_url}
          id="outlined-error-helper-text"
          label="Site URL"
          // defaultValue=""
          // helperText="You must enter the items URL"
        />
        <TextField
          onChange={handleNewItemChange}
          type="text" 
          name="price"
          value={newItemData.price}
          id="outlined-error-helper-text"
          label="Price"
          // defaultValue=""
          helperText="Optional"
        />
         <Button sx={{color:'#7C8988'}}
        type="submit"
        variant='outlined'
        > Add Item </Button>

        </Box>
      </Popover>
        </div>
    )
}