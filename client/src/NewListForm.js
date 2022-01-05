import {useState} from 'react'
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function newListFrom {

    const [newListData, setNewListData] = useState ({
        newList: ''
    })

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
     };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    function handleNewListSubmit(e){
        e.preventDefault();
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
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <form onSubmit={handleNewListSubmit}>
            <TextField
            onChange={handleNewListChange}
            required
            type="text"
            name="newList"
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
            />
            <Button 
            Type="submit"
            variant="outlined">
                Add List
            </Button> 
        </form>
        </Box>
      </Popover>
    </div>
    )
}