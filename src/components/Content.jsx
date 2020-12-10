import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

    return (
        <Box className={classes.content} >
            <Container maxWidth="md" >
                <Typography component="h1" variant="h2" align="center" color="secondary" gutterBottom>
                    The Good Luck
                </Typography>
                <Typography variant="h5" align="justify" color="textSecondary" paragraph>
                    With each passing year, the job market becomes more competitive. New specializations appear, new prerequisites to fill good vacancies, etc. But five, ten years ago, the scenario was of less intense competition, not least because professional qualifications were less demanding. A good curriculum with courses, postgraduate, MBA, exchanges and everything else that adds value to the professional is no longer enough in todays market. Not that technical skills are not important, but the market today seeks another type of skills: soft skills.
                </Typography>
                <Typography variant="h5" align="justify" color="textSecondary" paragraph>
                    Having this constant need for developinging your abilities, good jobs and opportunities ALWAYS show up, it is your duty to be prepared and able to ride the horse when it passes right in front of you. Just keep in mind the the difference between luck and the good luck is not something to rule out.
                </Typography>
                <Box className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="secondary" >
                                Keep reading
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container >
        </Box >
    );
}

export default Content;