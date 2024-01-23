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
                    image={"./public/media/DishCountryCaptain.png"} //Check path
                    alt="Placeholder image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lorem Ipsum
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
