import React from 'react';
import DwvComponent from "../UI/DWV/DwvComponent";
import './GraphInterStyle.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo, pink } from '@mui/material/colors';

// const theme = createTheme({
//     palette: {
//         primary: indigo,
//         secondary: pink,
//         neutral: pink
//     }
// });

const GraphInterPage = () => {
    return (
        // <ThemeProvider theme={theme}>
        <>
            <CssBaseline />
        <div className="GraphInterStyle">
            <DwvComponent />
        </div>
        </>
        // </ThemeProvider>
    );
};

export default GraphInterPage;
