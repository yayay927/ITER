import firebase from "firebase/app";
import "firebase/auth";
import { useEffect, useState } from "react";

function FirebaseGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    login_hint: "user@example.com",
  });
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });

  return <div></div>;
}

export default FirebaseGoogle;

// user.displayName: 顯示名稱
// user.email: 電子信箱
// user.emailVerified: 這個電子信箱是否有驗證
// user.photoURL: 大頭照的路徑
// user.uid: Firebase Auth 派給這個使用者的 User ID
