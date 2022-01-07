import { useState } from 'react'
import Popover from '@mui/material/Popover';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function LoginForm({loginAnchorEl, handleLoginClose, setUser}){
    const open = Boolean(loginAnchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })
    
  
    function handleLoginSubmit(e){
        e.preventDefault();
        console.log(e)
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData)
        })
        .then((res) => {
          if (res.ok) {
            res.json()
            .then((user) => {
              setUser(user)
            })
          } else {
            res.json()
            .then ((errors) => {
              console.error(errors)
            })
          }
        })
        // console.log(e.target.value)
    }

    function handleLoginChange(e){
        setLoginData({...loginData, [e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    return (
        <div>
     <Popover
        id={id}
        open={open}
        anchorEl={loginAnchorEl}
        onClose={handleLoginClose}
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
      onSubmit={handleLoginSubmit}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField
          onChange={handleLoginChange}
          noerror
          type="text" 
          name="username"
          value={loginData.username}
          id="outlined-error-helper-text"
          label="Username"
          // defaultValue=""
          // helperText="Invalid Username. Must be at least 4 characters long, and only use letters and numbers"
        />
        <TextField
          onChange={handleLoginChange}
          noerror
          type="password" 
          name="password"
          value={loginData.password}
          id="outlined-error-helper-text"
          label="Password"
          // defaultValue=""
          // helperText="Invalid Password. Password was incorrect"
        />
         <Button
        type="submit"
        sx={{color:'#7C8988'}}
        > Login </Button>
        </Box>
      </Popover>
        </div>
    )
}