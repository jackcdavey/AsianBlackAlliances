// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { createClient } from 'next-sanity'

import Link from 'next/link'
// import { useTheme } from '@mui/material/styles';
import { Container, Grid, Paper, Box } from '@mui/material';
import {HomepageHeader} from '../public/components/header';
import Footer from '../public/components/footer.js';
import Layout from '../public/components/layout';

import HomeCarousel from '../public/components/carousel.js';

import dynamic from 'next/dynamic';


import {COLORS} from '../public/styling/colors.js';

import wave from '../public/wave.svg';

import imageUrlBuilder from '@sanity/image-url'


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

function Home({ homepageTile, homepageDescription, bio, footerContent }) {
  var cardColor = '';
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

      <Layout title={"Asian and Black Alliances"} description={""}>
        <div id='body' style={{ backgroundImage: `url(${wave.src})` }}>
          <div style={{marginBottom: '10vh'}}>
            <HomepageHeader />
            </div>
          {/* Create dedicated carousel container later */}
          <div style={{ width: '100vw', overflow: 'hidden' }}>
            <HomeCarousel />
          </div>
          <div style={{ marginBottom: '1vh', textAlign: 'center', paddingLeft: '5%', paddingRight: '5%' }}>
            {homepageDescription.map((desc) => (
              // If the description title is "Intro", then display the body as a paragraph
              desc.title === "Intro" ? <p>{desc.body}</p> : null
            ))}
          </div>
          <Box id={'landingGrid'}>
            {homepageTile?.map((homepageTile) => (
              
            <Box className={'landingGridItem'} key={homepageTile._id}>
              <a href={homepageTile?.link}>
                  <Paper elevation={10} className={'landingGridContent'}
                    style={{backgroundColor: homepageTile?.backgroundColor, color: homepageTile?.textColor}}>
                    <h2>{homepageTile?.title}</h2>
                    <p>{homepageTile?.description}</p>
                </Paper>
              </a>
            </Box>
            ))}
          </Box>
          <div style={{textAlign: 'left', width: "100vw", padding: '5% 0 0 5%'}}>
            <h1 >About The Team</h1>
          </div>
          <div style={{ marginBottom: '1vh', textAlign: 'center', paddingLeft: '5%', paddingRight: '5%', display: 'flex', flexDirection: 'column' }}>
            
            {bio.map((bio) => (
              <BioCard key={bio._id} name={bio?.name} desc={bio?.body} image={urlFor(bio?.image)} link={bio?.link} />
            ))}
          </div>

          <div style={{ marginBottom: '1vh', textAlign: 'center', paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
            {homepageDescription.map((desc) => (
              // If the description title is "Thanks", then display the body as a paragraph
              desc.title === "Thanks" ? <p>{desc.body}</p> : null
            ))}
          </div>
        </div>
        <Footer link={
          footerContent[0]?.link
        } body={
          footerContent[0]?.body
        } />
      </Layout>
 

    </>
  )
}

export async function getStaticProps() {
  const homepageTile = await client.fetch(`*[_type == "homepageTile"]  | order(order asc)`)
  const homepageDescription = await client.fetch(`*[_type == "homepageDescription"]  | order(order asc)`)
  const bio = await client.fetch(`*[_type == "bio"]  | order(order asc)`)
  const footerContent = await client.fetch(`*[_type == "footerContent"]  | order(order asc)`)

  return {
    props: {
      homepageTile,
      homepageDescription,
      bio,
      footerContent,
    },
    revalidate: 10,
  };
}
export default Home
