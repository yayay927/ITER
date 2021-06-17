import styled from "styled-components";
// import * as React from "react";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker } from "react-map-gl";
import { ZoomControl } from "mapbox-gl-controls";
import L from "leaflet";
import ocean from "../../Components/ocean.wav";
import anchor from "../../Components/anchor.png";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Navigation from "./Navigation";
import rightarrow from "../../Components/rightarrow.png";

const SideBar = styled.div`
  background-color: rgba(35, 55, 75, 0.9);
  color: #ffffff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 30;
  left: 0;
  margin: 955px 0 0 120px;
  margin-top: 86vh;
  margin-left: 5vw;
  border-radius: 4px;
`;

const MainMap = styled.div`
  height: calc(100vh - 120px);
  margin-bottom: 0px;
  margin-top: 60px;
`;

const Audio = styled.div`
  background-color: #91ccb9;
`;

const LeafletMap = styled.div`
  height: 180px;
  id: "mapid";
`;

const GoBtn = styled.div`
  background-color: pink;
  height: 100px;
  width: 200px;
`;

function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(3);
  const [lat, setLat] = useState(38);
  const [zoom, setZoom] = useState(1.3);
  // const [marker, setMarker] = useState(null);

  // const [viewport, setViewport] = React.useState({
  //   longitude: -122.45,
  //   latitude: 37.78,
  //   zoom: 14,
  // });
  // const markers = React.useMemo(
  //   () =>
  //     data.map((city) => (
  //       <Marker
  //         key={city.name}
  //         longitude={city.longitude}
  //         latitude={city.latitude}
  //       >
  //         <img src="pin.png" />
  //       </Marker>
  //     )),
  //   [props.data]
  // );

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

    // const hrefHavana = "../city/Havana";
    // var el = document.createElement("div");
    // el.className = "marker";
    // el.style.backgroundImage = `url${anchor}`;
    // el.style.width = "10px";
    // el.style.height = "10px";
    // el.style.backgroundSize = "100%";

    // + marker.properties.iconSize.join("/") + "/)"
    // el.style.width = marker.properties.iconSize[0] + "px";
    //havana
    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([-82.383, 23.133])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="70px">Havana</font></h1><a style="outline:none;" href="../city/Havana"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );
    // document.getElementById("title").style.fontStyle = "italic";
    //taipei
    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([121.597366, 25.105497])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="70px">Taipei</font></h1><a style="outline:none;" href="../city/Taipei"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );
    //venice
    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([12.3327, 45.4371])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="70px">Venice</font></h1><a style="outline:none;" href="../city/Venice"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );
    //kyoto
    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([135.768326, 35.011665])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="70px">Kyoto</font></h1><a style="outline:none;" href="../city/Kyoto"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );
    //boston
    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([-71.057083, 42.361145])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="70px">Boston</font></h1><a style="outline:none;" href="../city/Boston"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );

    //istanbul
    // setMarker(
    //   new mapboxgl.Marker().setLngLat([28.97953, 41.015137]).addTo(map.current)
    // );

    //vancouver
    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([-123.116226, 49.246292])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="70px">Vancouver</font></h1><a style="outline:none;" href="../city/Vancouver"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );
    //cairo
    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([31.233334, 30.033333])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="70px">Cairo</font></h1><a style="outline:none;" href="../city/Cairo"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );
    //cape town
    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([18.4233, -33.918861])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="30px">Cape Town</font></h1><a style="outline:none;" href="../city/CapeTown"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );
    //buenos aires
    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([-58.381592, -34.603722])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="30px">Buenos Aires</font></h1><a style="outline:none;" href="../city/BuenosAires"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );
    //st.petersburg
    // setMarker(
    //   new mapboxgl.Marker().setLngLat([30.308611, 59.9375]).addTo(map.current)
    // );
    //moscow

    // setMarker(
    new mapboxgl.Marker()
      .setLngLat([37.618423, 55.751244])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<h1><font face="Allura" size="70px">Moscow</font></h1><a style="outline:none;" href="../city/Moscow"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
    // );

    // el.style.backgroundImage = { anchor };

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
      {/* <SideBar className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </SideBar> */}
      <MainMap ref={mapContainer} className="map-container"></MainMap>
      {/* <Audio>
        <audio controls src={ocean} autoplay="true" loop>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </Audio> */}
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
      {/* <Navigation></Navigation> */}
    </div>
  );
}

export default Map;
