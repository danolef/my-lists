import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ItemPage(){
    return(
        <div>
            <br/>
            <iframe title='currentsite' src='https://www.adidas.com/us/nmd_r1-primeblue-shoes/GZ9260.html' height='800px' width='1500px'></iframe>
            <br/>
            <Stack spacing={165} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px'}}>
            <Button variant='contained'>Back</Button>
            <Button variant='contained'>Buy on Site</Button>
            </Stack>
        </div>
    )
}