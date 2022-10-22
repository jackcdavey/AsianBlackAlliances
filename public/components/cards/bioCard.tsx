import React from "react";

import Paper from "@mui/material/Paper";



interface BioCardProps {
    name?: string;
    desc?: string;
    image?: string;
    link?: string;
}


const converted = {
    ".gradientMediaCard": {
        // "--card-gradient": "rgb(86, 129, 39), rgb(229, 124, 27)",
        // "--card-blend-mode": "overlay",
        backgroundColor: "#fff",
        borderRadius: "25px",
        boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
        paddingBottom: "0.5rem",
        backgroundImage:
            "linear-gradient(var(--card-gradient), white max(9.5rem, 27vh))",
        overflow: "hidden",

    },

    "#gradientMediaCardNoGradient": { "--card-gradient": "none !important" },
    ".gradientMediaCard :hover,\n :focus-within": {
        "--card-gradient": "#24a9d5 max(8.5rem, 20vh)"
    },
    ".gradientMediaCard> :last-child": { marginBottom: "0" },
    ".gradientMediaCard img": {
        borderRadius: "50%",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        aspectRatio: "1/1",
        padding: "10%"
    },
    ".gradientMediaCard h3": {
        fontSize: "1.25rem"
    },
    ".gradientMediaCard p": { marginLeft: "0.5rem", marginRight: "0.5rem" },
    ".gradientMediaCard a": { color: "inherit" }
}


export default function BioCard({ name, desc, image, link }: BioCardProps) {
    return (
        <div style={converted[".gradientMediaCard"]} id="bioCard">
            <a href={link}>
                {image &&
                    <div style={{ width: "100%", display: "flex", flexDirection: "column", aspectRatio: '1/1' }}>
                        <img style={converted[".gradientMediaCard img"] as React.CSSProperties} src={image} alt={name} />
                    </div>
                }
                {name &&
                    <h3 style={{ paddingLeft: '0.5rem', margin: '1%' }}>{name}</h3>
                }
                {desc &&
                    <p style={{ paddingLeft: '0.5rem', margin: "1%" }}>{desc}</p>
                }
                {link && !desc &&
                    <p style={{ paddingLeft: '0.5rem', margin: '1%' }}>{link}</p>
                }

            </a >
        </div>
    );
}
