import firebase from "firebase/app";
import "firebase/auth";
import { useEffect, useState } from "react";

// function FirebaseAuth() {
//   //new user sign up
//   useEffect(() => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // ..
//       });
//   });

//   //old user log in
//   useEffect(() => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//       });
//   });

//   //check user status
//   useEffect(() => {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         var uid = user.uid;
//         // ...
//       } else {
//         // User is signed out
//         // ...
//       }
//     });
//   });
// }

// export default FirebaseAuth;
