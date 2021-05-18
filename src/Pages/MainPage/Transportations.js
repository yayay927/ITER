import React from "react";
import styled from "styled-components";

const Transportations = styled.div`
  width: 100%;
  font-size: 45px;
  margin: 10px 0;
`;
const TransportationWay = styled.div`
  height: 120px;
  width: 120px;
  font-size: 20px;
  margin: 5px;
  background-color: #b6e13d;
`;
const TransportationIcon = styled.div``;
const TransportationTime = styled.div``;

function Transportation() {
  return (
    <Transportations>
      Transportations
      <TransportationWay>
        <TransportationIcon>Train</TransportationIcon>
        <TransportationTime>1 H</TransportationTime>
      </TransportationWay>
    </Transportations>
  );
}

export default Transportation;
