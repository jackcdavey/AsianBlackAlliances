import { Container } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { COLORS } from '../styling/colors.js';


const styles = {
    banner: {
        top: 0,
        left: 0,
        position: 'fixed',
        minWidth: '100vw',
        // height: '10vh',
        /* background: lightgreen; */
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 5,
        opacity: 0.95,
        backdropFilter: 'blur(10px)',
        minHeight: '10vh',
        backgroundColor: 'rgba(165, 214, 167, 150',
    },
    homeBanner: {
        top: 0,
        left: 0,
        position: 'fixed',
        minWidth: '100vw',
        minHeight: '20vh',
        /* background: lightgreen; */
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        opacity: 0.95,
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(165, 214, 167, 150',
    },
}

export default function Header() {
    const [lang, setLang] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
    };

    // function MobileNavigationToggle() {
    //     var x = document.getElementById("mobileLinks");
    //     if (x.style.display === "block") {
    //         x.style.display = "none";
    //     } else {
    //         x.style.display = "block";
    //     }
    // }

    return (
        <Container style={styles.banner as React.CSSProperties} id='banner' sx={{ backgroundColor: 'primary.main' }}>
            <a href='/'>
                <Image
                    src="/media/CustomAssets/ABAlogo.png"
                    layout='fill'
                    objectFit='contain'
                    alt="ABA Logo"
                    objectPosition='left'
                />
            </a>
            <div style={{ width: '80%', display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: "flex-end" }}>
                <div className='mobileNav'>
                    <div id='mobileLinks'>
                        <Link href='/historyOfCollaboration'>
                            <div className='navLink'>
                                <a>Contact & Collaboration</a>
                            </div>
                        </Link>
                        <Link href='/crossCulturalInfluences'>
                            <div className='navLink'>
                                <a> Cross Cultural Influences</a>
                            </div>
                        </Link>
                        <Link href={'/mythsCuriosity'}>
                            <div className='navLink'>
                                <a>Myths & Curiosity</a>
                            </div>
                        </Link>
                        <Link href='/ourVoices'>
                            <div className='navLink'>
                                <a>Our Voices</a>
                            </div>
                        </Link>
                    </div>
                    {/* <a href="javascript:void(0);" className="icon" onClick={MobileNavigationToggle}>
                        <i className="fa fa-bars"></i>
                    </a> */}
                </div>
                <div id='navBar' >
                    <Link href='/historyOfCollaboration'>
                        <div className='navLink'>
                            <a>Contact & Collaboration</a>
                        </div>
                    </Link>
                    <Link href='/crossCulturalInfluences'>
                        <div className='navLink'>
                            <a> Cross Cultural Influences</a>
                        </div>
                    </Link>
                    <Link href={'/mythsCuriosity'}>
                        <div className='navLink'>
                            <a>Myths & Curiosity</a>
                        </div>
                    </Link>
                    <Link href='/ourVoices'>
                        <div className='navLink'>
                            <a>Our Voices</a>
                        </div>
                    </Link>
                </div>
                {/* <div id='langSelect' >
                    <Box sx={{ wdth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={lang}
                                label="Language"
                                onChange={handleChange}
                                defaultValue='en'
                            >
                                <MenuItem value={'en'}>English</MenuItem>
                                <MenuItem value={'zh'}>Mandarin</MenuItem>
                                <MenuItem value={'vi'}>Vietnamese</MenuItem>
                                <MenuItem value={'ko'}>Korean</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
                </div> */}
            </div>


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

export const HomepageHeader = () => {
    const [lang, setLang] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
    };

    return (
        <Container style={styles.homeBanner as React.CSSProperties} id='banner' >
            <Container style={{ height: '100%', width: '100%', position: 'absolute', justifySelf: 'center', display: 'flex', flexDirection: 'column', textAlign: 'center', verticalAlign: 'bottom', alignItems: 'center' }}>
                {/* <a href='/'> */}
                {/* <Image
                        src="/media/CustomAssets/ABAlogo.png"
                        layout='fill'
                        objectFit='contain'
                        alt="ABA Logo"
                        objectPosition={'top'}
                        style={{
                            minWidth: '0 !important',
                            minHeight: '0 !important',
                            width: '50px !important',
                            height: '50px !important',
                        }}
                    /> */}
                <img
                    src="/media/CustomAssets/ABAlogohome.png"
                    alt="ABA Logo"
                    style={{
                        maxHeight: '100%',
                        width: 'auto',
                        objectFit: 'contain',

                    }}
                />
                {/* </a> */}

            </Container>
            {/* <Box sx={{ maxWidth: 120, flex: 1, marginLeft: 'auto' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={lang}
                        label="Language"
                        onChange={handleChange}
                        defaultValue='en'
                    >
                        <MenuItem value={'en'}>English</MenuItem>
                        <MenuItem value={'zh'}>Mandarin</MenuItem>
                        <MenuItem value={'vi'}>Vietnamese</MenuItem>
                        <MenuItem value={'ko'}>Korean</MenuItem>

                    </Select>
                </FormControl>
            </Box> */}




        </Container >
    )
}