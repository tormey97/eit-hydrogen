import AppBar from "@material-ui/core/AppBar/AppBar";
import React from "react";
import {withNamespaces} from "react-i18next";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Button from "@material-ui/core/Button/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
}));

function NavigationBar() {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <AccessAlarmIcon/>
                </IconButton>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Hydrogen through the ages</Button>
                <Button color="inherit">Home</Button>
                <Button color="inherit">Home</Button>
            </Toolbar>
        </AppBar>
    );
}

export default withNamespaces()(NavigationBar);