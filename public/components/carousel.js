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

export default function HomeCarousel({ homepageCarousel }) {

    


    var items = []

    homepageCarousel?.map((homepageCarousel) => (
        items.push({
            name: homepageCarousel.title,
            description: homepageCarousel.description,
            // image: homepageCarousel.image,
        })
    ))

    console.log("Items:" + items.length);
    return (
        <Carousel animation='slide' sx={{ margin: '5%' }} >
            {homepageCarousel?.map((homepageCarousel) => (
                <Paper sx={{ padding: '5%', borderRadius: '25px' }}>
            <h2>{homepageCarousel?.name}</h2>
            <p>{homepageCarousel?.description}</p>

            <Button className="CheckButton" href='http://www.google.com'>
                Learn More Here!
            </Button>
                </Paper>
            ))}


            
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper sx={{ padding: '5%', borderRadius: '25px' }}>
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
    const homepageCarousel = await client.fetch(`*[_type == "homepageCarousel"] | order(order asc)`)

    return {
        props: {
            homepageCarousel,
        },
        revalidate: 10,

    };
}