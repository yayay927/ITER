import styled from "styled-components";
import anchor from "./anchor.png";
import contract from "./contract.png";
import suitcase from "./suitcase.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const TheHeader = styled.div`
  background-color: #e1d3ec;
  display: flex;
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
  let history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const getParamValue = (event) => {
    event.preventDefault();
    history.push(`/city/${inputValue}`);
    console.log(inputValue);
  };

  return (
    <div className="App">
      <TheHeader className="App-header">
        <a href="./">
          <Logo src={anchor} />
        </a>
        <form onSubmit={getParamValue}>
          <Input
            placeholder="Search a city you want to go"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <a href="./confirm">
          <Logo src={contract} />
          Confirm Schedule
        </a>
        <a href="./manage">
          <Logo src={suitcase} />
          Manage Schedule
        </a>

        {/* <form onSubmit={getParamValue} method="get">
          <input
            name="tag"
            id="search"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form> */}

        {/* <Input type="text" placeholder="Search a city you want to go" /> */}

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
