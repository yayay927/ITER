import styled from "styled-components";
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

const MainMap = styled.div`
  height: calc(100vh - 80px);
  margin-bottom: 0px;
  margin-top: 60px;
  font-family: "Allura";
`;

function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg";
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(3);
  const [lat, setLat] = useState(38);
  const [zoom, setZoom] = useState(1.4);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      // style: "mapbox://styles/mapbox/light-v10", //streets-v11
      style: "mapbox://styles/yayay927/ckorc7d8m3p9d17p6x7w8lry3",
      center: [lng, lat],
      zoom: zoom,
    });

    new mapboxgl.Marker()
      .setLngLat([-82.383, 23.133])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">Havana</div>
          <a style="outline:none;" href="../city/Havana"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);

    new mapboxgl.Marker()
      .setLngLat([121.597366, 25.105497])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">Taipei</div>
          <a style="outline:none;" href="../city/Taipei"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);

    new mapboxgl.Marker()
      .setLngLat([12.3327, 45.4371])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">Venice</div>
          <a style="outline:none;" href="../city/Venice"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);

    new mapboxgl.Marker()
      .setLngLat([135.768326, 35.011665])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">&nbsp;Kyoto</div>
          <a style="outline:none;" href="../city/Kyoto"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);

    new mapboxgl.Marker()
      .setLngLat([-71.057083, 42.361145])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">Boston</div>
          <a style="outline:none;" href="../city/Boston"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);

    new mapboxgl.Marker()
      .setLngLat([-123.116226, 49.246292])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">Vancouver</div>
          <a style="outline:none;" href="../city/Vancouver"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);

    new mapboxgl.Marker()
      .setLngLat([31.233334, 30.033333])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">Cairo</div>
          <a style="outline:none;" href="../city/Cairo"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);

    new mapboxgl.Marker()
      .setLngLat([18.4233, -33.918861])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">Cape Town</div>
          <a style="outline:none;" href="../city/CapeTown"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);

    new mapboxgl.Marker()
      .setLngLat([-58.381592, -34.603722])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">Buenos Aires</div>
          <a style="outline:none;" href="../city/BuenosAires"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);

    new mapboxgl.Marker()
      .setLngLat([37.618423, 55.751244])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          `<div class="mapTitle">Moscow</div>
          <a style="outline:none;" href="../city/Moscow"><div class="mapBtn"></div></a>`
        )
      )
      .addTo(map.current);
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <div>
      <MainMap ref={mapContainer} className="map-container"></MainMap>

      {/* <Navigation></Navigation> */}
    </div>
  );
}

export default Map;
