import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../public/components/header'

import Grid from '@mui/material/Grid';

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from 'react-simple-maps';

const geoUrl = '/features.json';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ABA: History of Collaboration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <ComposableMap projection="geoMercator">
          <ZoomableGroup center={[0, 0]} zoom={9}>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
            <Marker coordinates={[0, 0]}>
              <circle r={3} fill="#FF5533" />
            </Marker>
          </ZoomableGroup>
        </ComposableMap>
        <h1>History of Collaboration</h1>


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
