import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Link from 'next/link'
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Paper } from '@mui/material';
import Header from '../public/components/header';
import Footer from '../public/components/footer';
import Layout from '../public/components/layout';

import wave from '../public/wave.svg';

// const theme = useTheme();

const Home: NextPage = () => {
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
          <Grid container rowSpacing={2} columnSpacing={6} id={'landingGrid'}>
            <Grid item xs={12} sm={4} className={'landingGridItem'}>
              <Link href='/historyOfCollaboration'><a>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> History of Collaboration</h2>
                  <p>                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Paper>
              </a></Link>
            </Grid>
            <Grid item xs={12} sm={4} className={'landingGridItem'}>
              <Link href='/crossCulturalInfluences'><a>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> Cross-Cultural Influences</h2>
                  <p>                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Paper>
              </a></Link>
            </Grid>
            <Grid item xs={12} sm={4} className={'landingGridItem'}>
              <Link href='/mythsCuriosity'><a>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> Myths &#38; Curiosity</h2>
                  <p>                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    .</p>
                </Paper>
              </a></Link>
            </Grid>
            <Grid item xs={12} sm={4} className={'landingGridItem'}>
              <Link href='/ourVoices'><a>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> Our Voices</h2>
                  <p>                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Paper>
              </a></Link>
            </Grid>
            <Grid item xs={12} sm={6} className={'landingGridItem'}>
              <Link href='/discussion'><a>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> Share Your Story</h2>
                  <p>                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Paper>
              </a></Link>
            </Grid>
          </Grid>
        </div>
        <Footer />

      </Layout>


    </>
  )
}

export default Home
