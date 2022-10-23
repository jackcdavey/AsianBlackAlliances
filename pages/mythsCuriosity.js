// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { createClient } from 'next-sanity'

import { useState } from 'react';

import Header from '../public/components/header';
import Footer from '../public/components/footer.js';
import MythCard from '../public/components/cards/mythCard.js';

import Layout from '../public/components/layout';

import RoadtripMap from '../public/components/roadtripMap';


import { Tooltip } from '../public/components/tooltip';

import { Button, Paper } from '@mui/material'

import dynamic from 'next/dynamic'
import { COLORS } from '../public/styling/colors';
const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });
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



export default function MythsCuriosity({ myth, footerContent, mythCuriosityHeader, roadtripStop }) {
  const [tooltipContent, setTooltipContent] = useState("");

  const titles = roadtripStop.map((stop) => stop.title);
  const xPositions = roadtripStop.map((stop) => stop.xPos);
  const yPositions = roadtripStop.map((stop) => stop.yPos);
  const body = roadtripStop.map((stop) => stop.body);
  const link = roadtripStop.map((stop) => stop.link);
  const colors = roadtripStop.map((stop) => stop.color);

  
  return (
    <>
      <Head>
        <title>ABA: Myths and Curiosity</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />


      </Head>

      <Header />
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
              <h1>{mythCuriosityHeader[1]?.title}</h1>
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
              <h2>{mythCuriosityHeader[1]?.desc}</h2>
            </a>
          </Paper>
          <div className='collapsed-content' id='myths'>

            <div className='mythCols'>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                
              <h2>Myths about Asians</h2>
                <div className='mythCollapsed'>
                  
                {myth.map((myth) => (
                myth.group === 'asian' ? (
                  <MythCard key={myth._id}
                    mythTitle={myth?.title}
                    mythDesc={myth?.body}
                    mythLink={myth?.link}
                    mythLinkLabel={myth?.linkLabel}
                    mythLinkNote={myth?.linkNote} />
                ) 
                : null
                ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2>Myths about Blacks</h2>
              <div className='mythCollapsed'>
                  {myth.map((myth) => (
                    myth.group === 'black' ? (
                      <MythCard key={myth._id}
                    mythTitle={myth?.title}
                    mythDesc={myth?.body}
                    mythLink={myth?.link}
                    mythLinkLabel={myth?.linkLabel}
                    mythLinkNote={myth?.linkNote} />
                ) 
                : null
                ))}
                </div>
                </div>
            </div>
            </div>
          <Paper className='collapsed'  sx={styles.theRadius}>
            <a href='#curiosity' className='collapsed-desc'>
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
                <h1>{mythCuriosityHeader[0]?.title}</h1>
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
              <h2>{mythCuriosityHeader[0]?.desc}</h2>
            </a>
          </Paper>
          <div className='collapsed-content' id='curiosity'>
          {/* <Tooltip tooltipText="Washington, DC"> */}
            {/* <h1>Be Curious on Your Next Roadtrip!</h1> */}
          {/* </Tooltip> */}
            <p style={{ textAlign: "center", maxWidth: '70%' }}>As racial minorities, we do not see our histories taught in formal education. Therefore, we need to self educate with true and comprehensive information. When you plan your next family vacation, consider building in a couple of such lessons to learn about ourselves and each other.</p>

          
            {/* <RoadtripMap setTooltipContent={setTooltipContent}/> */}
            {/* <ReactTooltip effect='solid' >{tooltipContent}</ReactTooltip> */}
            <div style={{ height: '500px', width: '90%', margin: "2rem", borderRadius: "25px", overflow: 'hidden'}}>
              <NewMap xPoints={xPositions} yPoints={yPositions} titles={titles} bodies={body} links={link} colors={colors} />
            </div>
            <h2 style={{marginTop: 0, marginBottom: '2rem', textAlign: "center"}}>Please click on a marker to view nearby resources.</h2>

            <Paper style={{
              margin: '2rem',
              width: '90%',
              padding: '2rem',
              borderRadius: '25px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h2 style={{ textAlign: 'center', margin: '0.2rem' }}>Building a National Museum of API Americans </h2>
                    
                    <h4 style={{margin: '0,2rem'}}>As a nation, there is no national museum to document and learn about the API Americans’ contributions to the United States. We need to have a place to learn how the API’s histories are an integral part of the American story. Please follow the development of the potential to build a National Museum of API Americans. </h4>
                    <p>On June 13 2022 President Joe Biden signed into law H.R. 3525 which establishes a Commission to Study the Potential Creation of a National Museum of Asian Pacific American History and Culture in Washington, D.C. The commission must report recommendations for a plan of action for the establishment and maintenance of a National Museum of Asian Pacific American History and Culture in Washington, DC. Furthermore they must develop a fundraising plan to support the establishment, operation, and maintenance of the museum through public contributions. In relation to this plan they must  obtain an independent review of this fundraising plan, including an analysis of the resources necessary to fund the construction of the museum and its operations and maintenance in perpetuity without reliance on federal funds. Lastly they must submit a legislative plan of action to establish and construct the museum.</p>
                    <Button
                    variant="contained"
                    href="https://www.whitehouse.gov/briefing-room/legislation/2022/06/13/bill-signed-h-r-3525/#:~:text=signed into law%3A-,H.R.,and Culture in Washington%2C D.C"
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
                      Whitehouse.gov
                    </Button>

                  </div>
                  <div style={{ width: '25%'}}>
                  
                    </div>
                  </div>
                </div>
            </Paper>

            </div>
        </div>


      </Layout>
      <Footer link={
          footerContent[0]?.link
        } body={
          footerContent[0]?.body
        } />
    </>
  )
}


export async function getStaticProps() {
  const myth = await client.fetch(`*[_type == "myth" && language == "en"] | order(order asc)`);
  const footerContent = await client.fetch(`*[_type == "footerContent"]  | order(order asc)`)
  const mythCuriosityHeader = await client.fetch(`*[_type == "mythCuriosityHeader"]  | order(order asc)`)
  const roadtripStop = await client.fetch(`*[_type == "roadtripStop"]  | order(order asc)`)


  return {
    props: {
      myth,
      footerContent,
      mythCuriosityHeader,
      roadtripStop,
    },
    revalidate: 10,

  };
}