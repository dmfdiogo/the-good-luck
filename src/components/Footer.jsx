import { Box, Container, Link, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo'

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 6),
    },
    maw: {
        textAlign: 'center',
    },
}));

function Footer() {
    const classes = useStyles();

    return (
        <Container className={classes.footer}>
            <Box className={classes.maw}>
                <Logo />
            </Box>
            <Typography variant="h6" align="center" gutterBottom>
                The Good Luck
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                A sorte, sozinha, não depende de você. A Boa Sorte depende unicamente de você.
            </Typography>
            {/* Copyright */}
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    {`The Good Luck ${new Date().getFullYear()}.`}
                </Link>{ }
            </Typography>
        </Container>
    );
}

export default Footer;