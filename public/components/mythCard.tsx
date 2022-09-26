import React from "react";
import MultiActionAreaCard from "./richLinkCard";
import Paper from "@mui/material/Paper";

interface MythCardProps {
    mythTitle: string;
    mythDesc: string;
    mythLink: string;
    mythLinkTitle: string;
}

const styles = {
    card: {
        width: "80%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0px 10%",
        gridTemplateAreas: ". .",
        borderRadius: "25px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        border: "1px solid black",
        margin: "1%",
        padding: "1%",

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


export default function MythCard({ mythTitle, mythDesc, mythLink, mythLinkTitle }: MythCardProps) {
    return (
        <div style={styles.card as React.CSSProperties}>
            <div style={styles.cardContent as React.CSSProperties}>
                <h2>{mythTitle}</h2>
                <h4>{mythDesc}</h4>
            </div>
            <div style={styles.cardContent as React.CSSProperties}>
                {/* Pass to card in future */}
                <MultiActionAreaCard />
                <a style={styles.linkTxt as React.CSSProperties} href={mythLink}>{mythLinkTitle}</a>
            </div>
        </div>
    );
}
