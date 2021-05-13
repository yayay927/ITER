import anchor from "./anchor.png";
// import "./App.css";

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={anchor} className="App-logo" alt="logo" />
        <p>
          Edit header<code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default Header;
