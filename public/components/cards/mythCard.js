import React from "react";
import MultiActionAreaCard from "../richLinkCard";
import Paper from "@mui/material/Paper";

import { Button } from '@mui/material';


import dynamic from 'next/dynamic';
// import ReactTinyLink from 'react-tiny-link';
import TinyLinkPreview from '../tinyLinkPreview.js';

import { COLORS } from '../../styling/colors.js';


const styles = {
    cardWrap: {
        width: "90%",
        borderRadius: "25px",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        border: "3px solid " + COLORS.primary,
        // backgroundColor: COLORS.neutral,
        margin: "1%",
        padding: "2%",
        textAlign: "center",
        overflow: "hidden",
    },
    card: {
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "0px 10%",
        textAlign: "left",
    },
    cardContent: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "flex-start",
        fontSize: "0.8rem",

    },
    cardContent2: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        justifyContent: "flex-start",
        fontSize: "0.8rem",
        maxWidth: "100%",

    },linkTxt: {
        alignSelf: "flex-start",
        paddingTop: "1%",
        paddingLeft: "15%",
        maxWidth: "90%",
        textDecoration: "none",
        color: "black",
        fontSize: "0.7rem",
    },
};


export default function MythCard({ mythTitle, mythDesc, mythLink, mythLinkNote, mythLinkLabel }) {
    return (
        <Paper className="mythCard" style={styles.cardWrap}>

            <h2>{mythTitle}</h2>
            <div style={styles.card}>
                <div style={styles.cardContent}>
                    <p>{mythDesc}</p>
                </div>
                <div style={styles.cardContent2}>
                    {/* Pass to card in future */}
                    {mythLink && mythLink?.map((link, index) => (
                        <div style={{width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center', }}>
                            <Button variant="outlined" color="primary" href={mythLink[index]} target="_blank" rel="noopener noreferrer" style={{ marginLeft: '1rem', width: '50%', margin: 'auto', marginBottom: '5%' }} >
                                {/* If a mythLinkLabel exists, display here */}
                                {mythLinkLabel && mythLinkLabel[index] ? mythLinkLabel[index] : "More Info"}
                            </Button>
                            {/* If a mythLinkNote exists, display it as a p */}
                            {mythLinkNote && mythLinkNote[index] && (
                             <div style={{width: '100%', display: 'flex', flexDirection:'column', alignItems: 'center', }}>
                                    <p style={{ textAlign: 'center' }}>{mythLinkNote[index]}</p>
                                </div>
                            )}

                        </div>
                    ))}

                    {/* If there are no mythLinks, but there are mythLinkNotes, display them as a p */}
                    {!mythLink && mythLinkNote && mythLinkNote?.map((linkNote, index) => (
                        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
                            <p style={{ textAlign: 'center' }}>{mythLinkNote[index]}</p>
                        </div>
                    ))}
                    

                </div>
            </div>
        </Paper>
    );
}
