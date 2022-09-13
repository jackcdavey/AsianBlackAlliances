import { Container } from '@mui/material';

export default function Footer() {
    return (
        <Container style={{ width: '100vw' }} id='footer' sx={{ backgroundColor: 'primary.main' }}>
            <a
                href="https://www.scu.edu"
                target="_blank"
                rel="noopener noreferrer"
            >
                SANTA CLARA UNIVERSITY 2022

                {/* Replace with SCU logo?
          <Image src="/mission.png" alt="SCU Logo" width={46} height={36} style={{ paddingLeft: 10 }} /> */}

            </a>
        </Container>
    )
}