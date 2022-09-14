import { Container } from '@mui/material';
import Link from 'next/link';

export default function Header() {
    return (
        <Container id='banner' sx={{ backgroundColor: 'primary.main' }}>
            <Link href='/'><a><h1>Asian &#38; Black Alliances</h1></a></Link>
        </Container>
    )
}