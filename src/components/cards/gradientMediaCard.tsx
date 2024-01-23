import React from "react";


interface GradientMediaCardProps {
    imgSource?: string;
    imgAlt?: string;
    title?: string;
    content?: string;
    link?: string;
    useGradient?: boolean;
};

const converted = {
    ".gradientMediaCard": {
        backgroundColor: "#fff",
        borderRadius: "25px",
        boxShadow: "0.05rem 0.1rem 0.3rem -0.03rem rgba(0, 0, 0, 0.45)",
        paddingBottom: "0.5rem",
        backgroundImage:
            "linear-gradient(var(--card-gradient), white max(9.5rem, 27vh))",
        overflow: "hidden",
        maxWidth: "100%"
    },
    "#gradientMediaCardNoGradient": { "--card-gradient": "none !important" },
    ".gradientMediaCard :hover,\n :focus-within": {
        "--card-gradient": "#24a9d5 max(8.5rem, 20vh)"
    },
    ".gradientMediaCard> :last-child": { marginBottom: "0" },
    ".gradientMediaCard img": {
        borderRadius: "0.5rem 0.5rem 0 0",
        width: "100%",
        objectFit: "cover",
        maxHeight: "max(10rem, 30vh)",
        aspectRatio: "4/3"
    },
    ".gradientMediaCard h3": {
        fontSize: "1.25rem"
    },
    ".gradientMediaCard p": { marginLeft: "0.5rem", marginRight: "0.5rem" },
    ".gradientMediaCard a": { color: "inherit" }
}



export default function GradientMediaCard({ imgSource, imgAlt, title, content, link, useGradient }: GradientMediaCardProps) {

    // if (useGradient) {
    return (

        <div style={converted[".gradientMediaCard"]} >
            <a href={link} target="_blank">
                {imgSource &&
                    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                        <img style={converted[".gradientMediaCard img"] as React.CSSProperties} src={imgSource} alt={imgAlt} />
                    </div>
                }
                {title &&
                    <h3 style={{ paddingLeft: '0.5rem', margin: '1%' }}>{title}</h3>
                }
                {content &&
                    <p style={{ paddingLeft: '0.5rem', margin: "1%" }}>{content}</p>
                }
                {link && !content &&
                    <p style={{ paddingLeft: '0.5rem', margin: '1%' }}>{link}</p>
                }

            </a >
        </div>

    );

    // } else {
    //     return (
    //         <a href={link}>
    //             <div style={converted[".gradientMediaCard"]}>
    //                 {imgSource &&
    //                     <img src={imgSource} alt={imgAlt} />
    //                 }
    //                 {title &&
    //                     <h3><a href={link}>{title}</a></h3>
    //                 }
    //                 {/* If content exists, then display content, else display the link */}
    //                 {content &&
    //                     <p>{content}</p>
    //                 }
    //                 {link && !content &&
    //                     <p>{link}</p>
    //                 }

    //             </div>
    //         </a >
    //     );
    // }
}