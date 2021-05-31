import styled from "styled-components";
import github from "../Components/github.png";

const TheFooter = styled.div`
  background-color: #91ccb9;
  height: 80px;
  /* margin-top: -10px; */
  position: relative;
`;
// const Link = styled.div`
//   position: absolute;
//   left: 0px;
// `;
const Icon = styled.img`
  height: 50px;
  margin: 10px;
  margin-left: 90vw;
`;

function Footer() {
  return (
    <TheFooter className="App">
      {/* <header className="App-header"> */}
      {/* <div>This is footer part.</div> */}
      {/* <p>
          Edit footer<code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* <Link> */}
      <a href="https://github.com/yayay927/ITER">
        <Icon src={github} />
      </a>
      {/* </Link> */}
    </TheFooter>
  );
}

export default Footer;
