import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from '../public/components/header'
import Footer from '../public/components/footer'
import Layout from '../public/components/layout'
import { createClient } from 'next-sanity'


import React from 'react'


import Grid from '@mui/material/Grid';

import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});


const styles = {
  playerWrap: {
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    display: "flex",
    justifyContent: "center",
  },
  playerStyle: {
    borderRadius: '25px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
    border: '1px solid #000000',
    position: "absolute",
    aspectRatio: "16/9",
    overflow: "hidden",
  },
}

const OurVoices = ({footerContent}) => {
  return (
    <>
      <Head>
        <title>ABA: Our Voices</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />

      </Head>
      <Header />
      <Layout title='ABA: Our Voices' description=' '>
        <div id='body'>

          <h1>Our Voices</h1>
          <div style={styles.playerWrap}>
            <ReactPlayer url='https://www.youtube.com/watch?v=qjYiuV66KEw'
              width={"90vw"} height={"auto"} style={styles.playerStyle} controls={true} />
          </div>
        </div>
      </Layout>

      <Footer
      link={
          footerContent[0]?.link
        } body={
          footerContent[0]?.body
        } />
    </>
  )
}

export async function getStaticProps() {
  const footerContent = await client.fetch(`*[_type == "footerContent"]  | order(order asc)`)
   return {
     props: {
       footerContent,
     },
   }
}
  


export default OurVoices
