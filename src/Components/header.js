import styled from "styled-components";
import anchor from "./anchor.png";

const TheHeader = styled.div`
  background-color: #e1d3ec;
`;

const Logo = styled.img`
  height: 50px;
  margin: 10px;
`;

const Input = styled.input`
  margin: 10px;
  width: 200px;
`;

function Header() {
  return (
    <div className="App">
      <TheHeader className="App-header">
        <Logo src={anchor} />

        <Input type="text" placeholder="Search a city you want to go" />
        <span>This is header part.</span>

        {/* <p>
          Edit header<code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </TheHeader>
    </div>
  );
}

export default Header;
