import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import Image from 'next/image';

import DishCountryCaptain from '../media/DishCountryCaptain.png';

const styles = {
    card: {
        width: '25vw',
        maxHeight: '5vh',
        display: 'flex',
    },
}

export default function MultiActionAreaCard() {
    return (
        <Card sx={styles.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100%"
                    image={DishCountryCaptain.src}
                    alt="Placeholder image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Visit
                </Button>
            </CardActions>
        </Card>
    );
}
