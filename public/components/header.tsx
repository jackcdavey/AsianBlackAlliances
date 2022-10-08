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
        zIndex: 5,
        opacity: 0.95,
        backdropFilter: 'blur(10px)',
        minHeight: '80px',
    },
}

export default function Header() {
    return (
        <Container style={styles.banner as React.CSSProperties} id='banner' sx={{ backgroundColor: 'primary.main' }}>
            <a href='/' style={{ backgroundColor: 'red' }}>
                <Image
                    src="/media/CustomAssets/ABAlogo.png"
                    layout='fill'
                    objectFit='contain'
                    alt="ABA Logo"
                    objectPosition={'left'}
                />
            </a>
            {/* <div style={{ display: 'flex', paddingLeft: '20%' }}>

                <a href='/historyOfCollaboration'>
                    <div style={{ paddingRight: '1.5rem' }}>
                        <h2>History</h2>
                    </div>
                </a>

                <div style={{ paddingRight: '1.5rem' }}>
                    <Link href='/crossCulturalInfluences'>
                        <h2>Culture</h2>
                    </Link>
                </div>
                <div style={{ paddingRight: '1.5rem' }}>
                    <Link href='/mythsCuriosity'>
                        <h2>Myths</h2>
                    </Link>
                </div>
            </div> */}

        </Container>
    )
}