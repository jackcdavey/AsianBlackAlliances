// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react';

import { createClient } from 'next-sanity'

import Link from 'next/link'
// import { useTheme } from '@mui/material/styles';
import { Container, Grid, Paper, Box, Button, FormControl, InputLabel, MenuItem, Select  } from '@mui/material';
import {HomepageHeader} from '../public/components/header';
import Footer from '../public/components/footer.js';
import Layout from '../public/components/layout';
import GradientMediaCard from '../public/components/cards/gradientMediaCard';



import Carousel from 'react-material-ui-carousel'

import dynamic from 'next/dynamic';


import { COLORS } from '../public/styling/colors.js';

import Decor from '../public/components/generateDecorPositions.js';

import wave from '../public/wave.svg';

import imageUrlBuilder from '@sanity/image-url'


// var languageSelection = 'en';


const BioCard  = dynamic(
  () => import("../public/components/cards/bioCard"),
  { ssr: false }
)

// const theme = useTheme();



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

function Home({ homepageTile, homepageDescription, bio, footerContent, homepageCarousel }) {
  var cardColor = '';


const [lang, setLang] = useState('en');


  const handleChange = (event) => {
        setLang(event.target.value);
        if (typeof window !== "undefined") {
            localStorage.setItem("langChoice", event.target.value);
            console.log("Set local language to: " + event.target.value);
        }
  };
  
  const checkLang = () => {
    if (typeof window !== "undefined") {
      var languageSelection = localStorage.getItem('langChoice');
      if(languageSelection != lang)
        setLang(languageSelection);
      console.log("Stored language is " + languageSelection);
    }
  }

  checkLang();

  // If bios are available in the language selected, display them, otherwise display the English bios
  var bioL = bio.filter((bio) => bio.language == lang).length > 0 ? bio.filter((bio) => bio.language == lang) : bio.filter((bio) => bio.language == 'en');

  const homepageTileL = homepageTile.filter((homepageTile) => homepageTile.language == lang).length > 0 ? homepageTile.filter((homepageTile) => homepageTile.language == lang) : homepageTile.filter((homepageTile) => homepageTile.language == 'en');


  
  const homepageThanksL = homepageDescription.filter((homepageDescription) => homepageDescription.title == 'Thanks' && homepageDescription.language == lang).length > 0 ? homepageDescription.filter((homepageDescription) => homepageDescription.title == 'Thanks' && homepageDescription.language == lang)[0].body : homepageDescription.filter((homepageDescription) => homepageDescription.title == 'Thanks' && homepageDescription.language == 'en')[0].body

  const homepageDescriptionL = homepageDescription.filter((homepageDescription) => homepageDescription.title == 'Intro' && homepageDescription.language == lang).length > 0 ? homepageDescription.filter((homepageDescription) => homepageDescription.title == 'Intro' && homepageDescription.language == lang)[0].body : homepageDescription.filter((homepageDescription) => homepageDescription.title == 'Intro' && homepageDescription.language == 'en')[0].body

  const homepageCarouselL = homepageCarousel.filter((homepageCarousel) => homepageCarousel.language == lang).length > 0 ? homepageCarousel.filter((homepageCarousel) => homepageCarousel.language == lang) : homepageCarousel.filter((homepageCarousel) => homepageCarousel.language == 'en');

  const footerContentL = footerContent.filter((footerContent) => footerContent.language == lang).length > 0 ? footerContent.filter((footerContent) => footerContent.language == lang) : footerContent.filter((footerContent) => footerContent.language == 'en');

  console.log("carousel" + homepageCarouselL);


  return (
    <>
      <Head>
        <title>Asian &#38; Black Alliances</title>
        <meta name="description" content="Exploring the history and cultural relations of Asian and Black communities aroun the world." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />
      </Head>
      <HomepageHeader />
      <Layout title={"Asian and Black Alliances"} description={""}>
        {/* style={{ backgroundImage: `url(${wave.src})` }} */}


        <div style={{
        position: 'fixed',
        right: '0',
        zIndex: '100',
        marginTop: '3.2rem',
        marginRight: '1.5rem',
      }}>
                <Box sx={{ wdth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" >
                            {lang}
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lang}
                            label="Language"
                            onChange={handleChange}
                        >
                            <MenuItem value={'en'}>English</MenuItem>
                            <MenuItem value={'zh'}>Chinese - Simplified</MenuItem>
                            <MenuItem value={'zh-tw'}>Chinese - Traditional</MenuItem>
                            <MenuItem value={'zh-cn'}>Cantonese</MenuItem>
                            <MenuItem value={'ko'}>Korean</MenuItem>
                            <MenuItem value={'ja'}>Japanse</MenuItem>
                            <MenuItem value={'vi'}>Vietnamese</MenuItem>
                            <MenuItem value={'tl'}>Tagalog</MenuItem>
                            <MenuItem value={'km'}>Khmer</MenuItem>


                        </Select>
                    </FormControl>
                </Box>
        </div>
        

        <div className="homeBody" >
          
          
          <div style={{width: '100vw', overflow: 'hidden', paddingTop: '3rem' }}>
            <Carousel className="carousel" animation='slide' sx={{ margin: '5%', overflow: 'hidden' }} autoPlay={false} navButtonsAlwaysVisible={true} >
            {homepageCarouselL?.map((homepageCarouselL) => (
              <Paper sx={{padding: '5%', paddingLeft: '2%', borderRadius: '25px', display: 'flex', alignItems: 'center', overflow: 'hidden', justifyContent: 'flex-start', marginLeft: '4rem', marginRight: '4rem' }}>
                <div style={{width: "30%", maxHeight: '35vh'}}>
                  <img src={urlFor(homepageCarouselL.image).url()} alt={homepageCarousel.name} style={{ maxWidth: '100%' }} />
                </div>
                <div style={{width: "70%", display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '1rem'}}>
            <h2 style={{margin: "0"}}>{homepageCarouselL?.title}</h2>
                  <p style={{margin: "0"}}>{homepageCarouselL?.description}</p>
                  </div>

                {homepageCarouselL?.link &&
                  <Button
                    variant='contained'
                    target='_blank'
                    style={{marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', textAlign: 'center'}}
                    href={homepageCarouselL.link}>
                    {homepageCarouselL.linkLabel}
                  </Button>
                }
                </Paper>
            ))}


            
            </Carousel>
          </div>


          <div style={{ marginBottom: '1vh', textAlign: 'center', paddingLeft: '5%', paddingRight: '5%' }}>
            {homepageDescriptionL}
          </div>
          <Box id={'landingGrid'}>
            {homepageTileL.map((homepageTile) => (
            <Box className={'landingGridItem'} key={homepageTile._id}>
                
              <a href={homepageTile?.link}>
                  <Paper elevation={10} className={'landingGridContent'}
                    style={{ backgroundColor: homepageTile?.backgroundColor, color: homepageTile?.textColor, overflow: 'auto' }}>   
                    {/* If a random number between 1 and 10 is less than 5, display the image */}
                    {/* <Decor /> */}
                    <h2 style={{margin: 0}}>{homepageTile?.title}</h2>
                    <p>{homepageTile?.description}</p>
                </Paper>
              </a>
            </Box>
            ))}
          </Box>
          <div style={{textAlign: 'left', width: "100vw", padding: '5% 0 0 5%'}}>
            <h1 className="bioHeader" style={{margin: "3rem 0 0 0" }}>About The Team</h1>
          </div>
          <div className='bioSection'>
            {bioL.map((bio) =>(
              <div className='bioCol' style={{width: '25%'}}>
              <BioCard key={bio._id} name={bio?.name} desc={bio?.body} image={urlFor(bio?.image)} link={bio?.link} />
              </div>
            ))}
          </div>
          <div style={{ marginBottom: '1vh', textAlign: 'center', paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
            {homepageThanksL}
          </div>
        </div>
        <Footer id="homeFooter" link={footerContentL[0]?.link} body={footerContentL[0]?.body } />
      </Layout>
    </>
  )
}

export async function getStaticProps(context) {
  const homepageTile = await client.fetch(`*[_type == "homepageTile" ]  | order(order asc)`)
  const homepageDescription = await client.fetch(`*[_type == "homepageDescription"]  | order(order asc)`)
  const bio = await client.fetch(`*[_type == "bio"]  | order(order asc)`)
  const footerContent = await client.fetch(`*[_type == "footerContent"]  | order(order asc)`)
  const homepageCarousel = await client.fetch(`*[_type == "homepageCarousel"]  | order(order asc)`)

  return {
    props: {
      homepageTile,
      homepageDescription,
      bio,
      footerContent,
      homepageCarousel,
    },
    revalidate: 5,
  };
}
export default Home
