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

import { createClient } from 'next-sanity'


const styles = {
    banner: {
        top: 0,
        left: 0,
        position: 'fixed',
        minWidth: '100vw',
        maxHeight: '7rem',
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
        minHeight: '10rem',
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

const client = createClient({
    projectId: 'hiagtp2f',
    dataset: 'production',
    apiVersion: '2022-10-03',
    useCdn: false,
});

interface HeaderProps {
    titles?: string[];
    links?: string[];
}

export default function Header({ titles, links }: HeaderProps) {
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


    return (
        <Container style={styles.banner as React.CSSProperties} className='banner'>
            <a href='/' >
                <div style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    verticalAlign: 'bottom',
                    alignItems: 'center',
                    marginLeft: '-0.5rem',
                }}>

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
                width: '100%',
            }}>
                <div style={{ maxWidth: '100%', display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: "center", alignSelf: 'center' }}>

                    <div className='navBar' >
                        {titles && links && titles.map((title, index) => (
                            <Link href={links[index]} key={index}>
                                <div className='navLink'>
                                    <a>{title}</a>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <input id="menu-toggle" type="checkbox" />
                    <label className='menu-button-container' htmlFor="menu-toggle">
                        <div className='menu-button'></div>
                    </label>
                    <ul className="menu">
                        {titles && links && titles.map((title, index) => (
                            <li key={index}>
                                <Link href={links[index]}>
                                    <a>{title}</a>
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

            {/* <div style={{
                minWidth: '13rem',
                minHeight: '100%',
                // backgroundColor: 'red'
            }} /> */}


        </Container>
    )
}

interface HomeHeaderProps {
    title?: string;
}

export const HomepageHeader = ({ title }: HomeHeaderProps) => {
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
                <div className='homeLogoLong' style={{ maxHeight: '100%', maxWidth: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <img
                        src="/media/CustomAssets/ABAlogo.png"
                        alt="ABA Logo"
                        style={{
                            maxHeight: '100%',
                            maxWidth: '100%',
                            // height: 'auto',
                            objectFit: 'contain',
                            objectPosition: 'center',
                        }} />
                    <h1 style={{ textAlign: 'center', paddingTop: '0.5rem', fontSize: '3.5rem' }}>
                        {title ||
                            'Asian & Black Alliance'}

                    </h1>
                </div>
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

            </Container>
        </Container >
    )
}


export async function getStaticProps() {
    const navbarItem = await client.fetch(`*[_type == "navbarItem"] | order(order asc)`);

    return {
        props: {
            navbarItem,
        },
    };
}