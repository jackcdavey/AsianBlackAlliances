import React from 'react'
// import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import { useState } from 'react'

import { createClient } from 'next-sanity'

import styles from '../styles/Home.module.css'
import Header from '../public/components/header'
import Footer from '../public/components/footer'
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

// import Tooltip from '@mui/material/Tooltip'

// const ReactToolTip = dynamic(() => import('react-tooltip'), { ssr : false });


const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});


function HistoryOfCollaboration({ timelinePoint }) {
    
    const [tooltipContent, setTooltipContent] = useState("");
  return (
    <>
      <Head>  
        <title>ABA: History of Collaboration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout title={'History of Collaboration'} description={' '}>
        <Header />
        <div id='body'>
          <CollaborationMap setTooltipContent={setTooltipContent} />
          {/* <Tooltip className='card' title="add">{tooltipContent}</Tooltip> */}
          <h1>History of Collaboration</h1>
          <span style={{width: '70%', textAlign: 'center'}}>
                <p>This page Integrating Cultural and Political Transnational Historical Significant Events on Asian and Black Interactions. These events are not positive or negative. Rather, each builds on the others as continuation of possibilities to build a sustainable relationality between these two heterogeneous groups  </p>
          </span>
              
          <Timeline position="alternate">
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
                          <Button variant="outlined" color="primary" href={timelinePoint?.citation} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem', width: '50%', margin: 'auto' }} >More Info</Button>
                        ))
                      )}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="h6" component="span">
                    {timelinePoint?.title}
                  </Typography>
                  <Typography>
                    {timelinePoint?.body}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            )))}
          </Timeline>
        </div>

      </Layout>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const timelinePoint = await client.fetch(`*[_type == "timelinePoint"] | order(order asc)`)

  return {
    props: {
      timelinePoint
    }
  };
}

export default HistoryOfCollaboration
