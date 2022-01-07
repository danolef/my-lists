import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import stackLogo from './assets/stackLogo.png'

export default function LoginSignupPage({handleLoginClick, handleSignupClick, setLoginAnchorEl, setSignupAnchorEl, loginAnchorEl, setUser, signupAnchorEl}) {
    
    const handleLoginClose = () => {
        setLoginAnchorEl(null);
      };
      
      const handleSignupClose = () => {
        setSignupAnchorEl(null);
      };

    return(
        <div>
        <img src={stackLogo} alt="stack logo" style={{ width: '38%', padding: '40px' }} />
        <Stack spacing={1} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={handleLoginClick} style={{backgroundColor: '#000000'}} variant='contained'>Login</Button>
        <Button onClick={handleSignupClick} style={{backgroundColor: '#000000'}} variant='contained'>Signup</Button>
        </Stack>
        <LoginForm loginAnchorEl={loginAnchorEl} handleLoginClose={handleLoginClose} setUser={setUser}/>
        <SignupForm signupAnchorEl={signupAnchorEl} handleSignupClose={handleSignupClose} setUser= {setUser}/>
        </div>
    )
}