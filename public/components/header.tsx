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
import MobileNavMenu from './mobileNavMenu';

const styles = {
    banner: {
        top: 0,
        left: 0,
        position: 'fixed',
        minWidth: '100vw',
        // height: '10vh',
        /* background: lightgreen; */
        display: 'flex',
        // flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 5,
        opacity: 0.95,
        backdropFilter: 'blur(10px)',
        // height: '10vh',
    },
    homeBanner: {
        top: 0,
        left: 0,
        position: 'fixed',
        minWidth: '100vw',
        minHeight: '10vh',
        /* background: lightgreen; */
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
        opacity: 0.95,
        backdropFilter: 'blur(10px)',
    },
}

export default function Header() {
    const [lang, setLang] = React.useState('en');
    var x = '';
    if (typeof window !== "undefined") {
        console.log("Local Lang Choice:" + localStorage.getItem('langChoice'));
        x = localStorage.getItem('langChoice') || 'eng';
        // setLang(x);
    }


    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
        if (typeof window !== "undefined") {
            localStorage.setItem("langChoice", event.target.value);
            console.log("Set local language to: " + event.target.value);
        }
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
        <Container style={styles.banner as React.CSSProperties} className='banner'>
            <a href='/' style={{ backgroundColor: 'rgba(195, 224, 197, 100)' }}>
                <div style={{
                    height: '100%',
                    // position: 'fixed',
                    // justifySelf: 'flex-start',
                    display: 'flex',
                    flexDirection: 'column',
                    verticalAlign: 'bottom',
                    alignItems: 'center',
                    // backgroundColor: 'rgba(195, 224, 197, 100)',
                }}>
                    {/* <Image
                    src="/media/CustomAssets/ABAlogo.png"
                    layout='fill'
                    objectFit='contain'
                    alt="ABA Logo"
                    objectPosition='left'
                /> */}
                    <img
                        src="/media/CustomAssets/ABAlogo.png"
                        alt="ABA Logo"
                        style={{ maxHeight: '7rem', width: 'auto', display: 'block' }}
                    />
                </div>
            </a>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <div style={{ maxWidth: '100%', display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: "center", alignSelf: 'center' }}>
                    {/* <div>
                    <MobileNavMenu />
                </div> */}
                    <div className='navBar' >
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
                        <Link href='/localResources'>
                            <div className='navLink'>
                                <a>Local Resources</a>
                            </div>
                        </Link>
                        <Link href='/discussion'>
                            <div className='navLink'>
                                <a>Contact Us!</a>
                            </div>
                        </Link>
                    </div>

                </div>
            </div>
            <div id='langSelect' >
                <Box sx={{ wdth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" >
                            {lang}
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={lang}
                            label="Language"
                            onChange={handleChange}
                        >
                            <MenuItem value={'en'}>English</MenuItem>
                            <MenuItem value={'zh'}>Chinese - Simplified</MenuItem>
                            <MenuItem value={'zh-tw'}>Chinese - Traditional</MenuItem>
                            <MenuItem value={'zh-cn'}>Cantonese</MenuItem>
                            <MenuItem value={'ko'}>Korean</MenuItem>
                            <MenuItem value={'ja'}>Japanse</MenuItem>
                            <MenuItem value={'vi'}>Vietnamese</MenuItem>
                            <MenuItem value={'tl'}>Tagalog</MenuItem>
                            <MenuItem value={'km'}>Khmer</MenuItem>


                        </Select>
                    </FormControl>
                </Box>
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
    const [lang, setLang] = React.useState('zh');

    if (typeof window !== "undefined") {
        console.log("Local Lang Choice:" + localStorage.getItem('langChoice'));
        const x = localStorage.getItem('langChoice') || 'eng';
        // setLang(x);
    }

    const handleChange = (event: SelectChangeEvent) => {
        setLang(event.target.value as string);
        if (typeof window !== "undefined") {
            localStorage.setItem("langChoice", event.target.value);
            console.log("Set local language to: " + event.target.value);
        }
    };

    return (
        <Container style={styles.homeBanner as React.CSSProperties} id='banner' >
            <Container style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                justifySelf: 'center',
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                verticalAlign: 'bottom',
                alignItems: 'center'
            }}>
                <img
                    src="/media/CustomAssets/ABAlogohome2.png"
                    alt="ABA Logo"
                    className='homeLogoLong'
                    style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        // height: 'auto',
                        objectFit: 'contain',
                        objectPosition: 'center',
                    }} />
                <img
                    src="/media/CustomAssets/ABAlogohome.png"
                    alt="ABA Logo"
                    className='homeLogoTall'
                    style={{
                        maxHeight: '100%',
                        maxWidth: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center',
                    }}
                />
                <div id='langSelect' >
                    {/* <Box sx={{ wdth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label" >
                                {lang}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={lang}
                                label="Language"
                                onChange={handleChange}
                            >
                                <MenuItem value={'en'}>English</MenuItem>
                                <MenuItem value={'zh'}>Chinese - Simplified</MenuItem>
                                <MenuItem value={'zh-tw'}>Chinese - Traditional</MenuItem>
                                <MenuItem value={'zh-cn'}>Cantonese</MenuItem>
                                <MenuItem value={'ko'}>Korean</MenuItem>
                                <MenuItem value={'ja'}>Japanse</MenuItem>
                                <MenuItem value={'vi'}>Vietnamese</MenuItem>
                                <MenuItem value={'tl'}>Tagalog</MenuItem>
                                <MenuItem value={'km'}>Khmer</MenuItem>


                            </Select>
                        </FormControl>
                    </Box> */}
                </div>
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