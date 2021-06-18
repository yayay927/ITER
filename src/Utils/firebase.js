import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// } else {
//   firebase.app(); // if already initialized, use that one
// }

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

function getAttractionData(cityName) {
  return (
    firebase
      .firestore()
      .collection("world_cities")
      // .doc("Kyoto")
      .doc(cityName)
      .collection("spots")
      .get()
      .then((doc) => {
        const attractionData = [];
        // for (let i = 0; i < 10; i++) {
        //   attractionData.push(doc[i].data());
        // }
        doc.forEach((spot) => {
          attractionData.push(spot.data());
        });
        return attractionData;
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      })
  );
}

function fireAuthLogIn(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(email, password);
      console.log(user.uid);
      console.log(user.email);
      var userNow = firebase.auth().currentUser.uid;
      console.log(userNow);
      // alert("log in successfully");
      // ...
      // return user.uid;
    });
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;

  // });
}

function fireAuthSignUp(email, password) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(email, password);
      console.log(user.uid, user.email + "sign up successfully");
      // console.log(user.email);
      // alert("sign up successfully");
      return user.uid;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + errorMessage);
      // ..
    });
  // console.log("sign up");
}

function fireAuthLogOut() {
  firebase
    .auth()
    .signOut()
    .then((res) => {
      // Sign-out successful.
      alert("log out successfully");
      // var user = firebase.auth().currentUser.uid;
      // console.log(user + "log out successfully");
      console.log(res);
      // alert(user + "log out successfully");
      // return;
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
      alert("google log in successfully");
      console.log(result);

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      console.log("token = " + token);
      // The signed-in user info.
      var user = result.user.uid;
      console.log("user = " + user);
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
      console.log(email);
      // return email;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}

function storeEventsData(saveEvents, cityName, UID, time) {
  return (
    firebase
      .firestore()
      .collection("user_trips_history")
      // .doc()
      // .set(
      .add({
        saveEvents,
        city: cityName,
        owner: UID,
        createTime: time,
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
  );
}

function getEventsData(id) {
  return firebase
    .firestore()
    .collection("user_trips_history")
    .doc(id)
    .get()
    .then((doc) => {
      console.log(doc);
      console.log(doc.data());

      return doc.data().saveEvents;
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

function getTripDataByUID(UID) {
  return (
    firebase
      .firestore()
      .collection("user_trips_history")
      .where("owner", "==", UID)
      // .doc(id)
      .get()
      .then((data) => {
        let tripData = [];
        data.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          tripData.push([doc.id, doc.data()]);
        });

        return tripData;
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      })
  );
}

function getTripDataByCanEdit(UID) {
  return (
    firebase
      .firestore()
      .collection("user_trips_history")
      .where("share", "==", UID)
      // .doc(id)
      .get()
      .then((data) => {
        let tripData = [];
        data.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          tripData.push([doc.id, doc.data()]);
        });

        return tripData;
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      })
  );
}

function getTripDataByCanView(UID) {
  return (
    firebase
      .firestore()
      .collection("user_trips_history")
      .where("can_view", "==", UID)
      // .doc(id)
      .get()
      .then((data) => {
        let tripData = [];
        data.forEach((doc) => {
          // console.log(doc.id, " => ", doc.data());
          tripData.push([doc.id, doc.data()]);
        });

        return tripData;
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      })
  );
}

function uploadImage(file) {
  let storageRef = firebase.storage().ref(file.name);
  return storageRef.put(file).then((snapshot) => {
    return snapshot.ref.getDownloadURL();
  });
}

function storeProfileData(name, email, photoUrl /*, UID*/) {
  console.log("store profile data");
  console.log(photoUrl);
  return (
    firebase
      .firestore()
      .collection("account_data")
      // .doc()
      // .set(
      .add({ name: name, email: email, picture_url: photoUrl }) /*, uid: UID*/
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        return docRef.id;
      })
  );
}

function getProfileData(uid) {
  return firebase
    .firestore()
    .collection("account_data")
    .doc(uid)
    .get()
    .then((doc) => {
      // console.log(doc);
      // console.log(doc.data());

      return doc.data();
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

function storeAccountData(email, name, uid) {
  return (
    firebase
      .firestore()
      .collection("account_data")
      .doc(`${uid}`)
      .set({ email: email, name: name, uid: uid })
      // .add({ email: email, name: name })
      .then((docRef) => {
        // console.log("Document written with ID: ", docRef.id);
        // return docRef.id;
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      })
  );
}

function deleteTripData(tripID) {
  firebase
    .firestore()
    .collection("user_trips_history")
    .doc(tripID)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

function addShareEmail(tripID, email) {
  // return (
  firebase
    .firestore()
    .collection("user_trips_history")
    .doc(tripID)
    .update({ share: email })
    // .add({ email: email, name: name })
    .then((docRef) => {
      // console.log("Document written with ID: ", docRef.id);
      // return docRef.id;
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  // );
}

function removeShareEmail(tripID, email) {
  firebase
    .firestore()
    .collection("user_trips_history")
    .doc(tripID)
    .delete({ share: email })
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
}

export {
  getAttractionData,
  fireAuthLogIn,
  fireAuthSignUp,
  fireAuthLogOut,
  firebaseGoogle,
  checkUserStatus,
  storeEventsData,
  getEventsData,
  getTripDataByUID,
  getTripDataByCanEdit,
  getTripDataByCanView,
  uploadImage,
  storeProfileData,
  getProfileData,
  storeAccountData,
  deleteTripData,
  addShareEmail,
  removeShareEmail,
};

// user.displayName: 顯示名稱
// user.email: 電子信箱
// user.emailVerified: 這個電子信箱是否有驗證
// user.photoURL: 大頭照的路徑
// user.uid: Firebase Auth 派給這個使用者的 User ID
