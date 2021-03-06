import React from "react";
import {withNamespaces} from "react-i18next";
import Typography from "@material-ui/core/Typography/Typography";
import methane1 from "../assets/gifs/methane1.gif"
import methane2 from "../assets/gifs/methane2.gif"
import methane3 from "../assets/gifs/methane3.gif"
import methane4 from "../assets/gifs/methane4.gif"
import methane5 from "../assets/gifs/methane5.gif"
import methane6 from "../assets/gifs/methane6.gif"
import electrolysis1 from "../assets/gifs/electrolysis1.gif"
import electrolysis2 from "../assets/gifs/electrolysis2.gif"
import electrolysis3 from "../assets/gifs/electrolysis3.gif"
import hydrogen1 from "../assets/hydrogen1.png"
import hydrogen2 from "../assets/hydrogen2.png"
import MapDialog from "./MapDialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider/Divider";
import Pagination from "@material-ui/lab/Pagination/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem/PaginationItem";
import EducationalGif from "./EducationalGif";
import Paper from "@material-ui/core/Paper/Paper";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider } from '@material-ui/core/styles'
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import {MuiThemeProvider} from "@material-ui/core";

let useStyles = makeStyles(theme => ({
    "textContainer": {
        padding: "20px 10% 0px 10%" //TODO make this better
    },
    "animationContainer":{

        width: "60%",
        "display": "block",
        "margin-left": "auto",
        "margin-right": "auto"
    },

    "image": {
        "width": "auto",
        "height": 200,
        "display": "block",
        "margin-left": "auto",
        "margin-right": "auto"
    },
}));

const electrolysisPages = [
    {
        "image": electrolysis1,
        "text": (<>Electricity is generated from renewable energy sources such as wind and solar. The electricity is then fed
                        into a power supply to be used in a process called electrolysis.</>)
    },
    {
        "image": electrolysis2,
        "text": (<>In the electrolysis, water molecules are split up into hydrogen gas (H<sub>2</sub>) and Oxygen gas (O<sub>2</sub>) with the help
            of electricity from the power source. This process has no CO<sub>2</sub>-emissions, which makes it a desirable reaction.
            However, the process is not energy efficient with a loss of 30% of the energy from power to hydrogen. To
            produce 1kg of H<sub>2</sub>, the energy needed is 50kWh. The 1kg of H<sub>2</sub> produced can be used as fuel for a car travelling
            a distance of about 100km, while the 50kWh would get you a distance of about 333 km with an electric car.</>),
    },
    {
        "image": electrolysis3,
        "text": (<>The H<sub>2</sub> gas produced from the electrolysis is captured. The gas could either be stored in gas tanks and
            transferred by trucks, ships etc or it could be transferred through existing gas pipes underground. The
            gas tanks have to be under high pressure in order to be stored and therefore may pose a danger.</>)
    },
];

const reformationPages = [
    {
        "image": methane1,
        "text": (<>Methane, CH<sub>4</sub>, is captured from the oil and gas industry.</>)
    },
    {
        "image": methane2,
        "text": (<>Methane and steam is gathered in one container</>)
    },
    {
        "image": methane3,
        "text": (<>Pressure and heat (800-1000 degrees) makes the methane and steam react with each other</>)
    },
    {
        "image": methane4,
        "text": (<>CH<sub>4</sub> + H<sub>2</sub>O = CO + 3H<sub>2</sub> is the balanced reaction which creates hydrogen gas. Carbonmonoxide, CO, is a biproduct from this reaction.</>)
    },
    {
        "image": methane5,
        "text": (<>The carbon monoxide can further react with steam under high pressure and temperature</>)
    },
    {
        "image": methane6,
        "text": (<>This makes the molekyles react, and the products are hydrogen and carbondioxide: CO + H<sub>2</sub>O = CO<sub>2</sub> + H<sub>2</sub></>)
    },

];

const theme = createMuiTheme({
    typography: {
        fontSize: 15,
        fontWeight: 500,
    },
});
function IntroductionPage({t}) {
    const classes = useStyles();
    return (
        <MuiThemeProvider theme={theme}>

            <div align="left" className={classes.textContainer}>
                    <Typography variant={"h5"} gutterBottom>
                        {t("titles.page_title")}
                    </Typography>
                    <Divider/>
                    <Typography variant={"h6"} gutterBottom>
                        The Hydrogen Atom
                    </Typography>
                    <Typography gutterBottom>
                        Hydrogen is the first atom appearing in the periodic system. Hence, the lightest of the elements.
                        The figure below shows the composition of hydrogen. It consists of one proton and an unpaired electron.
                        As a result of the unpaired electron, the hydrogen atom is rarely found because the unpaired electron
                        aspires to pair up with an additional electron.
                    </Typography>
                    <img src={hydrogen1} className={classes.image}/>
                    <Typography>
                    Two hydrogen atoms may form the hydrogen molecule H<sub>2</sub> as seen below. H<sub>2</sub>is a gas under
                        standard temperature and pressure, and is the smallest molecule found in the universe. Because of its light
                        weight, it is a desirable in terms of transport.
                    </Typography>
                    <img src={hydrogen2} className={classes.image}/>

                    <Typography variant={"h6"} gutterBottom>
                        Hydrogen as an Energy Carrier
                    </Typography>

                    <Typography gutterBottom>
                       An energy carrier is an energy resource that can transport energy from one place to another.
                        It requires more energy to produce hydrogen than what can be used in terms of converting it back to useful energy.
                        However, the energy content per unit weight of the hydrogen makes it desirable in several aspects.
                        Today’s research show that hydrogen can be used as an energy carrier in several sectors including transport,
                        energy storage, industry, power generation and heating. There are three ways in which hydrogen can be stored.
                        As a compressed gas in high pressure tanks, as a liquid in tanks or cooling unit (below -253C) or it
                        can be stored in solid form by reacting with metals or other chemical compounds. The largest concern
                        with the gas is the fire and explosion hazards associated with it. The gas is tasteless, odorless and
                        nontoxic and makes it hard to detect leaks.


                    </Typography>

                    <Typography variant={"h5"} gutterBottom>
                        Production of Hydrogen
                    </Typography>
                    <Divider/>
                    <Typography gutterBottom>
                        Hydrogen is produced using various methods. Here we will give an introduction to the most commonly used techniques. Scroll through the pages
                        in the boxes below to see the step-by-step walkthrough of each process.
                    </Typography>

                    <Paper className={classes.animationContainer}>
                        <Typography variant={"h6"} gutterBottom>
                            Electrolysis
                        </Typography>
                        <EducationalGif pages={electrolysisPages}/>
                    </Paper>
                    <br/>
                    <Paper className={classes.animationContainer}>
                        <Typography variant={"h6"} gutterBottom>
                            Natural gas reformation
                        </Typography>
                        <EducationalGif pages={reformationPages}/>
                    </Paper>
            </div>
        </MuiThemeProvider>

    );
}

export default withNamespaces()(IntroductionPage);