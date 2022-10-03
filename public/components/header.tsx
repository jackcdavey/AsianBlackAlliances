import { Container } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const styles = {
    banner: {
        top: 0,
        left: 0,
        position: 'fixed',
        minWidth: '100vw',
        height: '10vh',
        /* background: lightgreen; */
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        zIndex: 100,
    },
}

export default function Header() {
    return (
        <Container style={styles.banner as React.CSSProperties} id='banner' sx={{ backgroundColor: 'primary.main' }}>
            <Link href='/'><a>
                <Image
                    src="/media/CustomAssets/ABAlogo.png"
                    layout='fill'
                    objectFit='contain'
                    alt="ABA Logo"
                    objectPosition={'left'}
                />
                {/* <h1>Asian &#38; Black Alliances</h1> */}
            </a></Link>
        </Container>
    )
}