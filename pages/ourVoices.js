import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Header from '../public/components/header'
import Footer from '../public/components/footer'
import Layout from '../public/components/layout'
import { createClient } from 'next-sanity'


import React, {useState} from 'react'


import Grid from '@mui/material/Grid';

import {Button, Paper, Box, FormControl, InputLabel, MenuItem, Select} from '@mui/material';

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

const OurVoices = ({ footerContent, navbarItem }) => {
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


   const navbarItemTitles = navbarItem.filter((item) => item.language === lang).length > 0 ? navbarItem.filter((item) => item.language === lang).map((item) => item.title) : navbarItem.filter((item) => item.language === "en").map((item) => item.title)

  const navbarItemLinks = navbarItem.filter((item) => item.language === lang).length > 0 ? navbarItem.filter((item) => item.language === lang).map((item) => item.link) : navbarItem.filter((item) => item.language === "en").map((item) => item.link)

  
  return (
    <>
      <Head>
        <title>ABA: Our Voices</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />

      </Head>
      <Header titles={navbarItemTitles} links={navbarItemLinks} />
      <div style={{
        position: 'fixed',
        right: '0',
        zIndex: '100',
        marginTop: '2rem',
        marginRight: '1.5rem',
      }}>
                <Box sx={{ width: 100 }}>
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
  const navbarItem = await client.fetch(`*[_type == "navbarItem"]  | order(order asc)`)
   return {
     props: {
       footerContent,
        navbarItem,
       
     },
   }
}
  


export default OurVoices
