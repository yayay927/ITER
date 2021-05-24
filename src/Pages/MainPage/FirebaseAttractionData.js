import firebase from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAttractionData } from "../../Utils/firebase.js";

const Attraction = styled.div`
  height: 160px;
  width: 18%;
  font-size: 20px;
  margin: 5px;
  background-color: #b6e15e;
  /* border-radius: 10px; */
`;
const AttractionName = styled.div`
  font-size: 16px;
`;
const AttractionImage = styled.div`
  height: 110px;
  width: 100%;
  background-size: cover;
  /* border-radius: 10px; */
`;

function FirebaseAttractionData() {
  const [spotName, setSpotName] = useState();
  const [spotUrl, setSpotUrl] = useState();

  // async () => {
  //   let attractionData = await getAttractionData("Havana");
  //   console.log(attractionData);
  // };

  const renderAttractionData = async () => {
    let attractionData = await getAttractionData("Havana");
    console.log(attractionData);
  };
  renderAttractionData();

  // setSpotName(attractionData.name);
  // setSpotUrl(attractionData.url);

  // console.log(spotName);
  // console.log(spotUrl);

  return (
    <Attraction>
      <AttractionImage
        style={{
          backgroundSize: `cover`,
          background: `url(${spotUrl})`,
        }}
      ></AttractionImage>
      <AttractionName>{spotName}</AttractionName>
    </Attraction>
  );
}

export default FirebaseAttractionData;
