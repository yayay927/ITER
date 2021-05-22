import firebase from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";

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

// const db = firebase.firestore();
const i = 1;

function FirebaseAttractionData() {
  const [spotName, setSpotName] = useState();
  const [spotUrl, setSpotUrl] = useState();
  useEffect(() => {
    // var docRef = db
    var docRef = firebase
      .firestore()
      .collection("world_cities")
      .doc("Kyoto")
      .collection("spots")
      .doc(`${i}`);

    docRef
      .get()
      .then((doc) => {
        setSpotName(doc.data().name);
        setSpotUrl(doc.data().url);
        // spotName = doc.data().name;
        // spotUrl = doc.data().url;
        console.log("Document data:", doc.data());
        console.log(spotName);
        console.log(spotUrl);
        // console.log(doc.data().name);
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  });

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
