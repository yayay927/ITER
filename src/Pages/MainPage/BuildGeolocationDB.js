import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

// let spotName = "stanley park";
function BuildGeolocationDB(spotName) {
  console.log("buid geolocation");
  async function getGeolocation() {
    const geoData = await fetch(
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${spotName}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyDTe2uCz9uI4Mb4RfWByQvOHiJbYkfFyzI`
    )
      .then(function (response) {
        return response;
      })
      .then(function (myJson) {
        console.log(myJson);
      });
    console.log(geoData);
  }
  getGeolocation();
  return <></>;
}

export default BuildGeolocationDB;
