import firebase from "firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD7gCInahUDjz1COa5HHkzRZUngyxHwXjY",
  authDomain: "iter-e3ef2.firebaseapp.com",
  projectId: "iter-e3ef2",
  storageBucket: "iter-e3ef2.appspot.com",
  messagingSenderId: "976859718189",
  appId: "1:976859718189:web:e3aff5ad58fa5552050ea4",
  measurementId: "G-CJP4GMTYTP",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function Firebase() {
  console.log("firebase");
}

export default Firebase;
