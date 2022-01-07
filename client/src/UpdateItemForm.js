import { useState } from 'react'
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



export default function UpdateItemForm({name, price, siteUrl, picture, itemId, updateItemAnchorEl, handleUpdateItemClose, listItemsArr, setListItemArr}){
    const open = Boolean(updateItemAnchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [updateItemData, setUpdateItemData] = useState({
        name: name,
        image_url: picture,
        site_url: siteUrl,
        price: price
    })
    console.log(updateItemData)
    console.log("itemId:",itemId)
    
    
    function handleUpdateItemSubmit(e){
        e.preventDefault();
        console.log(itemId)
        
        
      fetch(`/items/${itemId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateItemData)
      })
      .then(res => res.json())
      .then(updateItem => {
        setListItemArr(listItemsArr.map(item => {
              if(item.id === updateItem.id){
                  return updateItem
              } else {
                  return item
              }
          }))
      })
  }

    function handleUpdateItemChange(e){
        setUpdateItemData({...updateItemData, [e.target.name]:e.target.value})
    }

    return (
        <div>
     <Popover
        id={id}
        open={open}
        anchorEl={updateItemAnchorEl}
        onClose={handleUpdateItemClose}
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
      onSubmit={handleUpdateItemSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          onChange={handleUpdateItemChange}
          error
          type="text" 
          name="name"
          value={updateItemData.name}
          id="outlined-error-helper-text"
          label="name"
          // defaultValue=""
          helperText="You must enter an item name"
        />
        <TextField
          onChange={handleUpdateItemChange}
          error
          type="text" 
          name="image_url"
          value={updateItemData.image_url}
          id="outlined-error-helper-text"
          label="Image URL"
          // defaultValue=""
          helperText="You must enter the items URL"
        />

        <TextField
          onChange={handleUpdateItemChange}
          error
          type="text" 
          name="site_url"
          value={updateItemData.site_url}
          id="outlined-error-helper-text"
          label="Site URL"
          // defaultValue=""
          helperText="You must enter the items URL"
        />
        <TextField
          onChange={handleUpdateItemChange}
          type="text" 
          name="price"
          value={updateItemData.price}
          id="outlined-error-helper-text"
          label="Price"
          // defaultValue=""
          helperText="Optional"
        />
         <Button
        type="submit"
        variant='outlined'
        > Update Item </Button>
        </Box>
      </Popover>
        </div>
    )
}