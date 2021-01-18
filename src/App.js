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

const theme = createMuiTheme({
    palette: {
        primary: primaryColor,
        secondary: secondaryColor,
    },
});

function App({ t }) {
  return (
    <div className="App">
        <MuiThemeProvider theme={theme}>
            <Router>
            <NavBar/>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + "/map"}>
                        kart.
                    </Route>
                    <Route path={process.env.PUBLIC_URL + "/house"}>
                        fint hus
                    </Route>
                    <Route path={process.env.PUBLIC_URL + "/"}>
                        <IntroductionPage/>
                    </Route>
                </Switch>
            </Router>
        </MuiThemeProvider>
    </div>
  );
}

export default withNamespaces()(App);
