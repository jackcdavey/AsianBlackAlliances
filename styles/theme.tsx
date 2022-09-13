import * as React from 'react';
import { createTheme } from "@mui/material/styles";
import useMediaQuery from '@mui/material/useMediaQuery';

import { amber, lightGreen } from '@mui/material/colors';


// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

// export const theme = React.useMemo(
//     () =>
//         createTheme({
//             palette: {
//                 mode: prefersDarkMode ? 'dark' : 'light',
//                 primary: {
//                     main: "#00ebc7",
//                     // greenish
//                 },
//                 secondary: {
//                     main: "#ff5470",
//                     // pinkish
//                 },
//             },
//         }),
//     [prefersDarkMode]
// );

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundColor: "#f5f5f5",
                },
            }
        }
    },
    palette: {
        primary: {
            main: "#c5e1a5",
            // lightGreen[200],, 
        },
        secondary: {
            main: "#ffe57f",
            // amber[A100],
        },
    },
});
