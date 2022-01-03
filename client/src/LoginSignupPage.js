import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function LoginSignupPage({handleLoginClick, handleSignupClick}) {
   
    return(
        <div>
        <Stack spacing={1} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Button onClick={handleLoginClick} style={{backgroundColor: '#000000'}} variant='contained'>Login</Button>
        <Button onClick={handleSignupClick} style={{backgroundColor: '#000000'}} variant='contained'>Signup</Button>
        </Stack>
        </div>
    )
}