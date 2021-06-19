import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { useParams } from "react-router-dom";
import car from "../../images/car.png";
import bicycle from "../../images/bicycle.png";
import walk from "../../images/walk.png";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "mapbox-gl/dist/mapbox-gl.css"; // Updating node module will keep css up to date.
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css"; // Updating node module will keep css up to date.
import { getAttractionData } from "../../Utils/firebase.js";

const CityMap = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MainMap = styled.div`
  height: 400px;
  margin-bottom: 20px;
  border-radius: 20px;
  width: 95.5%;
  margin: 10px;
`;

const Transportations = styled.div`
  width: 100%;
  font-size: 45px;
  margin: 10px 0;
`;
// const Title = styled.div`
//   font-size: 40px;
// `;
const AllTransportations = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
  }
`;
const TransportationWay = styled.div`
  background-color: #eedd42;
  opacity: 0.8;
  cursor: grab;
  height: 100px;
  font-size: 16px;
  margin: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 360px) {
    width: 32%;
    margin: 5px;
  }
`;

const TransportationIcon = styled.img`
  height: 50px;
  margin: 5px;
  @media (max-width: 360px) {
    height: 30px;
    margin: 3px;
  }
`;
const TransportationTime = styled.div`
  @media (max-width: 360px) {
    font-size: 15px;
  }
`;

function ScheduleMap() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg";
  const mapContainer = useRef(null);
  const map = useRef(null);

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
    latitude = -33.92942;
    longitude = 18.41747;
  }

  const [lng, setLng] = useState(longitude);
  const [lat, setLat] = useState(latitude);

  const [drivingTime, setDrivingTime] = useState();
  const [walkingTime, setWalkingTime] = useState();
  const [cyclingTime, setCyclingTime] = useState();

  // const [attractionData, setAttractionData] = useState([]);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
      logoPosition: "bottom-right",
    });

    const renderAttractionData = async () => {
      let rawData = await getAttractionData(`${cityName}`);
      console.log(rawData);
      let filterData = rawData.filter(
        (attraction) => attraction.url !== undefined && attraction.name !== ""
      );

      filterData.map((attraction) => {
        const lng = attraction.geolocation[1];
        const lat = attraction.geolocation[0];
        const spotName = attraction.name;

        new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .setPopup(new mapboxgl.Popup().setHTML(`<p>${spotName}</p>`))
          .addTo(map.current);

        return attraction.getlocation;
      });
    };
    renderAttractionData();

    var directions = new MapboxDirections({
      accessToken:
        "pk.eyJ1IjoieWF5YXk5MjciLCJhIjoiY2tvb2JnNDBsMDhhdDJvbjFidDBldHZmcyJ9.xSDcsQK9i5rRvQ7xV2KOBg",
    });

    map.current.addControl(directions, "top-left");
    map.current.addControl(new mapboxgl.FullscreenControl());

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
    setDrivingTime(Math.round(dri));

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
    setWalkingTime(Math.round(wal));

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
    setCyclingTime(Math.round(cyc));
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
      <CityMap>
        <MainMap
          ref={mapContainer}
          className="map-container step-2 step-3"
        ></MainMap>
        <div id="trans">
          <Transportations className="trans step-4">
            {/* <Title>Transportations</Title> */}
            <AllTransportations>
              <TransportationWay className="trans">
                <TransportationIcon src={car}></TransportationIcon>
                <div>
                  <TransportationTime>Driving</TransportationTime>
                  <TransportationTime>{drivingTime} mins</TransportationTime>
                </div>
              </TransportationWay>
              <TransportationWay className="trans">
                <TransportationIcon src={walk}></TransportationIcon>
                <div>
                  <TransportationTime>Walking</TransportationTime>
                  <TransportationTime>{walkingTime} mins</TransportationTime>
                </div>
              </TransportationWay>
              <TransportationWay className="trans">
                <TransportationIcon src={bicycle}></TransportationIcon>
                <div>
                  <TransportationTime>Cycling</TransportationTime>
                  <TransportationTime>{cyclingTime} mins</TransportationTime>
                </div>
              </TransportationWay>
            </AllTransportations>
          </Transportations>
        </div>
      </CityMap>
    </>
  );
}

export default ScheduleMap;
