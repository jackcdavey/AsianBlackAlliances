import React from "react";

import Paper from "@mui/material/Paper";

interface FoodCardProps {
    chefName: string;
    chefDesc: string;
    dishName: string;
    dishDesc: string;
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
        marginBottom: "5%",
    },
    cardContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
};


export default function FoodCard({ chefName, chefDesc, dishName, dishDesc }: FoodCardProps) {
    return (
        <div style={styles.card as React.CSSProperties}>
            <div style={styles.cardContent as React.CSSProperties}>
                <h1>{chefName}</h1>
                <h3>{chefDesc}</h3>
            </div>
            <div style={styles.cardContent as React.CSSProperties}>
                <h1>{dishName}</h1>
                <h3>{dishDesc}</h3>
            </div>
        </div>
    );
}
