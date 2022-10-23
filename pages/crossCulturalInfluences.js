
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Grid from '@mui/material/Grid';
import Header from '../public/components/header';
import Footer from '../public/components/footer.js';
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
    backgroundColor: COLORS.primaryLight,
    zIndex: '-1',
    borderRadius: '25px',
  },

  fashionRowBackground: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    filter: 'blur(10px)',
    backgroundColor: '#FAC898 ',
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
  theRadius: {
    borderRadius: '25px',
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
    <div style={{ display: 'flex', justifyContent: contentJustification, alignItems: 'center', marginTop: '1rem', marginBottom: '1rem', marginLeft: marginLeft, marginRight: marginRight, width: '100vw', marginTop: '0px' }}>
      <h1>{title}</h1>
    </div>
  );
}




export default function CrossCulturalInfluences({food, chef, holiday, footerContent, fashion2}) {
  return (
    <>
      <Head>
        <title>ABA: Cross Cultural Influences</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />


      </Head>

      <Layout title='ABA: Cross-Cultural Influences' description=' '>
        <Header />
        <div id='body'>
          
           <Paper className='collapsed' sx={styles.theRadius}>
            <a href='#food' className='collapsed-desc'>
              <SubtitleSeparator title='Food' contentJustification='center' />
            </a>
            </Paper>
         <div className='collapsed-content' id='food'>
          <div id="foodSection" style={styles.foodSectionWrap}>
            <div className='foodColumn' style={styles.foodColumn}>
              <div style={styles.foodColumnBackground} > </div>
                <h2>Chefs</h2>
                
              
                {chef.map((chef) => (
                
                  
                // <div style={{ paddingBottom: "10%" }}>
                //   <a href={chef?.link} target="_blank">
                //   <Paper key={chef._id} id="chefCard" className="chefCard" sx={styles.theRadius}>
                //     <h2>{chef?.title}</h2>
                //     <a>{chef?.link}</a>
                //     </Paper>
                //     </a>
                //   </div>
                  

                  <div style={{paddingBottom: '10%'}} id='chefCard' key={chef._id}>
                    <Paper id="chefCard" className="chefCard" sx={styles.theRadius}>
                      <div id='millerCard' style={{
                        display: 'flex',  alignItems: 'center'
                      }}> 
                        {chef?.image && (
                      <img 
                        src={urlFor(chef?.image).url()}
                        style={{
                          width: '100%',
                          maxWidth: '7rem',
                          borderRadius: '25px',
                          aspectRatio: '1/1',
                          padding: '0.25rem'

                        }}
                      /> 
                        )}
                <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '1rem'}}> 
                          <h2 style={{marginBottom: 0}}>{chef?.title}</h2>
                          <p style={{margin: '2%'}}>{chef?.body}</p>
                          
                          

                </div>
                      </div>
                      
                      {chef?.link && (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '1rem', width: '100%' }}>

                                                  {chef?.links.map((link, index) => (
                          
                          <a href={chef?.links[index]} target="_blank">
                            <Button variant="contained" style={{margin: '2%', paddingLeft: '0.5rem', paddingRight: '0.5rem' , borderRadius: '25px', width: '100%'}} >
                              {chef.linkLabels && (
                                  <p>{chef.linkLabels[index]}</p>
                              )
                              || (
                                <p>More Info</p>
                              )}
                            </Button>
                                                    </a>
                          ))}
                        </div>
                      )}
            </Paper>
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
            </div>

<Paper className='collapsed' sx={styles.theRadius}>
            <a href='#fashion' className='collapsed-desc'>
              <SubtitleSeparator title='Fashion' contentJustification='center' />
            </a>
            </Paper>
          <div className='collapsed-content' id='fashion'>
           
          
            {fashion2.map((fashion) => (
            
              <div className="fashionTiles" key={fashion._id} style={{  marginBottom: '8vh', position: 'relative', zIndex: '1', padding: "5%", margin: '2vw', justifyContent: 'space-between', alignItems: 'center' }}>
                {urlFor(fashion?.image) &&
                  // <></>
                  // 'image-f2f8d887e3e8139e275cfe39e4413d766a9eff41-1200x675-png'
                  <div className='fashionCols' style={{padding: 'rem'}}>
                    <img src={urlFor(fashion?.image)} alt='' style={{maxWidth: "100%", borderRadius: '25px'}} /> 
                    </div>
              } 
                <div style={styles.fashionRowBackground} > </div>
              <p className='fashionCols' style={{ paddingTop: 'auto', verticalAlign: "middle"}}>{fashion?.body}</p>
                

              <div className='fashionCols' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',}}>
              {/* for each link, create a button */}
                {fashion?.link && fashion?.link.map((link) => (
                // Display a button for each link
                  
              <Button variant="contained" color="primary" href={fashion?.link[fashion?.link.indexOf(link)]}  target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', width: "90%", textAlign: 'center', margin: '2%', borderRadius: '25px' }} >
                  {/* If a linkLabel exists in the same index as the link, use that as the button text. Otherwise, use the link */}
                  {fashion?.linkLabel && fashion?.linkLabel[fashion?.link.indexOf(link)] ? fashion?.linkLabel[fashion?.link.indexOf(link)] : "More Info"}
                </Button>
              ))}
              </div>
            </div>
          ))}
          </div>


          {/* <SubtitleSeparator title='Black-Asian Blended Family' contentJustification='flex-start' marginLeft='10%' /> */}

          {/* <SubtitleSeparator title='Music / Anime / Manga' contentJustification='flex-end' marginRight='25%' /> */}

          <Paper className='collapsed' sx={{borderRadius: '25px', overflowX: 'hidden', overflowY: 'hidden'}}>
            <a href='#holidays' className='collapsed-desc'>
              <SubtitleSeparator title='Celebrations' contentJustification='center'  />
            </a>
            </Paper>
         <div className='collapsed-content' id='holidays'>
          {/* SEASON CHART */}
          {/* This should really be a separate component, but does not seem to work with CMS */}
          <div className='seasonGrid'>
      <div style={{ gridColumn: "span 2", backgroundColor: 'lightblue', borderRadius: '25px'}}>
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
      <div style={{gridColumn: "span 2", backgroundColor: 'lightgreen', borderRadius: '25px' }}>
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
      <div style={{gridColumn: "span 2", backgroundColor: 'lightyellow', borderRadius: '25px' }}>
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
      <div style={{gridColumn: "span 2", backgroundColor: 'lightsalmon', borderRadius: '25px' }}>
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
          



        </div>
        <Footer
          link={
          footerContent[0]?.link
        } body={
          footerContent[0]?.body
        } />
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const food = await client.fetch(`*[_type == "food"]  | order(order asc)`);
  const chef = await client.fetch(`*[_type == "chef"]  | order(order asc)`);
  const holiday = await client.fetch(`*[_type == "holiday"]  | order(order asc)`);
  const fashion2 = await client.fetch(`*[_type == "fashion2"]  | order(order asc)`);
  const footerContent = await client.fetch(`*[_type == "footerContent"]  | order(order asc)`)
  return {
    props: {
      food,
      chef,
      holiday,
      footerContent,
      fashion2,
    },
    revalidate: 10,

  };
}

