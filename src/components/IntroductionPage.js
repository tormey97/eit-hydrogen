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

let useStyles = makeStyles(theme => ({
    "textContainer": {
        padding: "5px 35px 0px 35px" //TODO make this better
    },
    "animation": {
        "-webkit-transform": "scale(0.5)", /* Saf3.1+, Chrome */
        "transform": "scale(0.5)"
    }
}));

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
                Hydrogen is the first atom appearing in the periodic system. Hence, the lightest of the elements. The figure below shows the composition of hydrogen. It consists of one proton and an unpaired electron. As a result of the unpaired electron, the hydrogen atom is rarely found because the unpaired electron aspires to pair up with an additional electron. 
            </Typography>
<Typography> 
Two hydrogen atoms may form the hydrogen molecule H<sub>2</sub> as seen below. H<sub>2</sub>is a gas under standard temperature and pressure, and is the smallest molecule found in the universe. Because of its light weight, it is a desirable in terms of transport. 
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
            <Typography>
                Hydrogen gas is not naturally occurring in the surroundings, but must be separated from several other substances, like CH<sub>4</sub> and H<sub>2</sub>O. Consequently, this process requires energy. In the two next sections, the two most common and environmentally friendly processes of extracting H<sub>2</sub> from other substances is presented. Electrolysis, also referred to as power-to-gas is one of the methods and is being researched further with the addition of renewable energy sources. Today, natural gas reformation is the most widely used method. It is estimated that about 48% of the hydrogen production is carried out by this process and the possibility of capturing the carbon, makes this an environmentally friendly method. 
            </Typography>
            <Typography variant={"h6"} gutterBottom>
                Electrolysis
            </Typography>
            <img src={electrolysis1} className={classes.animation}/>
            <Typography>
            Electricity is generated from renewable energy sources such as wind and solar. The electricity is then fed
            into a power supply to be used in a process called electrolysis.
            </Typography>
            <img src={electrolysis2} className={classes.animation}/>

            <Typography>
                In the electrolysis, water molecules are split up into hydrogen gas (H<sub>2</sub>) and Oxygen gas (O<sub>2</sub>) with the help
                of electricity from the power source. This process has no CO<sub>2</sub>-emissions, which makes it a desirable reaction.
            However, the process is not energy efficient with a loss of 30% of the energy from power to hydrogen. To
                produce 1kg of H<sub>2</sub>, the energy needed is 50kWh. The 1kg of H<sub>2</sub> produced can be used as fuel for a car travelling
            a distance of about 100km, while the 50kWh would get you a distance of about 333 k m with an electric car.
            </Typography>
            <img src={electrolysis3} className={classes.animation}/>
            <Typography>
                The H<sub>2</sub> gas produced from the electrolysis is captured. The gas could either be stored in gas tanks and
            transferred by trucks, ships etc or it could be transferred through existing gas pipes underground. The
            gas tanks have to be under high pressure in order to be stored and therefore may pose a danger.
            </Typography>
            <Typography variant={"h6"} gutterBottom>
            Natural gas reformation
            </Typography>
            <img src={methane1} className={classes.animation}/>
            <Typography>
                Methane, CH<sub>4</sub>, is captured from the oil and gas industry.
            </Typography>
            <img src={methane2} className={classes.animation}/>
            <Typography>
            Methane and steam is gathered in one container
            </Typography>
            <img src={methane3} className={classes.animation}/>
            <Typography>
            Pressure and heat (800-1000 degrees) makes the methane and steam react with each other
            </Typography>
            <img src={methane4} className={classes.animation}/>
            <Typography>
                CH<sub>4</sub> + H<sub>2</sub>O = CO + 3H<sub>2</sub> is the balanced reaction which creates hydrogen gas. Carbonmonoxide, CO, is a biproduct from this reaction.
            </Typography>
            <img src={methane5} className={classes.animation}/>
            <Typography>
            The carbonmonoxide can further react with steam under high pressure and temperature
            </Typography>
            <img src={methane6} className={classes.animation}/>
            <Typography>
                This makes the molekyles react, and the products are hydrogen and carbondioxide: CO + H<sub>2</sub>O = CO<sub>2</sub> + H<sub>2</sub>
            </Typography>

        </div>
    );
}

export default withNamespaces()(IntroductionPage);