import styled from "styled-components";

const TheFooter = styled.div`
  background-color: #e1d3ec;
  height: 80px;
  margin-top: -15px;
`;

function Footer() {
  return (
    <TheFooter className="App">
      <header className="App-header">
        <p>This is footer part.</p>

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
