import { Container } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const styles = {
    banner: {
        top: 0,
        left: 0,
        position: 'fixed',
        minWidth: '100vw',
        height: '10vh',
        /* background: lightgreen; */
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 5,
        opacity: 0.95,
        backdropFilter: 'blur(10px)',
        minHeight: '80px',
    },
}

export default function Header() {
    const [lang, setLang] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
    };

    return (
        <Container style={styles.banner as React.CSSProperties} id='banner' sx={{ backgroundColor: 'primary.main' }}>
            <div style={{ backgroundColor: 'red' }}>
                <a href='/'>
                    <Image
                        src="/media/CustomAssets/ABAlogo.png"
                        layout='fill'
                        objectFit='contain'
                        alt="ABA Logo"
                        objectPosition={'left'}
                    />
                </a>
            </div>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lang}
                        label="Language"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>English</MenuItem>

                    </Select>
                </FormControl>
            </Box>


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