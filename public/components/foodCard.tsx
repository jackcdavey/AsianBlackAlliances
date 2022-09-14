import React from "react";

interface FoodCardProps {
    chefName: string;
    chefDesc: string;
    dishName: string;
    dishDesc: string;
}

const styles = {
    card: {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // backgroundColor: "white",
        borderRadius: "25px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        // padding: "1%",
        border: "1px solid black",
        margin: "1%",
    },
};


export default function FoodCard({ chefName, chefDesc, dishName, dishDesc }: FoodCardProps) {
    return (
        <div style={styles.card}>
            <h1>{chefName}</h1>
            <h2>{chefDesc}</h2>
            <h3>{dishName}</h3>
            <h4>{dishDesc}</h4>
        </div>
    );
}
