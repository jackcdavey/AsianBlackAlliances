import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';

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
        <Container id='banner' sx={{ backgroundColor: 'primary.main' }}>
          <h1>Asian &#38; Black Alliances</h1>
        </Container>
        <div id='landingGrid' >
          <a href='/historyOfCollaboration'>
            <div>
              <h2> History</h2>
              <p>Explore the history of Asian and Black collaboration around the world.</p>
            </div>
          </a>
          <a href='/crossCulturalInfluences'>
            <div>
              <h2>Culture</h2>
              <p>Learn about the cultural influences of Asian and Black communities.</p>
            </div>
          </a>
          <a href='/mythsCuriosity'>
            <div>
              <h2>Myths</h2>
              <p>Learn about the myths and misconceptions of Asian and Black communities.</p>
            </div>
          </a>
          <a href='/ourVoices'>
            <div>
              <h2>Our Voices</h2>
              <p>Hear from Asian and Black community members about their experiences.</p>
            </div>
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}

export default Home
