import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

export default function LoginSignupPage({handleLoginClick, handleSignupClick, setLoginAnchorEl, setSignupAnchorEl, loginAnchorEl, setUser, signupAnchorEl}) {
    
    const handleLoginClose = () => {
        setLoginAnchorEl(null);
      };
      
      const handleSignupClose = () => {
        setSignupAnchorEl(null);
      };

    return(
        <div>
        <h1>My Lists</h1>
        <Stack spacing={1} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={handleLoginClick} style={{backgroundColor: '#000000'}} variant='contained'>Login</Button>
        <Button onClick={handleSignupClick} style={{backgroundColor: '#000000'}} variant='contained'>Signup</Button>
        </Stack>
        <LoginForm loginAnchorEl={loginAnchorEl} handleLoginClose={handleLoginClose} setUser={setUser}/>
        <SignupForm signupAnchorEl={signupAnchorEl} handleSignupClose={handleSignupClose} setUser= {setUser}/>
        </div>
    )
}