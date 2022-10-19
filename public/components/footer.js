import { Container } from '@mui/material';

export default function Footer({ body, link }) {
    return (
        <a href={link} target="_blank">
        <Container id='footer' sx={{ backgroundColor: 'primary.main' }}>
            <p>{body}</p>
        </Container>
        </a>
    )
}

