import React from 'react'
// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

import { createClient } from 'next-sanity'

// import styles from '../styles/Home.module.css'
import Header from '../public/components/header'
import Footer from '../public/components/footer.js'
import Layout from '../public/components/layout'

import dynamic from 'next/dynamic'


import Grid from '@mui/material/Grid';

import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from 'react-simple-maps';

import {
  Timeline,
  TimelineItem,
  TimelineDot,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent
} from '@mui/lab';

import { Button, Paper, Typography } from '@mui/material';
import CollaborationMap from '../public/components/collaborationMap.js'

const ReactTooltip = dynamic(() => import('react-tooltip'), { ssr: false });

// import Tooltip from '@mui/material/Tooltip'

// const ReactToolTip = dynamic(() => import('react-tooltip'), { ssr : false });


const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});

const styles = {
  theRadius: {
    borderRadius: '25px',
  },
}


function HistoryOfCollaboration({ timelinePoint, footerContent, historyResources, collaborationTag }) {
    
    const [tooltipContent, setTooltipContent] = useState("");
  return (
    <>
      <Head>  
        <title>ABA: Contact & Collaboration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />
        <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />


      </Head>
      <Header />
      <Layout title={'Contact & Collaboration'} description={' '}>
        <div id='body'>
          <h1 style={{margin:  0}}>Contact & Collaboration</h1>
          <span style={{width: '70%', textAlign: 'center'}}>
                <p>In this interactive page, you will find historically significant Black-Asian interactions. Each event builds on each other to create continuous possibilities for a sustainable relationship. </p>
          </span>
          <CollaborationMap setTooltipContent={setTooltipContent}/>
          <ReactTooltip effect='solid' uuid='mytt' >{tooltipContent}</ReactTooltip>
          <h3 style={{fontSize: '1rem', marginBottom: 0}}>Please click on either marker to see a timeline of events. </h3>
          

          <div className='collapsed-content' id='asia'>
          {/* display all collaboration tags that have section = asia in a timeline */}
          <Timeline position="alternate">
              {collaborationTag.map((tag) => (
                tag.section === 'asia' &&
              <TimelineItem key={collaborationTag._id}>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="text.secondary">
                    {tag.date}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent> 
                  <Paper elevation={3}  className="collabTag" sx={{borderRadius: '25px !important'}}>
                    <Typography variant="h2" component="span" fontSize='1.4rem' sx={{ textAlign: 'left' }}>
                      {tag.title}
                    </Typography>
                    <Typography>{tag.body}</Typography>
                    {/* display each link for this tag in a button */}
                    {tag.link.map((link) => (
                      <Button variant="contained" href={link} target="_blank" rel="noopener noreferrer" sx={{ m: 1, borderRadius: "25px", maxHeight: '25%' }}>
                        {/* if there is a link label display, otherwise "More Info" */}
                        {tag.linkLabel[tag.link.indexOf(link)] ? tag.linkLabel[tag.link.indexOf(link)] : "More Info"}
                      </Button>
                    ))}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
          </div>


          <div className='collapsed-content' id='northAmerica'>
          {/* display all collaboration tags that have section = northAmerica in a timeline */}
          <Timeline position="alternate">
              {collaborationTag.map((tag) => (
                tag.section === 'northamerica' &&
              <TimelineItem key={collaborationTag._id}>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="text.secondary" style={{fontSize: '1.2rem'}}>
                    {tag.date}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className="collabTag" sx={{borderRadius: '25px !important'}}>
                    <Typography variant="h2" component="span" fontSize='1.4rem' sx={{ textAlign: 'left' }}>
                      {tag.title}
                    </Typography>
                    <Typography>{tag.body}</Typography>
                    {/* display each link for this tag in a button */}
                    {tag.link.map((link) => (
                      <Button variant="contained" href={link} target="_blank" rel="noopener noreferrer" sx={{ m: 1, borderRadius: "25px", maxHeight: '25%' }}>
                        {/* if there is a link label display, otherwise "More Info" */}
                        {tag.linkLabel[tag.link.indexOf(link)] ? tag.linkLabel[tag.link.indexOf(link)] : "More Info"}
                        
                      </Button>
                    ))}
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
          </div>


              
          <Timeline position="alternate" sx={{maxWidth: "100vw", display: "none"}}>
            {timelinePoint?.map((timelinePoint) => (
              //if the timelinePoint has no date, insert a timeline separator
              timelinePoint?.date == null ? (
                <span
                  key={timelinePoint._id}
                  style={{ textAlign: "center"}}>
                  <h2>{timelinePoint?.body}</h2>
                </span>
              ) : (
              
              <TimelineItem key={timelinePoint._id} sx={{ margin: '2%' }}>
                <TimelineOppositeContent color="text.secondary" fontSize="1.2rem" display='flex' flexDirection="column">
                      {timelinePoint?.date}
                      {timelinePoint?.citation && (
                        timelinePoint?.citation?.map((citation) => (
                          <Button variant="contained" color="primary" href={timelinePoint?.citation[timelinePoint?.citation.indexOf(citation)]} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem', width: '50%', margin: 'auto', marginBottom: '5%' }} >
                            <div style={{textAlign: 'center' }}>
                            {/* Display the linkNote if it exists, otherwise display "More Info" */}
                              {timelinePoint?.linkNote && timelinePoint?.linkNote[timelinePoint?.citation.indexOf(citation)] ? timelinePoint?.linkNote[timelinePoint?.citation.indexOf(citation)] : "More Info"}
                              </div>
                          </Button>
                        ))
                      )}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent style={{overflow: 'hidden'}}>
                  <Typography variant="h6" component="span" fontWeight="500">
                    {timelinePoint?.title}
                  </Typography>
                  <Typography>
                    {timelinePoint?.body}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            )))}
          </Timeline>

          {historyResources?.map((historyResource) => (
            <div key={historyResource._id} style={{ margin: '2%' }}>
              <h1 style={{ textAlign: 'center', width: "100vw", paddingLeft: '5%' }}>{historyResource?.title}</h1>
              <div style={{textAlign: 'center', paddingLeft: '5%', paddingRight: '5%', alignItems: "center"}}> 
                {historyResource?.body}
              </div>
              {/* Display each link and linkLabel, display a button */}
              {/* Create a centered grid 2 columns wide, with repeating rows */}
              <Grid container style={{margin: 'auto', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
              
              {historyResource?.link && (
                historyResource?.link?.map((link) => (
                  <Button variant="contained" color="primary" href={historyResource?.link[historyResource?.link.indexOf(link)]} target="_blank" rel="noopener noreferrer" style={{  width: '40%', margin: '2%', borderRadius: '25px' }} >
                    <div style={{textAlign: 'center' }}>
                    {/* Display the linkLabel if it exists, otherwise display "More Info" */}
                      {historyResource?.linkLabel && historyResource?.linkLabel[historyResource?.link.indexOf(link)] ? historyResource?.linkLabel[historyResource?.link.indexOf(link)] : "More Info"}
                    </div>
                  </Button>
                ))
                )}
              </Grid>
            </div>
          ))}
        </div>
        
        
        

      </Layout>

      <Footer
      link={
          footerContent[0]?.link
        } body={
          footerContent[0]?.body
        }/>
    </>
  )
}

export async function getStaticProps() {
  const timelinePoint = await client.fetch(`*[_type == "timelinePoint"] | order(order asc)`)
  const footerContent = await client.fetch(`*[_type == "footerContent"]  | order(order asc)`)
  const historyResources = await client.fetch(`*[_type == "historyResources"]  | order(order asc)`)
  const collaborationTag = await client.fetch(`*[_type == "collaborationTag"]  | order(order asc)`)

  return {
    props: {
      timelinePoint,
      footerContent,
      historyResources,
      collaborationTag,
    },
    revalidate: 10,
  };
}

export default HistoryOfCollaboration
