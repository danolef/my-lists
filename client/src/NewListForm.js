import {useContext, useState} from 'react'
import {ListContext} from './context/listState'
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function NewListFrom() {

   const {listArr, setListArr} = useContext(ListContext)

    const [newListData, setNewListData] = useState ({
        name: ''
    })
    
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
     };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleNewListSubmit(e){
        e.preventDefault();
        fetch("/lists", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newListData)
          })
          .then((r) => r.json())
          .then((newList) => setListArr([...listArr, newList]));
      }
    
    function handleNewListChange(e){
        setNewListData({...newListData, [e.target.name]:e.target.value})
    }

    return(
        <div>
        <Button sx={{color:'#7C8988'}} aria-describedby={id} onClick={handleClick}>
            New List
        </Button>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box
            onSubmit={handleNewListSubmit}
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
            onChange={handleNewListChange}
            required
            type="text"
            name="name"
            id="outlined-required"
            label="Required"
            // defaultValue="Hello World"
            />
            <Button sx={{color:'#7C8988'}}
            type="submit"
            >
                Add List
            </Button> 
        </Box>
      </Popover>
    </div>
    )
}
