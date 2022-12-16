import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import * as serviceWorkerRegistration from './components/UI/DWV/serviceWorkerRegistration'
import { createTheme } from '@mui/material/styles';
import {ThemeProvider} from "@mui/styles";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: React.CSSProperties['color'];
        };
    }

    interface Palette {
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
        neutral: PaletteOptions['primary'];
    }

    interface PaletteColor {
        darker?: string;
    }
    interface SimplePaletteColorOptions {
        darker?: string;
    }
    interface ThemeOptions {
        status: {
            danger: React.CSSProperties['color'];
        };
    }
}


const theme = createTheme({
    status: {
        danger: '#EA0000',
    },
    palette: {
        primary: {
            main: '#6cc',
        },
        neutral: {
            main: '#39acac',

        },
    },
});


const store = setupStore();


ReactDOM.render(
    <ThemeProvider theme={theme}>

    <Provider store={store}>
        <App />
    </Provider>
    </ThemeProvider>,

document.getElementById('root')
);

serviceWorkerRegistration.register();


