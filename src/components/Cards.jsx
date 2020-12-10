import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image1 from '../assets/images/a1.jpg';
import Image2 from '../assets/images/a2.jpg';
import Image3 from '../assets/images/a3.jpg';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
}));


function Cards() {
    const classes = useStyles();
    const cards = [
        {
            image: Image1,
            heading: "Seed",
            content: "Have you ever heard the saying 'you reap what you sow' ?"
        },
        {
            image: Image2,
            heading: "Marathon",
            content: "Life is a marathon. There are miles of lots of effort, wear, difficulty and endurance."
        },
        {
            image: Image3,
            heading: "Preparation",
            content: "No pain, no gain."
        },];
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={card.image}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.heading}
                                </Typography>
                                <Typography>
                                    {card.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="secondary">
                                    Learn more
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Cards