import React from "react";
import {withNamespaces} from "react-i18next";
import Typography from "@material-ui/core/Typography/Typography";
import illustration from "../assets/illustration.png"
import makeStyles from "@material-ui/core/styles/makeStyles";
import MapDialog from "./MapDialog";

let useStyles = makeStyles(theme => ({
    "illustration": {
        height: "auto",
        width: "80%",
        display: "block"
    }
}));

const boundingBoxes = [
    {
        title: "Solar panel",
        contents: <>A mix of different energy sources and carriers can be combined for a more optimal solution. One
            example is using solar panels as a supplementing energy sorce. For more information click here </>,
        x1: 0.3,
        x2: 0.41,
        y1: 0.25,
        y2: 0.38,
    },
    {
        title: "Hydrogen fueled car",
        contents: <>Having hydrogen available in a residence can also be utilized to fuel hydro-powered cars. By
            combining these solutions, the potential and utility of hydrogen as an energy carrier in a residence will
            increase. For more information click here </>,
        x1: 0,
        x2: 0.18,
        y1: 0.56,
        y2: 0.7,
    },
    {
        title: "Utilizing natural gas infrastructure",
        contents: <>Hydrogen has a large potential as a heat provider in areas with an existing infrastructure for
            natural gas or district heating. In these cases hydrogen can be implemented into already existing networks,
            reducing the need for a large initial investment for implementing a new infrastructure. These
            infrastructures might require some upgrades, but it will in many aspects be a more efficient solution.</>,
        x1: 0.7,
        x2: 1,
        y1: 0.69,
        y2: 0.82,
    },
    {
        title: "Fuel Cell (or other combustion processes)",
        contents: (<>A fuel cell produce electricity from a process by using hydrogen and oxygen. This electricity can
            provide power for buildings. However there is a considerable amount of energy loss from this process in
            the form of excess heat. If one utilizes this excess heat and implements it into the buildings heating
            system, the energy efficiency of the fuel cell will be much higher. This will in some cases be a more
            energy-efficient and more economically viable than other alternatives, among being a more sustainable
            option. For more information click here</>),
        x1: 0.3,
        x2: 0.39,
        y1: 0.69,
        y2: 0.84,
    },
];

function HouseIllustration() {
    const classes = useStyles();
    const [currentBox, setCurrentBox] = React.useState(0);
    const [boxActive, setBoxActive] = React.useState(false);
    const [currentCursor, setCurrentCursor] = React.useState('pointer');

    const isInsideBox = (box, point) => {
        return point.x > box.x1 && point.x < box.x2 && point.y > box.y1 && point.y < box.y2
    };

    const handleHover = (e) => {
        let bound = e.target.getBoundingClientRect();
        let width = bound.right - bound.left;
        let height = bound.bottom - bound.top;

        let point = {x: getRelativeCoord(e.clientX - bound.x, width), y: getRelativeCoord(e.clientY - bound.y, height)};
        let isInside = false;
        for (let box in boundingBoxes) {
            if (isInsideBox(boundingBoxes[box], point)) {
                isInside = true;
                break;
            }
        }
        if (!isInside) {
            setCurrentCursor("default");
        } else {
            setCurrentCursor("pointer");
        }
    };

    const getRelativeCoord = (val, size) => {
        return val / size;
    };

    const handleClick = (e) => {
        let bound = e.target.getBoundingClientRect();
        let width = bound.right - bound.left;
        let height = bound.bottom - bound.top;
        boundingBoxes.forEach((box, i) => {
            if (isInsideBox(box, {x: getRelativeCoord(e.clientX - bound.x, width), y: getRelativeCoord(e.clientY - bound.y, height)})) {
                setCurrentBox(i);
                setBoxActive(true);
            }
        })
    };
    return (
            <div>
                <Typography>
                    Click the elements on the image below to learn more about some potential applications of hydrogen in a private context.
                </Typography>
                <img style={{cursor: currentCursor}} className={classes.illustration} src={illustration} onMouseMove={handleHover} onClick={handleClick}>

                </img>
                <MapDialog dialogOpen={boxActive} setDialogOpen={setBoxActive} markerData={boundingBoxes[currentBox]}/>
            </div>
        );
}

export default withNamespaces()(HouseIllustration);