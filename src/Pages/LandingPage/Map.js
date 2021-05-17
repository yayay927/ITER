import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// import ReactMapGL, { Marker } from "react-map-gl";
import { ZoomControl } from "mapbox-gl-controls";
import L from "leaflet";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const SideBar = styled.div`
  background-color: rgba(35, 55, 75, 0.9);
  color: #ffffff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 30;
  left: 0;
  margin: 12px;
  border-radius: 4px;
`;

const MainMap = styled.div`
  height: 81vh;
  margin-bottom: 0px;
`;

const LeafletMap = styled.div`
  height: 180px;
  id: "mapid";
`;

function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(3);
  const [lat, setLat] = useState(38);
  const [zoom, setZoom] = useState(1.4);

  // var n = require("country-js");
  // console.log(n);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: "mapbox://styles/mapbox/light-v10", //streets-v11
      style: "mapbox://styles/yayay927/ckorc7d8m3p9d17p6x7w8lry3",

      center: [lng, lat],
      zoom: zoom,
    });

    // map.addControl(new mapboxgl.NavigationControl());
    // map.addControl(new ZoomControl(), "top-right");
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  // useEffect(() => {
  //   var marker = new mapboxgl.Marker().setLngLat([30.5, 50.5]).addTo(map);
  // });

  // useEffect(() => {
  //   var mymap = L.map("mapid").setView([51.505, -0.09], 13);
  //   L.tileLayer(
  //     "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  //     {
  //       attribution:
  //         'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //       maxZoom: 18,
  //       id: "mapbox/streets-v11",
  //       tileSize: 512,
  //       zoomOffset: -1,
  //       accessToken: "your.mapbox.access.token",
  //     }
  //   ).addTo(mymap);
  // });

  return (
    <div>
      <SideBar className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </SideBar>
      <MainMap ref={mapContainer} className="map-container" />
      {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer> */}
      {/* <LeafletMap id="mapid"></LeafletMap> */}
    </div>
  );
}

export default Map;
