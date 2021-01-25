import React from "react";
import {withNamespaces} from "react-i18next";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster/src/react-leaflet-markercluster";
import MapDialog from "./MapDialog";
import Typography from "@material-ui/core/Typography/Typography";
import Slider from "@material-ui/core/Slider/Slider";
import Paper from "@material-ui/core/Paper/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import green_flamingo from "../assets/map/greenflamingo.PNG"
import blue_danube from "../assets/map/bluedanubegreenhydro.PNG"


let markerTypes = {

    "project": {
        name: "Project under development",
        color: "#ff8a3a" // TODO use material UI colors
    },
    "finished": {
        name: "Finished project",
        color: "#4fff3d",
    },
    "research": {
        name: "Scientific advancement",
        color: "#3f68ff",
    }
};


let markers = [
    {
        position: [52.296498, 7.932999],
        title: "Green Fertilizer Project",
        contents: "Cooperation between Nel Hydrogen and Yara to produce hydrogen from renewable sources for usage in fertilizer production or green ammonia. Announced start date in 2022. ",
        type: [
            {"year": 2014, "type": markerTypes.project}
        ]
    },
    {
        position: [51.143782, 4.897054],
        title: "Operation Silver Frog",
        contents: "Operation Silver Frog launched. An ambitious project between several European businesses. Aims at utilizing solar PV and water electrolysis to produce and transport renewable hydrogen to decarbonize the industry in EU. Expected to create 6000 jobs and produce 800 kilotons of renewable hydrogen per year, mitigating 800,000 metric tons of CO2 per year. Total costs are projected at €12-15 billion.",
        type: [
            {"year": 2014, "type": markerTypes.project}
        ]
    },
    {
        position: [53.793244, -1.428281],
        title: "Release of feasibility study regarding decarbonizing of gas networks",
        contents: "Northern Gas Networks releases the H21 Leeds City Gate feasibility study concludes that decarbonization of gas networks in the UK through hydrogen is both economically viable, and technically possible.  ",
        type: [
            {"year": 2010, "type": markerTypes.project}
        ]
    },
    {
        position: [49.107303, 0.276688],
        title: "Production of hydrogen through water electrolysis",
        contents: "H2V Normandy. Project launched by H2V industry to produce hydrogen through water electrolysis in Normandy. Each plant has an investment cost of €500 million and will generate 200 jobs, with the first project launching in 2023. By 2030 the industry developed by H2V as a whole will create 12,000 jobs in France with an €3.5 billion investment.",
        type: [
            {"year": 2014, "type": markerTypes.project}
        ]
    },
    {
        position: [48.515865, 9.055238],
        title: "Launch of hydrogen fueled trains",
        contents: "Start of hydrogen fueled trains in Baden Wuerttemberg. The trains will be fueled withing fifteen minutes with a top speed of 160 km/h and a range of around 600 kilometers, operating between Tuebingen, Horb and Pforzheim. ",
        type: [
            {"year": 2014, "type": markerTypes.project}
        ]
    },
    {
        position: [38.575478, -121.492440],
        title: "State-wide hydrogen fueling stations investment",
        contents: "State-wide investment of 100 hydrogen fueling stations, with additional $20 million USD invested annually from 2014.",
        type: [
            {"year": 2014, "type": markerTypes.project}
        ]
    },
    {
        position: [48.092015, 11.651386],
        title: "Government funded investment in hydrogen trains",
        contents: "Approximately $14.4 million USD government funded investment in Siemens and RWTH Aachen earmarked for research on fuel cells for Siemens Mireo Plus H trains. Development happens together with Deutsche Bahn, which will be trialed in 2024. ",
        type: [
            {"year": 2010, "type": markerTypes.project}
        ]
    },
    {
        position: [35.619413, 139.748411],
        title: "Nationwide investments",
        contents: "Approximately $80 million USD invested in hydrogen related research and development (R&D) in 2017. $30 million USD invested in fuel cells, $40 million USD invested in hydrogen fueling stations and $10 million USD invested in production, transport, and storage. ",
        type: [
            {"year": 2011, "type": markerTypes.project}
        ]
    },
    {
        position: [37.174475, -8.331822],
        title: "Project Green Flamingo",
        contents: (<>Cooperative project between Portugal, The Netherlands, Germany and Denmark with an investment
            over €3.500 mill. The project aims at leveraging existing infrastructure through solar PV and wind to
            jumpstart green hydrogen markets within Europe. Main location in Algarve, Portugal due to excellent solar
            conditions. Expected to reduce CO2 emissions by 18,6 metric tones per year and create over 5.000 jobs.
            <br/> <img src={green_flamingo}/></>),
        type: [
            {"year": 2012, "type": markerTypes.project}
        ]
    },
    {

        position: [46.807,15.890],

        title: " Green Hydrogen @ Blue Danube",

        contents: "A multilateral cooperation between nine countries in South-East Europe with the aim of producing green hydrogen in a large scale using wind and solar energy. The project aims at establishing a trans-European value chain and includes an €5,850 investment, a 3,200,200 tones reduction in CO2 per year and 5,000 new jobs, including 50,000 jobs secured for the future. ",
        type: [
            {"year": 2015, "type": markerTypes.project}
        ]
    },
    {

        position: [59.89, 10.57],

        title: "Hydrogen Fueling Station",

        contents: "Hydrogen Fueling station at Høvik outside of Oslo with one dispenser.",
        type: [
            {"year": 2016, "type": markerTypes.project}
        ]
    },
    {

        position: [59.82, 10.796],

        title: "Hydrogen Fueling Station",

        contents: "Hydrogen fueling station at Rosenholm in Oslo. The fueling station is used by Unibus for refueling Ruters hydrogen buses who are operating in Oslo.",
        type: [
            {"year": 2017, "type": markerTypes.project}
        ]
    },


    /*DUMMY PROJECTS*/

    {
        position: [-30.3,22.1],
        title: "",
        contents: "",
        type: [
            {"year": 2018, "type": markerTypes.project}
        ]
    },{
        position: [-30.3,23.05],
        title: "",
        contents: "",
        type: [
            {"year": 2013, "type": markerTypes.project}
        ]
    },
    {
        position: [-31.2,22],
        title: "",
        contents: "",
        type: [
            {"year": 2012, "type": markerTypes.project}
        ]
    },
    {
        position: [-32.3,22.1],
        title: "",
        contents: "",
        type: [
            {"year": 2010, "type": markerTypes.project}
        ]
    },


    {
        position: [30.3,21.1],
        title: "",
        contents: "",
        type: [
            {"year": 2008, "type": markerTypes.project}
        ]
    },
    {
        position: [32.1,22.05],
        title: "",
        contents: "",
        type: [
            {"year": 2007, "type": markerTypes.project}
        ]
    },

    /*39.9042° N, 116.4074*/

    {
        position: [38.9,116.4],
        title: "",
        contents: "",
        type: [
            {"year": 2025, "type": markerTypes.project}
        ]
    },
    {
        position: [40.81,116.6],
        title: "",
        contents: "",
        type: [
            {"year": 2019, "type": markerTypes.project}
        ]
    },
    {
        position: [39.92,116.43],
        title: "",
        contents: "",
        type: [
            {"year": 2004, "type": markerTypes.project}
        ]
    },
    {
        position: [39.8,116.35],
        title: "",
        contents: "",
        type: [
            {"year": 2000, "type": markerTypes.project}
        ]
    },

    {
        position: [31.8,116.35],
        title: "",
        contents: "",
        type: [
            {"year": 2004, "type": markerTypes.project}
        ]
    },


    {
        position: [33.8,115.35],
        title: "",
        contents: "",
        type: [
            {"year": 2000, "type": markerTypes.project}
        ]
    },

    {
        position: [37.575478, -115.492440],
        title: "",
        contents: "",
        type: [
            {"year": 2006, "type": markerTypes.project}
        ]
    },

    {
        position: [37.575478, -115.492440],
        title: "",
        contents: "",
        type: [
            {"year": 2006, "type": markerTypes.project}
        ]
    },

    {
        position: [25.575478, -105.492440],
        title: "",
        contents: "",
        type: [
            {"year": 2006, "type": markerTypes.project}
        ]
    },

    {
        position: [37.575478, -111.492440],
        title: "",
        contents: "",
        type: [
            {"year": 2006, "type": markerTypes.project}
        ]
    },

    {
        position: [38.575478, -111.492440],
        title: "",
        contents: "",
        type: [
            {"year": 2006, "type": markerTypes.project}
        ]
    },

    {
        position: [35.572478, -116.492440],
        title: "",
        contents: "",
        type: [
            {"year": 2006, "type": markerTypes.project}
        ]
    },

];

/*
FORMAT FOR NYE ELEMENTER
{
    position: [lat,lon],
    title: "",
    contents: "",
    type: [
        {"year": 2010, "type": markerTypes.project}
        {"year": 2015, "type": markerTypes.finished}
    ]
},
 */

let useStyles = makeStyles(theme => ({
    "sliderContainer": {
        padding: "5px 35px 0px 35px", //TODO make this better
        zIndex: 10000,
        width: "30%",
        position: "absolute",
        bottom: 10,
        left: "35%",
        height: 40,
    },
}));

function WorldMap({t}) {
    const [activeMarker, setActiveMarker] = React.useState(0);
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const DEFAULT_YEAR = 2021;
    const [currentYear, setCurrentYear] = React.useState(DEFAULT_YEAR);
    const classes = useStyles();
    const handleSliderChange = (e, newYear) => {
        setCurrentYear(newYear);
    };

    const getMarkerType = (marker) => {
        return marker.type.find(item => item.year <= currentYear);
    };

    return (
        <>
            <MapDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} activeMarker={activeMarker} markerData={markers[activeMarker]}/>
            <MapContainer style={{height: "100%"}} center={[60.3913, 5.3221]} zoom={3} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup showCoverageOnHover={false}>
                    {
                        markers.map((marker, i) =>
                        {
                            // TODO define icon based on markertype
                            if (getMarkerType(marker) === undefined) { return (<></>)}
                            return (<>
                                <Marker eventHandlers={{
                                    click: (e) => {
                                        setActiveMarker(i);
                                        setDialogOpen(true);
                                    },
                                    mouseover: (e) => {
                                        e.target.openPopup();
                                    },
                                    mouseout: (e) => {
                                        e.target.closePopup();
                                    }
                                }}
                                position={marker.position}
                                >
                                    <Popup closeButton={false}>
                                        <Typography variant={"h6"}>
                                            {marker.title}
                                        </Typography>
                                        <Typography variant={"caption"}>
                                            Click for more information.
                                        </Typography>
                                    </Popup>
                                </Marker>
                            </>)}
                        )
                    }
                </MarkerClusterGroup>
                <Paper className={classes.sliderContainer}>
                    <Typography variant={"caption2"}>Choose year</Typography>
                    <Slider
                        defaultValue={2021}
                        aria-labelledby="discrete-slider-small-steps"
                        step={1}
                        marks
                        min={1950}
                        max={2050}
                        valueLabelDisplay="auto"
                        onChange={handleSliderChange}
                    />
                </Paper>
            </MapContainer>
        </>
    )
}

export default withNamespaces()(WorldMap);