import React, { createContext, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core/styles/";
import theme from './Theme';
import { LanguageProvider } from './context/LanguageContext';
import languages from './Languages';
import LandingPage from './pages/LandingPage';


function App() {

    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <LanguageProvider language={languages.enUs}>
                    <LandingPage />
                </LanguageProvider>
            </ThemeProvider>
        </>
    );
}

export default App;
