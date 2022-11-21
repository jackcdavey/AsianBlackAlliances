// import type { NextPage } from 'next'
import Head from 'next/head'

import { createClient } from 'next-sanity'

import { useState } from 'react';

import Header from '../public/components/header';
import Footer from '../public/components/footer.js';
import MythCard from '../public/components/cards/mythCard.js';

import Layout from '../public/components/layout';

import { Button, Paper, Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


import dynamic from 'next/dynamic';

const NewMap = dynamic(() => import('../public/components/newRoadtripMap.js'), { ssr: false });

// import NewMap from '../public/components/newRoadtripMap.js';

const styles = {
  theRadius: {
    borderRadius: '25px',
  },
}

const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});




export default function MythsCuriosity({ myth, footerContent, mythCuriosityHeader, roadtripStop, navbarItem, curiosityNote, curiosityIntro }) {



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


  // const titles = roadtripStop.map((stop) => stop.title);
  // Add all titles of with language == lang to the titles array. If there are no titles in the language, add the english version
  

  const curiosityNoteL = curiosityNote.filter((note) => note.language === lang).length > 0 ? curiosityNote.filter((note) => note.language === lang) : curiosityNote.filter((note) => note.language === 'en');


  const curiosityIntroL = curiosityIntro.filter((intro) => intro.language === lang).length > 0 ? curiosityIntro.filter((intro) => intro.language === lang) : curiosityIntro.filter((intro) => intro.language === 'en');
  // const curiosityIntroL = curiosityIntro.filter((intro) => intro.language === 'en');

  console.log("Curiosity intro: " + JSON.stringify(curiosityIntroL));

  // const curiosityIntroL = curiosityIntro[1];
  // const curiosityIntroL = curiosityIntro[0]

  // console.log("Curiosity introo: " + curiosityIntroL[0].intro);
  // console.log("xPositionsL: " + xPositionsL);
  // console.log("yPositionsL: " + yPositionsL);
  // console.log("bodyL: " + bodyL);
  // console.log("linkL: " + linkL);
  // console.log("colorsL: " + colorsL);
  // console.log("allCitiesL: " + allCitiesL);
  // console.log("citiesL: " + citiesL);
  


  
  // const mythSectionHeader = mythCuriosityHeader.find((header) => header.section === "mythSection" && header.language === lang).title
  // If the mythSectionHeader is available in the selected language, use it. Otherwise, use the english version.
  const mythSectionHeader = mythCuriosityHeader.find((header) => header.section === "mythSection" && header.language === lang) ? mythCuriosityHeader.find((header) => header.section === "mythSection" && header.language === lang).title : mythCuriosityHeader.find((header) => header.section === "mythSection" && header.language === "en").title
  const mythSectionDesc = mythCuriosityHeader.find((header) => header.section === "mythSection" && header.language === lang) ? mythCuriosityHeader.find((header) => header.section === "mythSection" && header.language === lang).desc : mythCuriosityHeader.find((header) => header.section === "mythSection" && header.language === "en").desc

  const curiositySectionHeader = mythCuriosityHeader.find((header) => header.section === "curiositySection" && header.language === lang) ? mythCuriosityHeader.find((header) => header.section === "curiositySection" && header.language === lang).title : mythCuriosityHeader.find((header) => header.section === "curiositySection" && header.language === "en").title
  const curiositySectionDesc = mythCuriosityHeader.find((header) => header.section === "curiositySection" && header.language === lang) ? mythCuriosityHeader.find((header) => header.section === "curiositySection" && header.language === lang).desc : mythCuriosityHeader.find((header) => header.section === "curiositySection" && header.language === "en").desc

 
// Add all myths with group == asian and language == lang to the asianMyths array. If there are no myths in the selected language, add the english version.
  const asianMyths = myth.filter((myth) => myth.group === "asian" && myth.language === lang).length > 0 ? myth.filter((myth) => myth.group === "asian" && myth.language === lang) : myth.filter((myth) => myth.group === "asian" && myth.language === "en")

  console.log("asian myths: " + asianMyths.length);

  const blackMyths = myth.filter((myth) => myth.group === "black" && myth.language === lang).length > 0 ? myth.filter((myth) => myth.group === "black" && myth.language === lang) : myth.filter((myth) => myth.group === "black" && myth.language === "en")




const titlesL = roadtripStop.filter((stop) => stop.language === lang).length > 0 ? roadtripStop.filter((stop) => stop.language === lang).map((stop) => stop.title) : roadtripStop.filter((stop) => stop.language === 'en').map((stop) => stop.title);

  const xPositionsL = roadtripStop.filter((stop) => stop.language === lang).length > 0 ? roadtripStop.filter((stop) => stop.language === lang).map((stop) => stop.xPos) : roadtripStop.filter((stop) => stop.language === 'en').map((stop) => stop.xPos);

  const yPositionsL = roadtripStop.filter((stop) => stop.language === lang).length > 0 ? roadtripStop.filter((stop) => stop.language === lang).map((stop) => stop.yPos) : roadtripStop.filter((stop) => stop.language === 'en').map((stop) => stop.yPos);

  const bodyL = roadtripStop.filter((stop) => stop.language === lang).length > 0 ? roadtripStop.filter((stop) => stop.language === lang).map((stop) => stop.body) : roadtripStop.filter((stop) => stop.language === 'en').map((stop) => stop.body);
  const linkL = roadtripStop.filter((stop) => stop.language === lang).length > 0 ? roadtripStop.filter((stop) => stop.language === lang).map((stop) => stop.link) : roadtripStop.filter((stop) => stop.language === 'en').map((stop) => stop.link);
  const colorsL = roadtripStop.filter((stop) => stop.language === lang).length > 0 ? roadtripStop.filter((stop) => stop.language === lang).map((stop) => stop.color) : roadtripStop.filter((stop) => stop.language === 'en').map((stop) => stop.color);
  const allCitiesL = roadtripStop.filter((stop) => stop.language === lang).length > 0 ? roadtripStop.filter((stop) => stop.language === lang).map((stop) => stop.city) : roadtripStop.filter((stop) => stop.language === 'en').map((stop) => stop.city);
  // Map all unique cities into an array
  const citiesL = [...new Set(allCitiesL)];

  if (roadtripStop.map((stop) => stop.language === lang).length > 0) {
    console.log("FUCK" + roadtripStop.map((stop) => stop.language === lang).length);
    console.log("not fuck" + asianMyths.length)
    console.log("Ci" + citiesL.length)
  }


  console.log("xPositionsL: " + xPositionsL.length);
  console.log("yPositionsL: " + yPositionsL.length);
  console.log("all Cities: " + allCitiesL.length);








  const footerContentL = footerContent.filter((footerContent) => footerContent.language == lang).length > 0 ? footerContent.filter((footerContent) => footerContent.language == lang) : footerContent.filter((footerContent) => footerContent.language == 'en');

  const navbarItemTitles = navbarItem.filter((item) => item.language === lang).length > 0 ? navbarItem.filter((item) => item.language === lang).map((item) => item.title) : navbarItem.filter((item) => item.language === "en").map((item) => item.title)

  const navbarItemLinks = navbarItem.filter((item) => item.language === lang).length > 0 ? navbarItem.filter((item) => item.language === lang).map((item) => item.link) : navbarItem.filter((item) => item.language === "en").map((item) => item.link)


  
  return (
    <>
      <Head>
        <title>ABA: Myths and Curiosity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />
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
                            <MenuItem value={'zh-tw'}>繁體中文</MenuItem>
                            <MenuItem value={'zh-cn'}>粵語</MenuItem>
                            <MenuItem value={'zh'}>簡體中文</MenuItem>
                            <MenuItem value={'ko'}>한국어</MenuItem>
                            <MenuItem value={'vi'}>Tiếng Việt</MenuItem>
                            <MenuItem value={'ja'}>にほんご</MenuItem>
                             
                              


                        </Select>
                    </FormControl>
                </Box>
            </div>
      <Layout title='ABA: Myths and Curiosity' description=' '>
        <div id='body'>

          {/* <h1> Myths &#38; Curiosity</h1> */}
          <Paper className='collapsed' sx={styles.theRadius}>
            <a href='#myths' className='collapsed-desc'>
              {/* Display the first item in mythsCuriosityHeader */}

              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', maxHeight: '4rem', width: '100%'}}>
                <div style={{maxWidth: '50%'}}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ paddingTop: '1rem' }}
                    className='cultureDecor'
                  />
                  </div>
                <h1>{mythSectionHeader}</h1>
                <div style={{maxWidth: '50%'}}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ WebkitTransform: 'scaleX(-1)', paddingTop: '1rem' }}
                    className='cultureDecor'
                    />
                  </div>

              </div>
              <h2>{mythSectionDesc}</h2>
            </a>
          </Paper>
          <div className='collapsed-content' id='myths'>

            <div className='mythCols'>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
                <h2>{
                  lang == 'en' && 'Asian Myths' ||
                  lang == 'zh-tw' && '亞洲神話' ||
                  lang == 'zh-cn' && '亚洲神话' ||
                  lang == 'zh' && '亞洲神話' ||
                  lang == 'ko' && '아시아 신화' ||
                  lang == 'vi' && 'Thần thoại châu Á' ||
                  lang == 'ja' && 'アジア神話'
                  }</h2>
                <div className='mythCollapsed'>
                  
                  {asianMyths.map((myth) => (
                  <MythCard key={myth._id}
                    mythTitle={myth?.title}
                    mythDesc={myth?.body}
                    mythLink={myth?.link}
                    mythLinkLabel={myth?.linkLabel}
                    mythLinkNote={myth?.linkNote} />
                ) )}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>{
                  lang == 'en' && 'Black Myths' ||
                  lang == 'zh-tw' && '黑人神話' ||
                  lang == 'zh-cn' && '黑人神话' ||
                  lang == 'zh' && '黑人神話' ||
                  lang == 'ko' && '블랙 신화' ||
                  lang == 'vi' && 'Thần thoại người Mỹ' ||
                  lang == 'ja' && '黒人神話'
                  }</h2>
              <div className='mythCollapsed'>
                  {blackMyths.map((myth) => (
                 
                      <MythCard key={myth._id}
                    mythTitle={myth?.title}
                    mythDesc={myth?.body}
                    mythLink={myth?.link}
                    mythLinkLabel={myth?.linkLabel}
                    mythLinkNote={myth?.linkNote} />
                ) )}
                </div>
                </div>
            </div>
            </div>
          <Paper className='collapsed'  sx={styles.theRadius}>
            <a href='#curiosity'  className='collapsed-desc' >
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', maxHeight: '4rem', width: '100%'}}>
                <div style={{maxWidth: '50%'}}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ paddingTop: '1rem' }}
                    className='cultureDecor'
                  />
                  </div>
                <h1>{curiositySectionHeader}</h1>
                <div style={{maxWidth: '50%'}}>
                <img
                  src='/media/CustomAssets/vineasset.png'
                    alt='vine'
                    width={300}
                    height={80}
                    style={{ WebkitTransform: 'scaleX(-1)', paddingTop: '1rem' }}
                    className='cultureDecor'

                    />
                  </div>

              </div>
              <h2>{curiositySectionDesc}</h2>
            </a>
          </Paper>
          {/* className= 'collapsed-content' */}
          <div className= 'curiosityMapWrap' id='curiosity'> 
          {/* <Tooltip tooltipText="Washington, DC"> */}
            {/* <h1>Be Curious on Your Next Roadtrip!</h1> */}
            {/* </Tooltip> */}
            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', overflowX: 'hidden'}}>
              <p style={{ textAlign: "center", maxWidth: '90%', margin: 0}}>{curiosityIntroL[0].intro}</p>
            </div>

          
            {/* <RoadtripMap setTooltipContent={setTooltipContent}/> */}
            {/* <ReactTooltip effect='solid' >{tooltipContent}</ReactTooltip> */}
            <div style={{ height: '25rem', width: '100%', borderRadius: "25px", overflow: 'hidden', display:'flex', flexDirection: 'column', justifyContent: 'center',  margin: '1rem', paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>
              <NewMap xPoints={xPositionsL} yPoints={yPositionsL} titles={titlesL} bodies={bodyL} links={linkL} colors={colorsL} cities={citiesL} allCities={allCitiesL} key={new Date().getTime()}/>
            </div>
            <h3 style={{ marginTop: 0, marginBottom: '2rem', marginLeft: '2rem', marginRight: '2rem', textAlign: "center" }}>{ curiosityIntroL[0].prompt}</h3>

            {curiosityNoteL.map((note) => (
            <Paper id={note._id} style={{
              margin: '2rem',
              width: '90%',
              padding: '2rem',
              borderRadius: '25px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                      <h2 style={{ textAlign: 'center', margin: '0.2rem' }}>{note.title}</h2>
                    
                    <h4 style={{margin: '0.2rem', textAlign: 'center'}}>{note.subtitle} </h4>
                      <p style={{ textAlign: 'center' }}>{note.body}</p>
                    <Button
                    variant="contained"
                    href={note?.link[0]}
                    target="_blank"
                      rel="noopener noreferrer"
                      label="Learn More"
                    style={{
                      margin: '1rem',
                      maxWidth: '200px',
                      height: '3rem',
                      borderRadius: '25px',
                      textAlign: 'center',
                    }}
                    >
                      {note.linkLabel[0]}
                    </Button>

                  </div>
                  <div style={{ width: '25%'}}>
                  
                    </div>
                  </div>
                </div>
              </Paper>
            ))}

            </div>
        </div>


      </Layout>
      <Footer link={
          footerContent[0]?.link
        } body={
          // If the footer body is available in the selected language, use it. Otherwise, use the English version
          footerContent.filter((content) => content.language === lang)[0]?.body || footerContent[0]?.body
          
        } />
    </>
  )
}


export async function getStaticProps() {
  const myth = await client.fetch(`*[_type == "myth"] | order(order asc)`);
  const footerContent = await client.fetch(`*[_type == "footerContent"]  | order(order asc)`)
  const mythCuriosityHeader = await client.fetch(`*[_type == "mythCuriosityHeader"] | order(order asc)`)
  const roadtripStop = await client.fetch(`*[_type == "roadtripStop"]  | order(order asc)`)
  const navbarItem = await client.fetch(`*[_type == "navbarItem"]  | order(order asc)`)
  const curiosityNote = await client.fetch(`*[_type == "curiosityNote"]  | order(order asc)`)
  const curiosityIntro = await client.fetch(`*[_type == "curiosityIntro"]  | order(order asc)`)


  return {
    props: {
      myth,
      footerContent,
      mythCuriosityHeader,
      roadtripStop,
      navbarItem,
      curiosityNote,
      curiosityIntro
    },
    revalidate: 10,

  };
}