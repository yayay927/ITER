// import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Map from "./Pages/Landing Page/map";
import Calendar from "./Pages/Main Page/calendar";
import ScheduleMap from "./Pages/Main Page/schedule_map";

function App() {
  return (
    <HashRouter>
      <Header></Header>
      <Switch>
        <Route path="/calendar">
          <Calendar></Calendar>
        </Route>
        <Route path="/schedule_map">
          <ScheduleMap></ScheduleMap>
        </Route>
        <Route path="/">
          <Map></Map>
        </Route>
        {/* <Route path="/:tag">
          <Main></Main>
        </Route> */}
      </Switch>
      <Footer></Footer>
    </HashRouter>

    /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */
  );
}

export default App;
