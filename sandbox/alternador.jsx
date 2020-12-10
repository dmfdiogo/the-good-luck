import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Box, Typography, Toolbar, Button, IconButton, Hidden, ButtonGroup } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Hero from '../components/Hero'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Content from '../components/Content';
import MenuIcon from '@material-ui/icons/Menu';
import LandingDrawer from '../components/LandingDrawer';
import useLanguages from '../hooks/useLanguages';
import languages from '../Languages';

const useStyles = makeStyles((theme) => ({
    icon: {
        margin: theme.spacing(2),
    },
    appbar: {
        position: 'fixed',
        zIndex: 1301,
        boxShadow: 'none'
    },
    toolbar: {
        color: '#000',
        background: '#FFF',
        zIndex: theme.zIndex.modal + 1333,
    },
    navButtons: {
        flexGrow: 1,
        textAlign: 'right',
    },
    button: {
        margin: theme.spacing(1),
        "&:hover": {
            backgroundColor: 'transparent',
            color: theme.palette.secondary.main,
        },
    },
}));

export default function LandingPage() {
    const classes = useStyles();

    const { language, switchLanguage } = useLanguages();

    const [interpolation, setInterpolation] = useState(language.id === 'enUs' ? false : true);

    const [drawerState, setDrawerState] = useState(false);
    function handelOpenDrawer() {
        setDrawerState(!drawerState);
    }

    return (
        <>
            <AppBar className={classes.appbar}>
                <Toolbar className={classes.toolbar} >
                    <Logo />
                    <Typography variant="h6" color="inherit" noWrap>
                        {language.title}
                    </Typography>
                    <Box className={classes.navButtons}>
                        <Hidden smDown>
                            <Button className={classes.button} variant="text">{language.learn}</Button>
                            <Button className={classes.button} variant="text">{language.about}</Button>
                            <Button className={classes.button} variant="text">{language.articles}</Button>
                            <ButtonGroup disableElevation variant="outlined" color="secondary">
                                <Button
                                    variant={interpolation ? "contained" : "outlined"}
                                    onClick={() => {
                                        switchLanguage(languages.ptBr);
                                        setInterpolation(!interpolation);
                                    }}>
                                    BR
                                </Button>
                                <Button
                                    variant={!interpolation ? "contained" : "outlined"}
                                    onClick={() => {
                                        switchLanguage(languages.enUs);
                                        setInterpolation(!interpolation);
                                    }}
                                >
                                    EN
                                </Button>
                            </ButtonGroup>
                        </Hidden>
                        <Hidden mdUp>
                            <IconButton className={classes.button} edge="end" color="inherit" aria-label="menu">
                                <MenuIcon onClick={handelOpenDrawer} />
                            </IconButton>
                        </Hidden>
                    </Box>


                </Toolbar>
            </AppBar>
            <LandingDrawer drawerState={drawerState} setDrawerState={setDrawerState} />
            <Box>
                <Hero />
                <Cards />
                <Content />
            </Box>
            <Footer />
        </>
    );
}
