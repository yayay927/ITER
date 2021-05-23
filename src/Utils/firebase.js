import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD7gCInahUDjz1COa5HHkzRZUngyxHwXjY",
  authDomain: "iter-e3ef2.firebaseapp.com",
  projectId: "iter-e3ef2",
  storageBucket: "iter-e3ef2.appspot.com",
  messagingSenderId: "976859718189",
  appId: "1:976859718189:web:e3aff5ad58fa5552050ea4",
  measurementId: "G-CJP4GMTYTP",
};
firebase.initializeApp(firebaseConfig);

function getAttractionData() {
  var docRef = firebase
    .firestore()
    .collection("world_cities")
    .doc("Kyoto")
    .collection("spots")
    // .doc(`${i}`);
    .get()
    .then((doc) => {
      const attractionData = [];
      for (let i = 0; i < 10; i++) {
        attractionData.push(doc[i].data());
      }
      return attractionData;
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

function fireAuthLogIn(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user.uid);
      console.log(user.email);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  console.log("log in");
}

function fireAuthSignUp(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user.uid);
      console.log(user.email);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  console.log("sign up");
}

function fireAuthLogOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
}

function firebaseGoogle() {
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
}

function checkUserStatus() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var email = user.email;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

export {
  getAttractionData,
  fireAuthLogIn,
  fireAuthSignUp,
  fireAuthLogOut,
  firebaseGoogle,
  checkUserStatus,
};

// user.displayName: 顯示名稱
// user.email: 電子信箱
// user.emailVerified: 這個電子信箱是否有驗證
// user.photoURL: 大頭照的路徑
// user.uid: Firebase Auth 派給這個使用者的 User ID
