'use client'
// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react';

import { createClient } from 'next-sanity'

import Link from 'next/link'
// import { useTheme } from '@mui/material/styles';
import { Container, Grid, Paper, Box, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { HomepageHeader } from '../components/header';
import Footer from '../components/footer.js';
import Layout from '../components/layout';
import GradientMediaCard from '../components/cards/gradientMediaCard';



import Carousel from 'react-material-ui-carousel'

import dynamic from 'next/dynamic';


import { COLORS } from '../styles/colors.js';

import Decor from '../components/generateDecorPositions.js';

// import wave from '../public/wave.svg';

import imageUrlBuilder from '@sanity/image-url'


// var languageSelection = 'en';


const BioCard = dynamic(
  () => import("../components/cards/bioCard"),
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

function Home({ homepageTile, homepageDescription, bio, footerContent, homepageCarousel, contributor }) {
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
      var languageSelection = localStorage.getItem('langChoice') || 'en';
      if (languageSelection != lang)
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

  const contributorL = contributor.filter((contributor) => contributor.language == lang).length > 0 ? contributor.filter((contributor) => contributor.language == lang) : contributor.filter((contributor) => contributor.language == 'en');

  console.log("Contributor: " + contributorL[0]);


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

      <div style={{
        position: 'fixed',
        right: '0',
        zIndex: '10',
        marginTop: '3.2rem',
        marginRight: '1.5rem',
      }}>
        <Box sx={{ width: 100 }}>
          <FormControl fullWidth >
            <InputLabel id="demo-simple-select-label" style={{ color: 'rgb(86, 129, 39)' }} >
              {lang}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={lang}
              label="Language"
              onChange={handleChange}
              style={{ color: 'rgb(86, 129, 39)' }}
            >
              <MenuItem value={'en'}>English</MenuItem>
              <MenuItem value={'zh-tw'}>繁體中文</MenuItem>
              <MenuItem value={'zh-cn'}>粵語</MenuItem>
              <MenuItem value={'zh'}>簡體中文</MenuItem>
              <MenuItem value={'ko'}>한국어</MenuItem>
              <MenuItem value={'vi'}>Tiếng Việt</MenuItem>
              <MenuItem value={'ja'}>日本語</MenuItem>




            </Select>
          </FormControl>
        </Box>
      </div>
      <HomepageHeader title={
        lang == 'en' && 'Asian & Black Alliance' ||
        lang == 'zh' && '亚裔与黑人联盟' ||
        lang == 'zh-tw' && '亞裔與黑人聯盟' ||
        lang == 'zh-cn' && '亞裔同黑人聯盟' ||
        lang == 'ko' && '아시안과 흑인 동맹' ||
        lang == 'ja' && 'アジアン&ブラックアライアンス' ||
        lang == 'vi' && ' Liên minh Châu Á & Châu phi'
      } />
      <Layout title={"Asian and Black Alliances"} description={""}>
        {/* style={{ backgroundImage: `url(${wave.src})` }} */}





        <div className="homeBody" >


          <div style={{ width: '100vw', maxWidth: '70rem', overflow: 'hidden', paddingTop: '3rem' }}>
            <Carousel className="carousel" animation='slide' sx={{ margin: '5%', overflow: 'hidden' }} autoPlay={false} navButtonsAlwaysVisible={true} >
              {homepageCarouselL?.map((homepageCarouselL) => (
                <Paper
                  key={homepageCarouselL._id}
                  sx={{ padding: '5%', paddingLeft: '2%', borderRadius: '25px', display: 'flex', alignItems: 'center', overflow: 'hidden', justifyContent: 'flex-start', marginLeft: '4rem', marginRight: '4rem' }}>
                  <div style={{ width: "30%", maxHeight: '35vh' }}>
                    <img src={urlFor(homepageCarouselL.image).url()} alt={homepageCarousel.name} style={{ maxWidth: '100%' }} />
                  </div>
                  <div style={{ width: "70%", display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '1rem' }}>
                    <h2 style={{ margin: "0" }}>{homepageCarouselL?.title}</h2>
                    <p style={{ margin: "0" }}>{homepageCarouselL?.description}</p>
                  </div>

                  {homepageCarouselL?.link &&
                    <Button
                      variant='contained'
                      target='_blank'
                      style={{ marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', textAlign: 'center' }}
                      href={homepageCarouselL.link}>
                      {homepageCarouselL.linkLabel}
                    </Button>
                  }
                </Paper>
              ))}

            </Carousel>
          </div>


          <div style={{ marginBottom: '1vh', textAlign: 'center', paddingLeft: '5%', paddingRight: '5%', maxWidth: '60rem' }}>
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
                    <h2 style={{ margin: 0 }}>{homepageTile?.title}</h2>
                    <p>{homepageTile?.description}</p>
                  </Paper>
                </a>
              </Box>
            ))}
          </Box>
          <div style={{ textAlign: 'left', width: "100vw", maxWidth: '60rem', padding: '5% 0 0 5%' }}>
            <h1 className="bioHeader" style={{ margin: "3rem 0 0 0" }}>
              {lang == 'en' ? "About the Team" : lang == 'zh' ? "关于我们" : lang == 'zh-tw' ? "關於我們" : lang == 'zh-cn' ? "關於我們" : lang == 'ko' ? "팀 소개" : lang == 'ja' ? "チームについて" : lang == 'vi' ? "Về nhóm" : lang == 'tl' ? "Tungkol sa koponan" : lang == 'km' ? "អំពីក្រុមហ៊ុន" : "About the Team"}
            </h1>
          </div>
          <div className='bioSection'>
            {bioL.map((bio) => (
              <div
                className='bioCol'
                key={bio._id}
                style={{ width: '25%' }}>
                <BioCard key={bio._id} name={bio?.name} desc={bio?.body} image={urlFor(bio?.image)} link={bio?.link} />
              </div>
            ))}
            <div className='bioCol' style={{ width: '25%' }}>
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '25px',
                boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
                paddingBottom: '0.5rem',
                backgroundImage:
                  "linear-gradient(var(--card-gradient), white max(9.5rem, 27vh))",
                overflow: "hidden",
                minWidth: "10rem",
                marginTop: "1rem",
                marginLeft: "0.5rem",
                padding: "0.5rem",
                minWidth: "100%",
              }} id='bioCard'>
                {/* <h3 style={{ textAlign: 'center' }}>
                  {lang == 'en' ? "Contributors & Translators" : lang == 'zh' ? "贡献者和翻译者" : lang == 'zh-tw' ? "貢獻者和翻譯者" : lang == 'zh-cn' ? "貢獻者和翻譯者" : lang == 'ko' ? "기여자 및 번역가" : lang == 'ja' ? "寄稿者と翻訳者" : lang == 'vi' ? "Những người đóng góp và dịch thuật" : lang == 'tl' ? "Mga nag-aambag at Mga Tagasalin" : lang == 'km' ? "អ្នករួមចំណែកនិងអ្នកបកប្រែ" : "Contributors & Translators"}
              </h3> */}

                {contributorL.map((contributor) => (
                  <>
                    <a href={contributor?.link} target="_blank">
                      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', textAlign: 'right', width: '100%', marginTop: '1rem' }}>

                        {contributor?.image &&
                          <div style={{ width: "30%", display: "flex", flexDirection: "column", aspectRatio: '1/1' }}>
                            <img style={{
                              borderRadius: "50%",
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              aspectRatio: '1/1',
                              marginLeft: '20%',

                            }}
                              src={urlFor(contributor.image)}
                              alt={contributor.name}
                            />

                          </div>
                        }
                        <div style={{ width: '100%' }}>
                          <h4 style={{ margin: "0", marginRight: '15%', justifyContent: 'center' }}>{contributor?.name}</h4>
                        </div>


                      </div>
                      <p style={{ textAlign: 'center', justifyItems: 'flex-end' }}>{contributor.body}</p>
                    </a>
                    <div style={{ width: '100%', height: '1px', backgroundColor: 'lightgray', margin: '0.5rem 0' }}></div>
                  </>

                ))}



              </div>
            </div>
          </div>
          <div style={{ marginBottom: '1vh', textAlign: 'center', paddingTop: '5%', paddingLeft: '5%', paddingRight: '5%' }}>
            {homepageThanksL}
          </div>
        </div>
        <Footer id="homeFooter" link={footerContentL[0]?.link} body={footerContentL[0]?.body} />
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
  const contributor = await client.fetch(`*[_type == "contributor"]  | order(order asc)`)

  return {
    props: {
      homepageTile,
      homepageDescription,
      bio,
      footerContent,
      homepageCarousel,
      contributor,
    },
    revalidate: 5,
  };
}
export default Home
