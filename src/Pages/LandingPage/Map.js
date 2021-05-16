import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const MainMap = styled.div`
  height: 81vh;
  margin-bottom: 0px;
`;

function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <MainMap ref={mapContainer} className="map-container" />
    </div>

    // <div className="App" id="map">
    //   <header className="App-header">
    //     <img className="App-logo" alt="logo" />
    //     <p>
    //       Editttttt map <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default Map;
