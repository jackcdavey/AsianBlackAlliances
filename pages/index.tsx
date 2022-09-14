import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useTheme } from '@mui/material/styles';
import { Container, Grid, Paper } from '@mui/material';
import Header from '../public/components/header';
import Footer from '../public/components/footer';

// const theme = useTheme();

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Asian &#38; Black Alliances</title>
        <meta name="description" content="Exploring the history and cultural relations of Asian and Black communities aroun the world." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div id='body'>
          <Header />
          <Grid container rowSpacing={2} columnSpacing={6} id={'landingGrid'}>
            <Grid item xs={12} sm={4} className={'landingGridItem'}>
              <a href='/historyOfCollaboration'>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> History of Collaboration</h2>
                  <p>Explore the history of Asian and Black collaboration around the world.</p>
                </Paper>
              </a>
            </Grid>
            <Grid item xs={12} sm={4} className={'landingGridItem'}>
              <a href='/crossCulturalInfluences'>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> Cross-Cultural Influences</h2>
                  <p>Explore the ways in which Asian and Black communities have influenced each other.</p>
                </Paper>
              </a>
            </Grid>
            <Grid item xs={12} sm={4} className={'landingGridItem'}>
              <a href='/mythsCuriosity'>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> Myths &#38; Curiosity</h2>
                  <p>Explore the myths and curiosity surrounding Asian and Black communities.</p>
                </Paper>
              </a>
            </Grid>
            <Grid item xs={12} sm={4} className={'landingGridItem'}>
              <a href='/ourVoices'>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> Our Voices</h2>
                  <p>Explore the voices of Asian and Black communities.</p>
                </Paper>
              </a>
            </Grid>
            <Grid item xs={12} sm={6} className={'landingGridItem'}>
              <a href='/'>
                <Paper elevation={10} className={'landingGridContent'}>
                  <h2> Share Your Story</h2>
                  <p>Share your story about Asian and Black communities.</p>
                </Paper>
              </a>
            </Grid>
          </Grid>
        </div>
        <Footer />

      </main>


    </>
  )
}

export default Home
