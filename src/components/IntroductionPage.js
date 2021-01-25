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

import MapDialog from "./MapDialog";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Divider from "@material-ui/core/Divider/Divider";
import Pagination from "@material-ui/lab/Pagination/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem/PaginationItem";
import EducationalGif from "./EducationalGif";
import Paper from "@material-ui/core/Paper/Paper";

let useStyles = makeStyles(theme => ({
    "textContainer": {
        padding: "20px 10% 0px 10%" //TODO make this better
    },
    "animationContainer":{

        width: "60%",
        "display": "block",
        "margin-left": "auto",
        "margin-right": "auto"
    }
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
            a distance of about 100km, while the 50kWh would get you a distance of about 333 k m with an electric car.</>),
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

function IntroductionPage({t}) {
    const classes = useStyles();
    return (
        <div align="left" className={classes.textContainer}>

            <Typography variant={"h5"} gutterBottom>
                {t("titles.page_title")}
            </Typography>
            <Divider/>
            <Typography variant={"h6"} gutterBottom>
                The Hydrogen Atom
            </Typography>
            <Typography gutterBottom>
                Hydrogen is the first atom in the periodic system. It is the lightest....
            </Typography>
            <Typography variant={"h6"} gutterBottom>
                Hydrogen as an Energy Carrier
            </Typography>
            <Typography gutterBottom>
                An energy carrier is an energy resource that can transport energy from one place to another. Examples of
                this is battery (carrying electricity) and hydrogen carrying “itself”. The expression “Hydrogen as an
                energy carrier” is because the hydrogen gas must be manufactured, as opposed to oil and gas for example,
                which can be found and used directly.
                Today hydrogen as an energy carrier is still not commercialized. The energy carriers are mainly batteries fossil energy sources/carriers.
            </Typography>

            <Typography variant={"h5"} gutterBottom>
                Production of Hydrogen
            </Typography>
            <Divider/>
            <Typography gutterBottom>
                Hydrogen is produced using various methods. Here we will give an introduction to the most commonly used techniques.
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
    );
}

export default withNamespaces()(IntroductionPage);