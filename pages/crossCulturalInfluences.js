
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Grid from '@mui/material/Grid';
import Header from '../public/components/header';
import Footer from '../public/components/footer';
import Layout from '../public/components/layout';


import FoodCard from '../public/components/foodCard';


import dynamic from 'next/dynamic';

const LinkWithImage = dynamic(
  () => import('../public/components/cards/linkWithImageCard'),
);

import React from 'react';
import Paper from '@mui/material/Paper';
import GradientMediaCard from '../public/components/cards/gradientMediaCard';
import { createClient } from 'next-sanity'

import { COLORS } from '../public/styling/colors.js';

import imageUrlBuilder from '@sanity/image-url'
import { Button } from '@mui/material';



const styles = {
  foodSectionWrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: "center",
    width: "100%",
  },

  foodColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "2vw",
    borderRadius: '25px',
    padding: '1rem',
    position: 'relative',
    zIndex: '1',
    // overflow: 'contain',
  },


  foodColumnBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    filter: 'blur(10px)',
    backgroundColor: COLORS.secondaryLight,
    zIndex: '-1',
    borderRadius: '25px',
  },

  seasonSectionWrap: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
     gridTemplateRows: 'repeat(2, 1fr)',
     gridGap: '1rem',
     marginTop: '1rem',
     marginBottom: '1rem',
     marginLeft: '25%',
     marginRight: '25%',
     width: '100%',
     aspectRatio: '2/1'
  },

  seasonQuad: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.25rem',
  },

};


const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});

const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

function SubtitleSeparator({ title, contentJustification, marginLeft, marginRight }) {
  return (
    <div style={{ display: 'flex', justifyContent: contentJustification, alignItems: 'center', marginTop: '1rem', marginBottom: '1rem', marginLeft: marginLeft, marginRight: marginRight, width: '100vw' }}>
      <h1>{title}</h1>
    </div>
  );
}




export default function CrossCulturalInfluences({food, chef, holiday, fashion}) {
  return (
    <>
      <Head>
        <title>ABA: Cross Cultural Influences</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title='ABA: Cross-Cultural Influences' description=' '>
        <Header />
        <div id='body'>
          {/* <LinkWithImage link='https://www.youtube.com/watch?v=QZ9Y4Z0Z1Z8'
            image='https://picsum.photos/800/300/?random'
            title='Food'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.' /> */}


          {/* <div className='gradientMediaCard'>
            <img src='https://images.unsplash.com/photo-1611916656173-875e4277bea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHw&ixlib=rb-1.2.1&q=80&w=400' alt='' />
            <h3><a href="">A Super Wonderful Headline</a></h3>
            <p>Lorem ipsum sit dolor amit</p>
          </div> */}




          {/* <span > <h1>Food</h1></span>
           */}
          <SubtitleSeparator title='Food' contentJustification='flex-start' marginLeft='10%' />

          <div id="foodSection" style={styles.foodSectionWrap}>
            <div className='foodColumn' style={styles.foodColumn}>
              <div style={styles.foodColumnBackground} > </div>
              <h2>Chefs</h2>
              <div style={{paddingBottom: '10%'}} id='chefCard'>
              <LinkWithImage link='https://www.amazon.com/Adrian-Miller/e/B00CJV744I'
                image="https://cdn.firstwefeast.com/assets/2015/06/adrianmiller1.jpg"
                title='Adrian Miller'
                  description='Adrian Miller is a chef and author of many books. A “history buff” as he calls himself, Adrian’s books tell stories of rich cultures beyond the food .  '

                  
                />
              </div>
              {chef.map((chef) => (
                <div style={{ paddingBottom: "10%" }}>
                  <a href={chef?.link}>
                  <Paper key={chef._id} id="chefCard" className="chefCard">
                    <h3>{chef?.title}</h3>
                    <a>{chef?.link}</a>
                    </Paper>
                    </a>
                </div>
                
              ))}

            </div>
            <div className='foodColumn' style={styles.foodColumn}>
              <div style={styles.foodColumnBackground} > </div>
              <h2>Dishes</h2>
              {food.map((food) => (
                <div style={{paddingBottom: "10%"}}>
                  <GradientMediaCard key={food._id} imgSource={urlFor(food?.image)} title={food?.title} content={food?.body} link={food?.link} useGradient={true} />
                  </div>
               ))}
            </div>
          </div>


          <SubtitleSeparator title='Fashion' contentJustification='flex-end' marginRight='10%' />
          
          {fashion.map((fashion) => (
            <div key={fashion._id} style={{display: 'flex', flexDirection: 'row'}}>
              <p style={{width: "70%"}}>{fashion?.body}</p>
              {fashion.image &&
              <img src={urlFor(fashion?.image)} alt='' />
              } 
              <Button link={fashion?.link} sx={{ width: "30%" }} >
                Learn More
              </Button>
              
            </div>
          ))}


          {/* <SubtitleSeparator title='Black-Asian Blended Family' contentJustification='flex-start' marginLeft='10%' /> */}

          {/* <SubtitleSeparator title='Music / Anime / Manga' contentJustification='flex-end' marginRight='25%' /> */}

          <SubtitleSeparator title='Celebrating Cultural Memories' contentJustification='flex-end' marginRight='10%' />


          
          {/* SEASON CHART */}
          {/* This should really be a separate component, but does not seem to work with CMS */}
          <div style={styles.seasonSectionWrap}>
      <div style={{ gridColumn: '1 / 2', gridRow: '1 / 2', backgroundColor: 'lightblue', borderRadius: '25px'
 }}>
        <div style={styles.seasonQuad}>
          <div style={{textAlign: 'right', paddingRight: '0.5rem'}}>
            <h1 style={{ alignSelf: 'flex-end' }}>Winter</h1>
                  {holiday.map((holiday) => (
              holiday.season === 'winter' ?
              <div style={{ paddingBottom: "10%", lineHeight: '1.3rem' }}>
                <h3 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.title}</h3>
                <h5 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.date}</h5>
                <p style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.body}</p>
                      </div>
              : null
            ))}

            </div>
          </div>
      </div>
      <div style={{ gridColumn: '2 / 2', gridRow: '1 / 2', backgroundColor: 'lightgreen', borderRadius: '25px' }}>
        <div style={styles.seasonQuad}>
          <div style={{textAlign: 'left', paddingLeft: '0.5rem'}}>
                  <h1>Spring</h1>
                  {holiday.map((holiday) => (
              holiday.season === 'spring' ?
              <div style={{ paddingBottom: "10%", lineHeight: '1.3rem' }}>
                <h3 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.title}</h3>
                <h5 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.date}</h5>
                <p style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.body}</p>
                      </div>
              : null
            ))}
            </div>
          </div>
      </div>
      <div style={{ gridColumn: '1 / 2', gridRow: '2 / 2', backgroundColor: 'lightyellow', borderRadius: '25px' }}>
        <div style={styles.seasonQuad}>
          <div style={{textAlign: 'right', paddingRight: '0.5rem'}}>
                  <h1>Summer</h1>
                  {holiday.map((holiday) => (
              holiday.season === 'summer' ?
              <div style={{ paddingBottom: "10%", lineHeight: '1.3rem' }}>
                <h3 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.title}</h3>
                <h5 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.date}</h5>
                <p style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.body}</p>
                      </div>
              : null
            ))}
            </div>
          </div>
      </div>
      <div style={{ gridColumn: '2 / 2', gridRow: '2 / 2', backgroundColor: 'lightsalmon', borderRadius: '25px' }}>
        <div style={styles.seasonQuad}>
                    <div style={{textAlign: 'left', paddingLeft: '0.5rem'}}>
                  <h1>Fall</h1>
                  {holiday.map((holiday) => (
              holiday.season === 'fall' ?
              <div style={{ paddingBottom: "10%", lineHeight: '1.3rem' }}>
                <h3 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.title}</h3>
                <h5 style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.date}</h5>
                <p style={{marginBottom: '0px', marginTop: '0px'}}>{holiday?.body}</p>
                      </div>
              : null
            ))}
            </div>
        </div>
        </div>
          </div>
          



        </div>
        <Footer />
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const food = await client.fetch(`*[_type == "food"]  | order(order asc)`);
  const chef = await client.fetch(`*[_type == "chef"]  | order(order asc)`);
  const holiday = await client.fetch(`*[_type == "holiday"]  | order(order asc)`);
  const fashion = await client.fetch(`*[_type == "fashion"]  | order(order asc)`);
  return {
    props: {
      food,
      chef,
      holiday,
      fashion,
    },
    revalidate: 10,

  };
}

