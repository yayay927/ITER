import React from "react";
import styled from "styled-components";
import FirebaseAttractionData from "./FirebaseAttractionData.js";

const TouristAttractions = styled.div`
  width: 100%;
  font-size: 45px;
  margin: 20px 0;
`;
const AllAttractions = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* overflow: scroll; */
`;
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

function TouristAttraction() {
  return (
    <TouristAttractions>
      Top 30 Tourist Attractions
      {/* <AllAttractions>
        <Attraction>
          <AttractionImage
            style={{
              background: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/50/84/c2/photo7jpg.jpg?w=400&h=400&s=1)`,
              backgroundSize: `cover`,
            }}
          ></AttractionImage>
          <AttractionName>Old Havana</AttractionName>
        </Attraction>
        <Attraction>
          <AttractionImage
            style={{
              background: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/09/80/72/fusterlandia.jpg?w=400&h=400&s=1)`,
              backgroundSize: `cover`,
            }}
          ></AttractionImage>
          <AttractionName>Fusterlandia</AttractionName>
        </Attraction>
        <Attraction>
          <AttractionImage
            style={{
              background: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/b7/06/6c/fac.jpg?w=400&h=-1&s=1)`,
              backgroundSize: `cover`,
            }}
          ></AttractionImage>
          <AttractionName>Fabrica De Arte Cubano</AttractionName>
        </Attraction>
        <Attraction>
          <AttractionImage
            style={{
              background: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/aa/18/d6/centro.jpg?w=400&h=400&s=1)`,
              backgroundSize: `cover`,
            }}
          ></AttractionImage>
          <AttractionName>Old Square (Plaza Vieja)</AttractionName>
        </Attraction>
        <Attraction>
          <AttractionImage
            style={{
              background: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/8b/d0/ef/el-capitolio.jpg?w=400&h=400&s=1)`,
              backgroundSize: `cover`,
            }}
          ></AttractionImage>
          <AttractionName>El Capitolio</AttractionName>
        </Attraction>
        <Attraction>
          <AttractionImage
            style={{
              background: `url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/b2/79/a3/20171231154748-img-1292.jpg?w=400&h=400&s=1)`,
              backgroundSize: `cover`,
            }}
          ></AttractionImage>
          <AttractionName>El Morro</AttractionName>
        </Attraction>
      </AllAttractions> */}
      <FirebaseAttractionData></FirebaseAttractionData>
    </TouristAttractions>
  );
}

export default TouristAttraction;
