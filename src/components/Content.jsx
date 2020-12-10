import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useLanguages from '../hooks/useLanguages';

const useStyles = makeStyles((theme) => ({

    content: {
        backgroundColor: '#F6F6F6',
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

function Content() {
    const classes = useStyles();

    const { language } = useLanguages();

    return (
        <Box className={classes.content} >
            <Container maxWidth="md" >
                <Typography component="h1" variant="h2" align="center" color="secondary" gutterBottom>
                    {language.title}
                </Typography>
                <Typography variant="h5" align="justify" color="textSecondary" paragraph>
                    {language.contentParagraph1}
                </Typography>
                <Typography variant="h5" align="justify" color="textSecondary" paragraph>
                    {language.contentParagraph2}
                </Typography>
                <Box className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="secondary" >
                                {language.keepReading}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </Box >
    );
}

export default Content;