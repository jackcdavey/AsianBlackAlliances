'use client'

import React from "react";
import Paper from "@mui/material/Paper";
import { Button } from '@mui/material';
import { v4 } from "uuid";

import styles from "../../styles/mythsCuriosity.module.css";



 

export default function MythCard({ mythTitle, mythDesc, mythLink, mythLinkNote, mythLinkLabel }) {
    return (
        <Paper className={styles.mythCard} sx={{borderRadius: '25px'}} key={v4()}>

            <h2 style={{marginTop: 0}}>{mythTitle}</h2>
            <div className="card">
                <div className="cardContent">
                    <p>{mythDesc}</p>
                </div>
                <div className="cardContent2">
                    {/* Pass to card in future */}
                    {mythLink && mythLink?.map((link, index) => (
                        <div
                            key={index}
                            style={{
                                maxWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'
                            }}
                        >
                            <Button variant="contained" color="primary" href={mythLink[index]} target="_blank" rel="noopener noreferrer" sx={{borderRadius: '25px'}} style={{ marginLeft: '1rem', width: '80%', margin: 'auto', marginBottom: '5%', textAlign: 'center' }} >
                                {/* If a mythLinkLabel exists, display here */}
                                {mythLinkLabel && mythLinkLabel[index] ? mythLinkLabel[index] : "More Info"}
                            </Button>
                            {/* If a mythLinkNote exists, display it as a p */}
                            {mythLinkNote && mythLinkNote[index] && (
                             <div style={{width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center', paddingRight: '2rem' }}>
                                    <p style={{ textAlign: 'center', maxWidth: '100%' }}>{mythLinkNote[index]}</p>
                                </div>
                            )}

                        </div>
                    ))}

                    {/* If there are no mythLinks, but there are mythLinkNotes, display them as a p */}
                    {!mythLink && mythLinkNote && mythLinkNote?.map((linkNote, index) => (
                        <div
                            key={index}
                            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                            <p style={{ textAlign: 'center' }}>{mythLinkNote[index]}</p>
                        </div>
                    ))}
                    

                </div>
            </div>
        </Paper>
    );
}
