import {useState} from 'react'
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function NewListFrom() {

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
          .then((newList) => setNewListData(newList));
      }
    
    function handleNewListChange(e){
        setNewListData({...newListData, [e.target.name]:e.target.value})
    }

    return(
        <div>
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
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
            <Button 
            type="submit"
            variant="outlined">
                Add List
            </Button> 
        </Box>
      </Popover>
    </div>
    )
}
