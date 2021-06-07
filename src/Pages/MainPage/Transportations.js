import React from "react";
import styled from "styled-components";

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

function Transportation() {
  return (
    <Transportations>
      Transportations
      <AllTransportations>
        <TransportationWay className="trans">
          <TransportationIcon>Driving</TransportationIcon>
          <TransportationTime></TransportationTime>
        </TransportationWay>
        <TransportationWay className="trans">
          <TransportationIcon>Walking</TransportationIcon>
          <TransportationTime></TransportationTime>
        </TransportationWay>
        <TransportationWay className="trans">
          <TransportationIcon>Cycling</TransportationIcon>
          <TransportationTime></TransportationTime>
        </TransportationWay>
      </AllTransportations>
    </Transportations>
  );
}

export default Transportation;
