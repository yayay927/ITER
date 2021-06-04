import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import downarrow from "../../Components/downarrow.png";
import Footer from "../../Components/footer";

const Nav = styled.div`
  height: 1200px;
`;
const PullDown = styled.div`
  height: 60px;
  align-items: center;
`;
const Arrow = styled.img`
  display: block;
  height: 46px;
  width: 50px;
  margin: 5px auto;
  cursor: pointer;
  /* text-align: center; */
`;

function scrollDown() {
  window.scrollTo(0, 1000);
}

function Navigation() {
  return (
    <Nav>
      <PullDown>
        <Arrow src={downarrow} onClick={scrollDown}></Arrow>
      </PullDown>
      {/* <Footer></Footer> */}
    </Nav>
  );
}

export default Navigation;
