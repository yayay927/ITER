import firebase from "firebase/app";
import "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAttractionData } from "../../Utils/firebase.js";
import { useParams } from "react-router-dom";

const AllAttractions = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 500px;
  overflow: scroll;
`;
const Attraction = styled.div`
  height: 160px;
  width: 18%;
  font-size: 20px;
  margin: 5px;
  background-color: lightgrey;
  cursor: grab;
  /* border-radius: 10px; */
`;
const AttractionName = styled.div`
  font-size: 16px;
`;
const AttractionImage = styled.div`
  height: 110px;
  width: 100%;
  background-size: 110px 100%;
  /* background-size: cover; */
  /* border-radius: 10px; */
`;

function FirebaseAttractionData() {
  const [attractionData, setAttractionData] = useState([]);
  let { cityName } = useParams();
  // console.log(cityName);

  useEffect(() => {
    const renderAttractionData = async () => {
      // let rawData = await getAttractionData("Havana");
      let rawData = await getAttractionData(`${cityName}`);
      // console.log(rawData);
      let filterData = rawData.filter(
        (attraction) => attraction.url !== undefined && attraction.name !== ""
      );
      setAttractionData(filterData);
    };
    renderAttractionData();
  }, []);

  // console.log(attractionData);

  return (
    <AllAttractions>
      {attractionData.map((attraction) => {
        const spotName = attraction.name;
        const spotUrl = attraction.url;
        return (
          <Attraction key={spotName} className="event">
            <AttractionImage
              style={{
                background: `url(${spotUrl})`,
                // backgroundSize: `110px 100%`,
                backgroundSize: `cover`,
              }}
            ></AttractionImage>
            <AttractionName>{spotName}</AttractionName>
            {/* <Title>{product.title}</Title> */}
            {/* <Img src={product.main_image}></Img> */}
          </Attraction>
        );
      })}
    </AllAttractions>
  );
}

export default FirebaseAttractionData;
