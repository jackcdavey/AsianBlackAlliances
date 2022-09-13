import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
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
        <Header />
        <div id='landingGrid' >
          <a href='/historyOfCollaboration'>
            <div>
              <h2> History of Collaboration</h2>
              <p>Explore the history of Asian and Black collaboration around the world.</p>
            </div>
          </a>
          <a href='/crossCulturalInfluences'>
            <div>
              <h2>Cross-Cultural Influences</h2>
              <p>Learn about the cultural influences of Asian and Black communities.</p>
            </div>
          </a>
          <a href='/mythsCuriosity'>
            <div>
              <h2>Myths &#38; Curiosity</h2>
              <p>Learn about the myths and misconceptions of Asian and Black communities.</p>
            </div>
          </a>
          <a href='/ourVoices'>
            <div>
              <h2>Our Voices</h2>
              <p>Hear from Asian and Black community members about their experiences.</p>
            </div>
          </a>


          <a>
            <div>
              <h2>Share Your Story</h2>
            </div>
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default Home
