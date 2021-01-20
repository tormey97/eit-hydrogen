import React from "react";
import {withNamespaces} from "react-i18next";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster/src/react-leaflet-markercluster";
import MapDialog from "./MapDialog";

let markers = [
    {
        position: [38.575478, -121.492440],
        title: "State-wide hydrogen fueling stations investment ",
        contents: "State-wide investment of 100 hydrogen fueling stations, with additional $20 million USD invested annually from 2014.",
    },
    {
        position: [21, 4],
        title: "Tokyo hydrogen station",
        contents: "Wow hydrogen",
    },
    {
        position: [22, 4],
        title: "Tokyo hydrogen station",
        contents: "Wow hydrogen",
    },
    {
        position: [21, 6],
        title: "Tokyo hydrogen station",
        contents: "Wow hydrogenWow hydrogen",
    }
];
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
                                }}
                                position={marker.position}
                                />
                            </>)
                        )
                    }
                </MarkerClusterGroup>
            </MapContainer>
        </>
    )
}

export default withNamespaces()(WorldMap);