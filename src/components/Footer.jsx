import { Box, Container, Link, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './Logo'
import useLanguages from '../hooks/useLanguages';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(4, 6),
    },
    logoBox: {
        textAlign: 'center',
    },
}));

function Footer() {
    const classes = useStyles();
    const { language } = useLanguages();

    return (
        <Container className={classes.footer}>
            <Box className={classes.logoBox}>
                <Logo />
            </Box>
            <Typography variant="h6" align="center" gutterBottom>
                {language.title}
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                {language.footerSlogan}
            </Typography>
            {/* Copyright */}
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    {`${language.title} ${new Date().getFullYear()}.`}
                </Link>{ }
            </Typography>
        </Container>
    );
}

export default Footer;