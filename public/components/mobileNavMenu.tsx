import React from 'react';
import Button from '@mui/material/Button';

export default function MobileNavMenu() {

    // If the current target is #mobileNav, then toggle the class 'active'
    // on the <nav> element.
    return (
        <>
            <a className="open-nav" href="#mobileNav">
                <Button variant="contained">Open</Button>
            </a>
            <a className="close-nav" href="#">
                <Button variant="contained">Close</Button>
            </a>
            <div id='mobileNav' className='mobileNavWrap'>
                <h1>hi</h1>
            </div>
        </>
    )
}
