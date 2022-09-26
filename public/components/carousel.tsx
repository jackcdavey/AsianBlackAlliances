import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

export default function HomeCarousel() {
    var items = [
        {
            name: "Carousel Item #1",
            description: "Enter a description for this item here.",
        },
        {
            name: "Carousel Item #2",
            description: "Enter a description for this item here.",
        }
    ]

    return (
        <Carousel animation='slide' sx={{ margin: '5%' }} >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props: {
    item: any;
}) {
    return (
        <Paper sx={{ padding: '5%' }}>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton" href='http://www.google.com'>
                Learn More Here!
            </Button>
        </Paper>
    )
}