import styled from "styled-components";
import anchor from "./anchor.png";
import user from "./user.png";
import suitcaseNew from "./suitcaseNew.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const TheHeader = styled.div`
  background-color: #91ccb9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 3;
`;

const Logo = styled.img`
  height: 50px;
  margin: 10px;
`;

const Input = styled.input`
  margin: 10px;
  width: 400px;
  height: 40px;
  border-radius: 20px;
  border: 1px lightgray solid;
  font-size: 18px;
  padding-left: 20px;
  outline: none;
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
        <a href="../">
          <Logo src={anchor} />
        </a>
        <form onSubmit={getParamValue}>
          <Input
            placeholder="Search a city you want to go"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
        <div>
          <a href="../manage">
            <Logo src={suitcaseNew} />
          </a>
          <a href="../verification">
            <Logo src={user} />
          </a>
        </div>

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
