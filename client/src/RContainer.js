import { useState, useEffect } from 'react';
import RotatingList from './RotatingList';
import Grid from '@mui/material/Grid';
import { Carousel } from 'react-bootstrap';


export default function RContainer() {
    const [cItems, setCItems] = useState([])
    useEffect(() => {
       fetch("/items")
    .then(r => r.json())
    .then(setCItems)
    }, [])
    console.log(cItems)
    const fullRotatingList = cItems.map((card) => <RotatingList key={card.id} name={card.name} imageUrl={card.image_url} />)
    return (
        <div>
            <Grid sx={{ flexGrow: 2, paddingLeft: 20 }} container spacing={2}>
            {fullRotatingList}
            </Grid>
        </div>
    )
}