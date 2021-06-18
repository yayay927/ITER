import React from "react";
import styled from "styled-components";
import downarrow from "../../Components/downarrow.png";
// import Footer from "../../Components/footer";
import github from "../../Components/github.png";
import ocean from "../../Components/ocean.wav";
import ship from "../../Components/ship.jpg";
// import plan from "../../Components/plan.jpg";
import desert from "../../Components/desert.jpg";
import next from "../../Components/next.png";
import frame from "../../Components/frame.png";

const Nav = styled.div`
  /* height: 1200px; */
`;
const PullDown = styled.div`
  height: 60px;
  align-items: center;
`;
const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const Arrow = styled.img`
  display: block;
  height: 46px;
  width: 50px;
  margin: 5px auto;
  cursor: pointer;
  /* text-align: center; */
`;
const Intro = styled.div`
  height: 800px;
  border: 1px solid #f9e9cd;
  background-image: url(${desert});
  background-size: 100% 800px;
`;
const Feature = styled.div`
  height: 800px;
  border: 1px solid #f9e9cd;
  position: relative;
`;
const PlanPic = styled.img``;
const PicFrame = styled.img`
  position: absolute;
  top: 0px;
  left: 8vw;
  transform: rotate(90deg);
  width: 80%;
  margin: 0 auto;
`;
const Description = styled.div``;
const Usage = styled.div`
  height: 800px;
  border: 1px solid #f9e9cd;
`;

const CTA = styled.div`
  height: 100vh;
  border: 1px solid #f9e9cd;
  /* background-color: #cadfff; */
`;
const CTAWord = styled.div`
  font-family: "Allura";
  /* color: white; */
  font-weight: 500;
  font-size: 200px;
  display: block;
  margin: 50px auto;
  text-align: center;
`;
const Explore = styled.div`
  display: block;
  display: flex;
  align-items: center;
`;
const Ship = styled.img`
  /* height: 200px; */
  width: 50%;
  margin-left: 5vw;
`;
const Action = styled.div`
  margin-left: 10vw;
`;
const List = styled.div``;
const Title = styled.div`
  font-size: 40px;
  margin: 20px 20px 20px 0;
`;
const Cities = styled.div``;
const Col = styled.div``;
const Next = styled.img`
  height: 40px;
  margin: 10px 0 10px 200px;
`;
const Continent = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;
const Name = styled.div``;
const MapBtn = styled.div``;

const TheFooter = styled.div`
  background-color: #91ccb9;
  height: 50px;
  display: flex;
  align-items: center;
`;
const Audio = styled.div`
  /* width: 100px; */
  position: fixed;
  bottom: 0;
`;
const CopyRight = styled.div`
  color: white;
  margin: auto;
  text-align: center;
  font-weight: bold;
  line-height: 40px;
`;
const Icon = styled.img`
  height: 35px;
  /* margin-left: 90vw; */
  position: fixed;
  right: 20px;
  bottom: 10px;
`;

function scrollDown() {
  window.scrollTo(0, 1000);
}

function move() {
  window.scrollTo(0, 0);
}

function Navigation() {
  return (
    <Nav>
      <PullDown>
        <Container>
          <Arrow src={downarrow} onClick={scrollDown}></Arrow>
          <Intro></Intro>
          <Feature>
            <PlanPic></PlanPic>
            <PicFrame src={frame}></PicFrame>
            <Description></Description>
          </Feature>
          <Usage></Usage>
          <CTA>
            <CTAWord>Start your journey</CTAWord>
            <Explore>
              <Ship src={ship}></Ship>
              <Action>
                <List>
                  <Title>Current Cities</Title>
                  <Cities>
                    <Col>
                      <Continent>Asia</Continent>
                      <Name>Taipei</Name>
                      <Name>Kyoto</Name>
                      <Continent>Europe</Continent>
                      <Name>Venice</Name>
                      <Name>Moscow</Name>
                      <Continent>Africa</Continent>
                      <Name>Cairo</Name>
                    </Col>
                    <Col>
                      <Name>Cape Town</Name>
                      <Continent>America</Continent>
                      <Name>Vancouver</Name>
                      <Name>Boston</Name>
                      <Name>Havana</Name>
                      <Name>Buenos Aires</Name>
                    </Col>
                  </Cities>
                  <Next src={next} onClick={move}></Next>
                </List>
                <MapBtn></MapBtn>
              </Action>
            </Explore>
          </CTA>
        </Container>
        <TheFooter>
          <Audio>
            <audio controls src={ocean} autoplay="true" loop>
              Your browser does not support the
              <code>audio</code> element.
            </audio>
          </Audio>
          <CopyRight>
            Copyright © 2021 TingYaYang All rights reserved.
          </CopyRight>
          <a href="https://github.com/yayay927/ITER">
            <Icon src={github} />
          </a>
        </TheFooter>
      </PullDown>
    </Nav>
  );
}

export default Navigation;
