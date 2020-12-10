import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

function Hero() {
    const classes = useStyles();

    return (
        <Box className={classes.heroContent} >
            <Container maxWidth="sm" >
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    The Good Luck
            </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Accomplish more with the GOOD LUCK by your side
            </Typography>
                <Box className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="secondary" >
                                Learn more
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="secondary">
                                Articles
                        </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </Box >
    );
}

export default Hero;