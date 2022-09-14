import React from "react";
import MultiActionAreaCard from "./richLinkCard";
import Paper from "@mui/material/Paper";

interface MythCardProps {
    mythTitle: string;
    mythDesc: string;
    mythLink: string;
}

const styles = {
    card: {
        width: "70%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0px 10%",
        gridTemplateAreas: ". .",
        borderRadius: "25px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        border: "1px solid black",
        margin: "1%",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
};


export default function MythCard({ mythTitle, mythDesc, mythLink }: MythCardProps) {
    return (
        <div style={styles.card}>
            <div style={styles.cardContent}>
                <h1>{mythTitle}</h1>
                <h3>{mythDesc}</h3>
            </div>
            <div style={styles.cardContent}>
                <h1>{mythLink}</h1>
                {/* Pass to card in future */}
                <MultiActionAreaCard />
            </div>
        </div>
    );
}
