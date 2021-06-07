// Map part in city page
import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker } from "react-map-gl";
import { ZoomControl } from "mapbox-gl-controls";
import { useParams } from "react-router-dom";
// import mapboxgl from 'mapbox-gl';

// import MapboxDirections from "@mapbox/mapbox-gl-directions";
// import Directions from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css"; // Updating node module will keep css up to date.
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"; // Updating node module will keep css up to date.

// const MapboxDirections = require("@mapbox/mapbox-gl-directions");

const Map = styled.iframe`
  margin-bottom: 10px;
`;

const SideBar = styled.div`
  background-color: rgba(35, 55, 75, 0.9);
  color: #ffffff;
  padding: 6px 12px;
  font-family: monospace;
  z-index: 1;
  position: absolute;
  top: 200px;
  left: 50px;
  margin: 12px;
  border-radius: 4px;
`;

const MainMap = styled.div`
  height: 250px;
  margin-bottom: 20px;
  border-radius: 20px;
  /* margin-top: 20px; */
`;

const Transportations = styled.div`
  width: 100%;
  font-size: 45px;
  margin: 10px 0;
  /* display: flex; */
`;
const AllTransportations = styled.div`
  display: flex;
`;
const TransportationWay = styled.div`
  height: 120px;
  width: 120px;
  font-size: 20px;
  margin: 5px;
  background-color: #b6e13d;
  cursor: grab;
`;
const TransportationIcon = styled.div``;
const TransportationTime = styled.div``;

function ScheduleMap() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg";
  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [lng, setLng] = useState(3);
  // const [lat, setLat] = useState(38);
  // const [zoom, setZoom] = useState(1.3);

  const [zoom, setZoom] = useState(12);

  let { cityName } = useParams();
  // console.log(cityName);
  let latitude;
  let longitude;

  if (cityName === "Taipei") {
    latitude = 25.032969;
    longitude = 121.565414;
  } else if (cityName === "Kyoto") {
    latitude = 35.044635;
    longitude = 135.768036;
  } else if (cityName === "Havana") {
    latitude = 23.137627795121898;
    longitude = -82.36905265971663;
  } else if (cityName === "Boston") {
    latitude = 42.36071137021659;
    longitude = -71.05828198182688;
  } else if (cityName === "Vancouver") {
    latitude = 49.26029;
    longitude = -123.11417;
  } else if (cityName === "BuenosAires") {
    latitude = -34.61186;
    longitude = -58.45624;
  } else if (cityName === "Venice") {
    latitude = 45.44421624139197;
    longitude = 12.315229925283642;
  } else if (cityName === "Moscow") {
    latitude = 55.74893;
    longitude = 37.60862;
  } else if (cityName === "Cairo") {
    latitude = 30.045051609169334;
    longitude = 31.235549047124817;
  } else if (cityName === "CapeTown") {
    latitude = -33.92942; //18.460899515329125
    longitude = 18.41747; //-33.877741185805036
  }

  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);

  const [drivingTime, setDrivingTime] = useState();
  const [walkingTime, setWalkingTime] = useState();
  const [cyclingTime, setCyclingTime] = useState();

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11", //streets-v11 //light-v10
      // style: "mapbox://styles/yayay927/ckorc7d8m3p9d17p6x7w8lry3",
      center: [lng, lat],
      zoom: zoom,
    });

    // map.current.addControl(
    //   new MapboxDirections({
    //     accessToken:
    //       "pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg",
    //   }),
    //   "top-left"
    // );

    var directions = new MapboxDirections({
      accessToken:
        "pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg",
    });

    map.current.addControl(directions, "top-left");

    //get lng and lat for 2 points selected on map
    map.current.on("load", () => {
      console.log(directions.on());
      console.log(directions.getOrigin());
      console.log(directions.getDestination());

      directions.on("route", () => {
        console.log(directions.getOrigin());
        console.log(directions.getDestination());
        let pointA = directions.getOrigin().geometry.coordinates;
        let pointB = directions.getDestination().geometry.coordinates;
        let lngA = pointA[0];
        let latA = pointA[1];
        let lngB = pointB[0];
        let latB = pointB[1];

        console.log(lngA, latA, lngB, latB);
        getTransportationAPI(lngA, latA, lngB, latB);
      });

      //route //profile
    });
  });

  async function getTransportationAPI(lngA, latA, lngB, latB) {
    const dri = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${lngA},${latA};${lngB},${latB}?geometries=geojson&access_token=pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        console.log(myJson.routes[0].duration / 60);
        return myJson.routes[0].duration / 60;
      });
    console.log(dri);
    setDrivingTime(dri);

    const wal = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/walking/${lngA},${latA};${lngB},${latB}?geometries=geojson&access_token=pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        console.log(myJson.routes[0].duration / 60);
        return myJson.routes[0].duration / 60;
      });
    console.log(wal);
    setWalkingTime(wal);

    const cyc = await fetch(
      `https://api.mapbox.com/directions/v5/mapbox/cycling/${lngA},${latA};${lngB},${latB}?geometries=geojson&access_token=pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        console.log(myJson.routes[0].duration / 60);
        return myJson.routes[0].duration / 60;
      });
    console.log(cyc);
    setCyclingTime(cyc);
  }

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  return (
    <>
      {/* <Map
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801282.82842051!2d-81.80632523516259!3d21.50026629072002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd49070f7a4cb5%3A0x798cf7529110a41a!2z5Y-k5be0!5e0!3m2!1szh-TW!2stw!4v1620814454176!5m2!1szh-TW!2stw"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></Map> */}
      <div>
        <MainMap ref={mapContainer} className="map-container"></MainMap>
        <div id="trans">
          <Transportations className="trans">
            Transportations
            <AllTransportations>
              <TransportationWay className="trans">
                <TransportationIcon>Driving</TransportationIcon>
                <TransportationTime>{drivingTime} minutes</TransportationTime>
              </TransportationWay>
              <TransportationWay className="trans">
                <TransportationIcon>Walking</TransportationIcon>
                <TransportationTime>{walkingTime} minutes</TransportationTime>
              </TransportationWay>
              <TransportationWay className="trans">
                <TransportationIcon>Cycling</TransportationIcon>
                <TransportationTime>{cyclingTime} minutes</TransportationTime>
              </TransportationWay>
            </AllTransportations>
          </Transportations>
        </div>
      </div>
    </>
  );
}

export default ScheduleMap;
