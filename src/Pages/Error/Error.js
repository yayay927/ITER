import styled from "styled-components";
import manymaps from "../../images/manymaps.jpg";

const Page = styled.div`
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
  @media (max-width: 930px) {
    font-size: 7vh;
  }
  @media (max-width: 768px) {
    font-size: 5vh;
  }
  @media (max-width: 530px) {
    padding-top: 100px;
  }
`;
const Link = styled.a`
  text-decoration: none;
`;
const Redirect = styled.div`
  text-decoration: none;
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
  margin-top: 20vh;
  :hover {
    background-color: #91ccb9;
    opacity: 0.6;
    color: black;
    border: 1px solid #91ccb9;
  }

  @media (max-width: 768px) {
    font-size: 5vh;
    width: 20vw;
    /* height: 8vh; */
    padding: 3px;
    width: "fit-content";
    /* margin-top: 20vh; */
  }
  @media (max-width: 635px) {
    width: 30vw;
  }
  @media (max-width: 550px) {
    font-size: 4vh;
  }
`;

function Error() {
  return (
    <Page
      style={{
        background: `url(${manymaps})`,
        backgroundSize: `cover`,
      }}
    >
      <Msg>Sorry, the place you're looking for is not on our map yet.</Msg>
      <Link href="../../">
        <Redirect>back to world</Redirect>
      </Link>
    </Page>
  );
}

export default Error;
