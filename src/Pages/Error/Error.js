import styled from "styled-components";
import map from "../../Components/map.jpg";
import map1 from "../../Components/map1.jpg";
import map2 from "../../Components/map2.jpg";
import manymaps from "../../Components/manymaps.jpg";

const Page = styled.div`
  /* background-image: url(${map}); */
  /* height: calc(100vh-120px); */
  height: 100vh;
`;
const Msg = styled.div`
  z-index: 1;
  font-family: "Allura";
  font-size: 100px;
  width: 70%;
  margin: 0 auto;
  padding-top: 200px;
  color: white;
`;
const Redirect = styled.div`
  height: 70px;
  width: 200px;
  border-radius: 40px;
  border: 3px solid lightgrey;
  margin: 0 auto;
  cursor: pointer;
  color: lightgrey;
  text-align: center;
  line-height: 40px;
  padding: 10px;
  font-size: 50px;
  font-family: "Allura";
  align-items: center;
  /* position: fixed; */
  margin-top: 20vh;
  :hover {
    background-color: #91ccb9;
    opacity: 0.6;
    color: black;
    border: 1px solid #91ccb9;
  }
`;

function Error() {
  return (
    <Page
      style={{
        background: `url(${manymaps})`,
        // backgroundSize: `110px 100%`,
        backgroundSize: `cover`,
      }}
    >
      <Msg>Sorry the place you're looking for is not on our map yet.</Msg>
      <Redirect>back to world</Redirect>
    </Page>
  );
}

export default Error;
