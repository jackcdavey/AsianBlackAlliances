import { Paper } from '@mui/material';

import Link from 'next/link';


interface LinkWithImageProps {
    link?: string;
    image?: string;
    title?: string;
    description?: string;
}



export default function LinkWithImage({ link, image, title, description }: LinkWithImageProps) {

    const styles = {
        cardWrapper: {
            maxWidth: '30vw',
            borderRadius: '25px',
            marginTop: '5%',
        },
        card: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: '25px',
        },
        cardText: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginLeft: '1rem',
            marginRight: '1rem',
            maxWidth: '66%',
            maxHeight: '30vh',
            overflow: 'auto',
            overflowX: 'hidden',
            fontSize: '0.8rem',
        },
        linkText: {
            // textDecoration: 'none',

            maxWidth: '66%',
            whiteSpace: 'nowrap',
        },
    }


    return (
        <a href={link}>
            <Paper style={styles.cardWrapper as React.CSSProperties}>
                <div style={styles.card as React.CSSProperties}>

                    {image &&
                        <img
                            src={image}
                            alt={title}
                            width={'30%'}
                        />
                    }
                    <div style={styles.cardText as React.CSSProperties}>
                        <h2>{title}</h2>
                        <div style={styles.linkText as React.CSSProperties}>{link}</div>
                        <p>{description}</p>
                    </div>

                </div>
            </Paper>
        </a>
    )
}