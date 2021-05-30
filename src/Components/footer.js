import styled from "styled-components";

const TheFooter = styled.div`
  background-color: #91ccb9;
  height: 80px;
  /* margin-top: -10px; */
`;

function Footer() {
  return (
    <TheFooter className="App">
      <header className="App-header">
        <div>This is footer part.</div>
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
      </header>
    </TheFooter>
  );
}

export default Footer;
