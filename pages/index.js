// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { createClient } from 'next-sanity'

import Link from 'next/link'
// import { useTheme } from '@mui/material/styles';
import { Container, Grid, Paper, Box } from '@mui/material';
import Header from '../public/components/header';
import Footer from '../public/components/footer';
import Layout from '../public/components/layout';

import HomeCarousel from '../public/components/carousel';

import {COLORS} from '../public/styling/colors.js';

import wave from '../public/wave.svg';

// const theme = useTheme();

const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});

function Home({ homepageTile }){
  return (
    <>
      <Head>
        <title>Asian &#38; Black Alliances</title>
        <meta name="description" content="Exploring the history and cultural relations of Asian and Black communities aroun the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title={"Asian and Black Alliances"} description={""}>
        <div id='body' style={{ backgroundImage: `url(${wave.src})` }}>
          <Header />
          {/* Create dedicated carousel container later */}
          <div style={{ width: '100vw', overflow: 'hidden' }}>
            <HomeCarousel />
          </div>

          <Box id={'landingGrid'}>
            {homepageTile?.map((homepageTile) => (
            <Box className={'landingGridItem'} key={homepageTile._id}>
              <a href={homepageTile?.link}>
                <Paper elevation={10} className={'landingGridContent'}>
                    <h3>{homepageTile?.title}</h3>
                    <p>{homepageTile?.description}</p>
                </Paper>
              </a>
            </Box>
            ))}
          </Box>
        </div>
        <Footer />
      </Layout>
 

    </>
  )
}

export async function getStaticProps() {
  const homepageTile = await client.fetch(`*[_type == "homepageTile"]  | order(order asc)`)

  return {
    props: {
      homepageTile,
    }
  };
}
export default Home
