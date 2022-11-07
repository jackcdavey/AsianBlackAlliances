import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { createClient } from 'next-sanity'

import { Button, Paper } from '@mui/material';

import { useForm, ValidationError } from '@formspree/react';

import Layout from "../public/components/layout";
import Header from "../public/components/header";
import Footer from "../public/components/footer.js";


const client = createClient({
  projectId: 'hiagtp2f',
  dataset: 'production',
  apiVersion: '2022-10-03',
  useCdn: false,
});

export default function LocalResources({ footerContent, localResources }) {
    // const states = localResources.map((state) => state.state);
    // add all unique states to an array
    const states = [...new Set(localResources.map((state) => state.state))];
    console.log(states);

    return (
        <>
            <Head>
                <title>ABA: Discussion</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.typekit.net/hco7ora.css" />

            </Head>
            <Header />
            <Layout title='ABA: Discussion' description=' '>
                <div id='body'>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '50px' }}>
                            {/* Map each state, and list all links with that state */}
                            {states.map((state) => (
                                <Paper style={{width: '90vw', paddingLeft: '1rem',paddingTop: '1rem', marginBottom: '2rem', borderRadius: '25px'}}>

                                <div>
                                    <h2 style={{margin: 0}}>{state}</h2>
                                    {localResources.map((resource) => (
                                        <div>
                                            {resource.state === state ? (
                                                <div style={{paddingBottom: '2rem'}}>
                                                    <p style={{margin: 0}}>{resource.city}</p>
                                                    <h3 style={{margin: 0}}>{resource.name}</h3>
                                                    <a href={resource.link} target="_blank" >{resource.link}</a>
                                                </div>
                                            ) : null}
                                        </div>
                                    ))}
                                    </div>
                                                            </Paper>

                            ))}

                            

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
    const localResources = await client.fetch(`*[_type == "localResource"]`)

    return {
        props: {
            footerContent,
            localResources,
        },
    };
}

