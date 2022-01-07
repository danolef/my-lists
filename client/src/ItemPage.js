import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {SiteContext} from './context/siteState'


export default function ItemPage(){
    const {site, setSite} = useContext(SiteContext)
    const navigate = useNavigate();

    function handleSiteRedirect(){
        window.open(site);
    }

    function handleBackBttn(){
        navigate('/');
    }
    return(
        <div>
            <br/>
            <iframe title='currentsite' src={site} height='800px' width='1500px'></iframe>
            <br/>
            <Stack spacing={165} direction="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '5px'}}>
            <Button onClick={handleBackBttn} variant='contained'>Back</Button>
            <Button onClick={handleSiteRedirect} variant='contained'>Buy or view on Site</Button>
            </Stack>
        </div>
    )
}