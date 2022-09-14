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
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "0px 10%",
        gridTemplateAreas: ". .",
        borderRadius: "25px",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        border: "1px solid black",
        margin: "1%",
    },
};


export default function FoodCard({ chefName, chefDesc, dishName, dishDesc }: FoodCardProps) {
    return (
        <div style={styles.card}>
            <div>
                <h1>{chefName}</h1>
                <h3>{chefDesc}</h3>
            </div>
            <div>
                <h1>{dishName}</h1>
                <h3>{dishDesc}</h3>
            </div>
        </div>
    );
}
