import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../styles/theme';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <CssBaseline />
        <Component {...pageProps} />
        <Analytics />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp
