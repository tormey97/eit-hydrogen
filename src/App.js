import './App.css';
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { withNamespaces } from 'react-i18next';
import secondaryColor from '@material-ui/core/colors/blueGrey';
import primaryColor from '@material-ui/core/colors/lightBlue';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import IntroductionPage from "./components/IntroductionPage";
import NavBar from "./components/NavBar";
import WorldMap from "./components/WorldMap";
import makeStyles from "@material-ui/core/styles/makeStyles";
import HouseIllustration from "./components/HouseIllustration";

const theme = createMuiTheme({
    palette: {
        primary: primaryColor,
        secondary: secondaryColor,
    },
});

const useStyles = makeStyles(theme => ({
    mapContainer: {
        height: "480px",
        backgroundColor: "#000"
    }
}));

function App({ t }) {
    const classes = useStyles();
  return (
    <div className="App">
            <Router>
            <NavBar/>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + "/map"}>
                        <div className={classes.mapContainer}>
                            <WorldMap/>
                        </div>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + "/house"}>
                        <HouseIllustration/>
                    </Route>
                    <Route path={process.env.PUBLIC_URL + "/"}>
                        <IntroductionPage/>
                    </Route>
                </Switch>
            </Router>
    </div>
  );
}

export default withNamespaces()(App);
