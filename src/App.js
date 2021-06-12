// import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Map from "./Pages/LandingPage/Map";
import CityPage from "./Pages/MainPage/CityPage";
import ScheduleMap from "./Pages/MainPage/ScheduleMap";
import ConfirmSchedule from "./Pages/Confirm/Confirm.js";
import ManageSchedule from "./Pages/ManagePage/Manage.js";
// import "./Utils/firebase";

function App() {
  return (
    <Router>
      {/* <Header></Header> */}
      <Switch>
        {/* <Route path="/calendar">
          <CityPage></CityPage>
        </Route> */}
        {/* <Route path="/schedule_map">
          <ScheduleMap></ScheduleMap>
        </Route> */}
        <Route path="/city/:cityName">
          <Header></Header>
          <CityPage></CityPage>
          {/* <Footer></Footer> */}
        </Route>
        <Route path="/confirm">
          <Header></Header>
          <ConfirmSchedule>confirm</ConfirmSchedule>
          <Footer></Footer>
        </Route>
        <Route path="/manage">
          <Header></Header>
          <ManageSchedule>manage</ManageSchedule>
          <Footer></Footer>
        </Route>
        <Route path="/">
          <Header></Header>
          <Map id="map"></Map>
          <Footer></Footer>
        </Route>
      </Switch>
      {/* <Footer></Footer> */}
    </Router>

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
