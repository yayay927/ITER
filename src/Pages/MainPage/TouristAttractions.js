import React from "react";
import styled from "styled-components";

const TouristAttractions = styled.div`
  width: 100%;
  font-size: 45px;
  margin: 10px 0;
`;
const Attraction = styled.div`
  height: 120px;
  width: 120px;
  font-size: 20px;
  margin: 5px;
  background-color: #b6e13d;
`;
const AttractionName = styled.div``;
const AttractionImage = styled.div``;

function TouristAttraction() {
  return (
    <TouristAttractions>
      Top 10 Tourist Attractions
      <Attraction>
        <AttractionName>Charles River</AttractionName>
        <AttractionImage></AttractionImage>
      </Attraction>
    </TouristAttractions>
  );
}

export default TouristAttraction;
