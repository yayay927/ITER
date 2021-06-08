import styled from "styled-components";
import github from "../Components/github.png";
import ocean from "../Components/ocean.wav";

const TheFooter = styled.div`
  background-color: #91ccb9;
  height: 60px;
  /* margin-top: -10px; */
  /* position: relative; */
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 3;
  /* justify-content: space-evenly; */
`;
const Audio = styled.div`
  background-color: #91ccb9;
  position: fixed;
  bottom: -2px;
  left: 3px;
  opacity: 0.3;
  height: 60px;
  width: 100px;
  /* margin: 10px; */
  /* margin-bottom: 10px; */
  color: white;
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
  right: 17px;
  bottom: 13px;
`;

function Footer() {
  return (
    <TheFooter className="App">
      <Audio>
        <audio controls src={ocean} autoplay="true" loop>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </Audio>

      <CopyRight>Copyright © 2021 TY Yang All rights reserved.</CopyRight>
      <a href="https://github.com/yayay927/ITER">
        <Icon src={github} />
      </a>
    </TheFooter>
  );
}

export default Footer;
