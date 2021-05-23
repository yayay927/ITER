import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

// const store = createStore(
//   reducer /* preloadedState, */,
//   +window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// const firebaseConfig = {
//   apiKey: "AIzaSyD7gCInahUDjz1COa5HHkzRZUngyxHwXjY",
//   authDomain: "iter-e3ef2.firebaseapp.com",
//   projectId: "iter-e3ef2",
//   storageBucket: "iter-e3ef2.appspot.com",
//   messagingSenderId: "976859718189",
//   appId: "1:976859718189:web:e3aff5ad58fa5552050ea4",
//   measurementId: "G-CJP4GMTYTP",
// };
// firebase.initializeApp(firebaseConfig);

// function Index() {
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// }

// export default Index;
