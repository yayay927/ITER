import "firebase/firestore";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getAttractionData } from "../../Utils/firebase.js";
import { useParams } from "react-router-dom";

const TouristAttractions = styled.div`
  width: 100%;
  font-size: 35px;
  margin-top: 10px;
`;
const AllAttractions = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  height: 350px;
  overflow: scroll;
`;
const Attraction = styled.div`
  height: 200px;
  width: 30%;
  font-size: 20px;
  margin: 10px;
  border-radius: 20px;
`;
const AttractionName = styled.a`
  font-size: 16px;
  text-decoration: none;
  color: black;
  display: block;
  text-align: center;
  :hover {
    color: #91ccb9;
  }
`;
const AttractionImage = styled.div`
  filter: brightness(1.25);
  filter: saturate(1.5);
  cursor: grab;
  height: 180px;
  width: 100%;
  background-size: 110px 100%;
  border-radius: 20px;
`;

function FirebaseAttractionData() {
  const [attractionData, setAttractionData] = useState([]);
  let { cityName } = useParams();

  useEffect(() => {
    const renderAttractionData = async () => {
      let rawData = await getAttractionData(`${cityName}`);
      console.log(rawData);
      let filterData = rawData.filter(
        (attraction) => attraction.url !== undefined && attraction.name !== ""
      );
      setAttractionData(filterData);
    };
    renderAttractionData();
    //eslint-disable-next-line
  }, []);

  // console.log(attractionData);

  return (
    <TouristAttractions className="event">
      Top Tourist Attractions
      <AllAttractions>
        {attractionData.map((attraction) => {
          const spotName = attraction.name;
          const spotUrl = attraction.url;
          const spotLink = attraction.link;
          return (
            <Attraction key={spotName} className="event">
              <AttractionImage
                style={{
                  background: `url(${spotUrl})`,
                  backgroundSize: `cover`,
                }}
              ></AttractionImage>
              <AttractionName href={spotLink} target="_blank">
                {spotName}
              </AttractionName>
            </Attraction>
          );
        })}
      </AllAttractions>
    </TouristAttractions>
  );
}

export default FirebaseAttractionData;
