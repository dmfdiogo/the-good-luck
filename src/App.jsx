import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from "@material-ui/core/styles/";
import theme from './Theme';
import LandingPage from './pages/LandingPage'

function App() {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <LandingPage />
            </ThemeProvider>
        </>
    );
}

export default App;
