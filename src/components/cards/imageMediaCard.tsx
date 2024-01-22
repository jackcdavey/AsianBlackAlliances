import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard() {
    return (
        <Card sx={{ maxWidth: 345, padding: '5%' }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="../../media/DishCountryCaptain.png"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lorem Ipsum
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
