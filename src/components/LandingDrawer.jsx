import { Drawer, Grid, List, ListItem, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: "100%",
        background: "white",
        zIndex: '0',
    },
    drawerList: {
        width: "60%",
        marginTop: 128,
        margin: "0 auto",
    },
    drawerListItem: {
        width: "100%",
        textAlign: "center",
        textTransform: "uppercase",
        padding: ".5em 0",
        fontSize: "1.25rem",
    },
    margin: {
        margin: theme.spacing(1),
    }
}));

// eslint-disable-next-line react/prop-types
function LandingDrawer({ drawerState, setDrawerState }) {
    const classes = useStyles();

    const AppbarButtons = ["Learn", "About", "Articles"];

    return (
        <Drawer
            anchor="right"
            open={drawerState}
            classes={{ paper: classes.drawer }}
        >
            <List className={classes.drawerList}>
                {AppbarButtons.map((button, index) => {
                    return (
                        <ListItem button divider key={index}>
                            <Typography variant="h5" className={classes.drawerListItem}>
                                {button}
                            </Typography>
                        </ListItem>
                    );
                })}
            </List>
            <Grid
                container
                direction="row"
                style={{ height: "20%" }}
                justify="center"
                alignItems="center"
            >
                <Grid item>
                    <FacebookIcon className={classes.margin} color="secondary" fontSize="large" />
                </Grid>
                <Grid item>
                    <InstagramIcon className={classes.margin} color="secondary" fontSize="large" />
                </Grid>
            </Grid>
        </Drawer>
    );
}

export default LandingDrawer;