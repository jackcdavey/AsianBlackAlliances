import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import { createClient } from 'next-sanity';

const client = createClient({
    projectId: 'hiagtp2f',
    dataset: 'production',
    apiVersion: '2022-10-03',
    useCdn: false,
});

export default function HomeCarousel({ homepageCarousel }: any) {
    var items = [
        {
            name: "Carousel Item #1",
            description: "Enter a description for this item here.",
            image: "https://picsum.photos/800/300/?random"
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
            <img src={props.item.image} alt={props.item.name} />
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

            <Button className="CheckButton" href='http://www.google.com'>
                Learn More Here!
            </Button>
        </Paper>
    )
}

export async function getStaticProps() {
    const homepageTile = await client.fetch(`*[_type == "homepageTile"]`)

    return {
        props: {
            homepageTile,
        }
    };
}