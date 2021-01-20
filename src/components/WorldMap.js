import React from "react";
import {withNamespaces} from "react-i18next";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster/src/react-leaflet-markercluster";
import MapDialog from "./MapDialog";
import Typography from "@material-ui/core/Typography/Typography";

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
}
let markers = [
    {
        position: [52.296498, 7.932999],
        title: "Green Fertilizer Project",
        contents: "Cooperation between Nel Hydrogen and Yara to produce hydrogen from renewable sources for usage in fertilizer production or green ammonia. Announced start date in 2022. ",
    },
    {
        position: [51.143782, 4.897054],
        title: "Operation Silver Frog",
        contents: "Operation Silver Frog launched. An ambitious project between several European businesses. Aims at utilizing solar PV and water electrolysis to produce and transport renewable hydrogen to decarbonize the industry in EU. Expected to create 6000 jobs and produce 800 kilotons of renewable hydrogen per year, mitigating 800,000 metric tons of CO2 per year. Total costs are projected at €12-15 billion.",
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
    },
    {
        position: [48.515865, 9.055238],
        title: "Launch of hydrogen fueled trains",
        contents: "Start of hydrogen fueled trains in Baden Wuerttemberg. The trains will be fueled withing fifteen minutes with a top speed of 160 km/h and a range of around 600 kilometers, operating between Tuebingen, Horb and Pforzheim. ",
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
            {"year": 2010, "type": markerTypes.project}
        ]
    },
    {
        position: [1,1],
        title: "",
        contents: "",
        type: [
            {"year": 2010, "type": markerTypes.project}
        ]
    },
    {
        position: [1,1],
        title: "",
        contents: "",
        type: [
            {"year": 2010, "type": markerTypes.project}
        ]
    },{
        position: [1,1],
        title: "",
        contents: "",
        type: [
            {"year": 2010, "type": markerTypes.project}
        ]
    },
    {
        position: [1,1],
        title: "",
        contents: "",
        type: [
            {"year": 2010, "type": markerTypes.project}
        ]
    },
    {
        position: [1,1],
        title: "",
        contents: "",
        type: [
            {"year": 2010, "type": markerTypes.project}
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
function WorldMap({t}) {
    const [activeMarker, setActiveMarker] = React.useState(0);
    const [dialogOpen, setDialogOpen] = React.useState(false);
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
                            (<>
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
                            </>)
                        )
                    }
                </MarkerClusterGroup>
            </MapContainer>
        </>
    )
}

export default withNamespaces()(WorldMap);