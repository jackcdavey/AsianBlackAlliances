import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

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
                    image="https://images.unsplash.com/photo-1616489950003-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                // alt="green iguana"
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
