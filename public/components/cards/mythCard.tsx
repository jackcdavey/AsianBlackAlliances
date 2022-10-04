import React from "react";
import MultiActionAreaCard from "../richLinkCard";
import Paper from "@mui/material/Paper";

interface MythCardProps {
    mythTitle: string;
    mythDesc: string;
    mythLink?: string;
    mythLinkNote: string;
}

const styles = {
    cardWrap: {
        width: "90%",
        borderRadius: "25px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        border: "1px solid black",
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
        alignItems: "center",
        justifyContent: "center",

    }, linkTxt: {
        alignSelf: "flex-start",
        paddingTop: "1%",
        paddingLeft: "15%",
        maxWidth: "90%",
        textDecoration: "none",
        color: "black",
        fontSize: "0.7rem",
    },
};


export default function MythCard({ mythTitle, mythDesc, mythLink, mythLinkNote }: MythCardProps) {
    return (
        <div className="mythCard" style={styles.cardWrap as React.CSSProperties}>
            <h4>{mythTitle}</h4>
            <div style={styles.card as React.CSSProperties}>
                <div style={styles.cardContent as React.CSSProperties}>
                    <p>{mythDesc}</p>
                </div>
                <div style={styles.cardContent as React.CSSProperties}>
                    {/* Pass to card in future */}
                    {mythLink &&
                        <>
                            <MultiActionAreaCard />
                            <a style={styles.linkTxt as React.CSSProperties} href={mythLink}>{mythLinkNote}</a>
                        </>
                    }
                </div>
            </div>
        </div>
    );
}
