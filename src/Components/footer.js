import styled from "styled-components";
import github from "../Components/github.png";

const TheFooter = styled.div`
  background-color: #91ccb9;
  height: 40px;
  /* margin-top: -10px; */
  /* position: relative; */
  /* display: felx; */
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
const CopyRight = styled.div`
  color: white;
  /* margin: auto; */
  text-align: center;
  font-weight: bold;
  line-height: 40px;
`;
const Icon = styled.img`
  height: 50px;
  margin: 10px;
  /* margin-left: 90vw; */
`;

function Footer() {
  return (
    <TheFooter className="App">
      <CopyRight>Copyright © 2021 TingYaYang All rights reserved.</CopyRight>
      {/* <a href="https://github.com/yayay927/ITER">
        <Icon src={github} />
      </a> */}
    </TheFooter>
  );
}

export default Footer;
