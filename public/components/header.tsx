import { Container } from '@mui/material';
import Link from 'next/link';
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
    },
}

export default function Header() {
    return (
        <Container style={styles.banner as React.CSSProperties} id='banner' sx={{ backgroundColor: 'primary.main' }}>
            <Link href='/'><a><h1>Asian &#38; Black Alliances</h1></a></Link>
        </Container>
    )
}