import { useState } from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function SignupForm({signupAnchorEl, handleSignupClose}){
    const open = Boolean(signupAnchorEl);
    const id = open ? 'simple-popover' : undefined;
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    })
  
    function handleSignupSubmit(e){
        e.preventDefault();
        console.log(e.target.value)
    }

    function handleSignupChange(e){
        setSignupData({...signupData, [e.target.name]:e.target.value})
        console.log(e.target.value)
    }

    return (
        <div>
     <Popover
        id={id}
        open={open}
        anchorEl={signupAnchorEl}
        onClose={handleSignupClose}
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
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <form onSubmit={handleSignupSubmit}>
        <TextField
          onChange={handleSignupChange}
          error
          type="text" 
          name="username"
          value={signupData.username}
          id="outlined-error-helper-text"
          label="Username"
          defaultValue=""
          helperText="Invalid Username. Must be at least 4 characters long, and only use letters and numbers"
        />
        <TextField
          onChange={handleSignupChange}
          error
          type="text" 
          name="email"
          value={signupData.email}
          id="outlined-error-helper-text"
          label="Email"
          defaultValue=""
          helperText="Invalid Email. Email does not exist"
        />
         <TextField
          onChange={handleSignupChange}
          error
          type="text" 
          name="password"
          value={signupData.password}
          id="outlined-error-helper-text"
          label="Password"
          defaultValue=""
          helperText="Invalid Password. Password was incorrect"
        />
        <TextField
          onChange={handleSignupChange}
          error
          type="text" 
          name="passwordConfirm"
          value={signupData.passwordConfirm}
          id="outlined-error-helper-text"
          label="Confirm Password"
          defaultValue=""
          helperText="Passwords do not match"
        />
        </form>
        </Box>
      </Popover>
        </div>
    )
}