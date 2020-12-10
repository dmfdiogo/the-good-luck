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

const useStyles = makeStyles((theme) => ({
    icon: {
        margin: theme.spacing(2),
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

    const [drawerState, setDrawerState] = useState(false);
    function handelOpenDrawer() {
        setDrawerState(!drawerState);
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar className={classes.toolbar} >
                    <Logo />
                    <Typography variant="h6" color="inherit" noWrap>
                        The Good Luck
                    </Typography>
                    <Box className={classes.navButtons}>
                        <Hidden smDown>
                            <Button className={classes.button} variant="text">Learn</Button>
                            <Button className={classes.button} variant="text">About</Button>
                            <Button className={classes.button} variant="text">Articles</Button>
                            <ButtonGroup disableElevation variant="outlined" color="secondary">
                                <Button>BR</Button>
                                <Button>EN</Button>
                            </ButtonGroup>
                        </Hidden>
                        <IconButton className={classes.button} edge="end" color="inherit" aria-label="menu">
                            <MenuIcon onClick={handelOpenDrawer} />
                        </IconButton>
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
