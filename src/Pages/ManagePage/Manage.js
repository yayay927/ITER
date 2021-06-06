//Manage trips page
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  getTripDataByUID,
  getTripDataByCanEdit,
  getTripDataByCanView,
  uploadImage,
  storeProfileData,
  getProfileData,
  checkUserStatus,
  fireAuthLogOut,
} from "../../Utils/firebase.js";
import Swal from "sweetalert2";
import { getDefaultNormalizer } from "@testing-library/dom";

const Manage = styled.div`
  margin-top: 100px;
`;
// const Message = styled.div`
//   margin: 50px auto;
//   width: 50%;
//   font-size: 30px;
//   font-weight: bolder;
// `;
const Profile = styled.div`
  margin: 50px auto;
  width: 50%;
  border-bottom: 1px solid darkblue;
`;
// const Photo = styled.img`
//   margin: 0 auto;
//   text-align: center;
//   position: inline-block;
//   text-align: center;
//   width: 100px;
//   height: 100px;
//   display: block;
// `;
// const SavePhoto = styled.button``;
const Name = styled.div`
  margin: 0px auto;
  font-size: 30px;
  width: fit-content;
`;
// const UserID = styled.div`
//   margin: 0px auto;
//   font-size: 30px;
//   width: fit-content;
// `;
const Email = styled.div`
  margin: 0px auto;
  font-size: 30px;
  width: fit-content;
`;
const LogOut = styled.button`
  display: block;
  margin: 20px auto;
  font-size: 20px;
  /* width: fit-content; */
  cursor: pointer;
  font-family: "QuickSand";
`;
// const Map = styled.div`
//   margin-top: 100px;
//   width: 80%;
//   margin: 0 auto;
//   height: 300px;
//   border: 1px solid darkgoldenrod;
// `;
// const Marker = styled.div`
//   margin-top: 100px;
// `;
const Trips = styled.div`
  margin-top: 100px;
  width: 80%;
  margin: 0 auto;
`;
const Current = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
`;
const CurrentTrips = styled.div`
  margin-top: 50px;
  height: 250px;
  border-right: 1px solid lightpink;
  width: 150px;
  margin-right: 20px;
  display: block;
  position: inline-block;
  font-weight: bold;
  font-size: 30px;
`;
const Details = styled.div`
  margin-top: 50px;
  width: calc(100% - 120px);
`;
const EachTrip = styled.div`
  border: 1px solid lightgrey;
  align-items: center;
  display: flex;
  justify-content: space-around;
  height: 100px;
  margin-bottom: 10px;
`;
const TripName = styled.div`
  text-decoration: underline;
`;
const Location = styled.div``;
const More = styled.div``;
const Owner = styled.div`
  width: 100px;
`;
const Access = styled.div`
  width: 100px;
`;
const CanEdit = styled.div`
  width: 100px;
`;
// const CanView = styled.div`
//   width: 100px;
// `;
const Date = styled.div``;
const Share = styled.div`
  margin-top: 20px;
`;
const Link = styled.div`
  margin-top: 20px;
`;
const Past = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
`;
const HistoryTrips = styled.div`
  margin-top: 50px;
  height: 250px;
  border-right: 1px solid lightpink;
  width: 150px;
  margin-right: 20px;
  display: block;
  position: inline-block;
  font-weight: bold;
  font-size: 30px;
`;

function ManageSchedule() {
  let url = window.location.search;
  let params = new URLSearchParams(url);
  let UID = params.get("number");
  let history = useHistory();
  const [trip, setTrip] = useState([]);
  const [tripEdit, setTripEdit] = useState([]);
  const [tripView, setTripView] = useState([]);
  const [tripCity, setTripCity] = useState([]);
  const [tripUID, setTripUID] = useState([]);
  // const [photoFile, setPhotoFile] = useState([]);
  // const [photoUrl, setPhotoUrl] = useState([]);
  const [profileData, setProfileData] = useState([]);
  // let UID = "GMRfBP2uJVcIeG3pGGfJHXLTG4e2";
  const [loginEmail, setLoginEmail] = useState([]);
  console.log(UID);
  // UID = "test9@gmail.com";

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("1");
      if (user) {
        console.log(user.email);
        setLoginEmail(user.email);
      } else {
        console.log("no current user");
        Swal.fire("Please log in first.");
      }
    });

    var user = firebase.auth().currentUser;
    console.log(user);
    console.log("2");
  }, []);

  var user = firebase.auth().currentUser;
  console.log(user);
  console.log("3");

  useEffect(() => {
    Swal.fire("You can manage current and history trips here.");
  }, []);

  useEffect(() => {
    const renderProfileData = async () => {
      let resProfileData = await getProfileData(UID);
      // console.log(loginEmail);
      console.log("4");
      setProfileData(resProfileData);
    };
    renderProfileData();
  }, []);
  // console.log(profileData);

  useEffect(() => {
    const renderEventsData = async () => {
      let tripData = await getTripDataByUID(UID);
      console.log(tripData);
      setTrip(tripData);
    };
    renderEventsData();
  }, []);
  // console.log(trip);

  useEffect(() => {
    const renderEventsData = async () => {
      let tripDataEdit = await getTripDataByCanEdit(UID);
      // console.log(tripDataEdit);
      setTripEdit(tripDataEdit);
    };
    renderEventsData();
  }, []);
  // console.log(tripEdit);

  useEffect(() => {
    const renderEventsData = async () => {
      let tripDataView = await getTripDataByCanView(UID);
      // console.log(tripDataView);
      setTripView(tripDataView);
    };
    renderEventsData();
  }, []);
  // console.log(tripView);

  function checkTrip(tripCity, tripUID) {
    history.push(`/confirm?city=${tripCity}&number=${tripUID}`);
    // document.location.href = `../confirm?city=${tripCity}&number=${tripUID}`;
  }

  async function userLogOut() {
    await Swal.fire({
      title: "Do you want to log out?",
      // text: "Event: ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      // fireAuthLogOut();

      if (result.isConfirmed) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            // Sign-out successful.
            console.log("log out successfully");
            // var user = firebase.auth().currentUser.uid;
            // console.log(user + "log out successfully");
            // alert(user + "log out successfully");
            // return;
            Swal.fire("You're logged out", "", "success"); //"Your're logged out'.",
            history.push("/");
          })
          .catch((error) => {
            console.log("log out error");
            // An error happened.
          });
      }
    });
  }

  // function selectPhoto() {
  //   (async () => {
  //     const { value: file } = await Swal.fire({
  //       title: "Select image",
  //       input: "file",
  //       inputAttributes: {
  //         accept: "image/*",
  //         "aria-label": "Upload your profile picture",
  //       },
  //     });
  //     const url = await uploadImage(file);
  //     console.log(url);
  //     setPhotoUrl(url);
  //     storeProfileData("Lara", "lara@gmail.com", url /*, UID*/);

  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = (e) => {
  //         Swal.fire({
  //           title: "Successfully upload! Your uploaded picture",
  //           imageUrl: e.target.result,
  //           imageAlt: "The uploaded picture",
  //         });
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   })();
  // }

  return (
    <div>
      <Manage>
        <Profile>
          {/* <Photo src={photoUrl} onClick={selectPhoto} /> */}
          {/* <form action="/somewhere/to/upload" enctype="multipart/form-data">
            <input
              // name="progressbarTW_img"
              type="file"
              accept="image/gif, image/jpeg, image/png"
              // onChange={(e) => setPhotoFile(e.target.files[0])}
            ></input>
          </form> */}
          {/* <SavePhoto onClick={savePhoto}>Save photo</SavePhoto> */}
          <Name>{profileData.name}</Name>
          <Email>{profileData.email}</Email>
          <LogOut onClick={userLogOut}>Log out</LogOut>
        </Profile>
        <Trips>
          <Current>
            <CurrentTrips>My Trips</CurrentTrips>
            <Details>
              <EachTrip>
                <TripName>Trip Name</TripName>
                <Location>City</Location>
                <More>
                  <Date>Date/ Share/ Link</Date>
                </More>
                {/* <Owner>Owner</Owner> */}
                <CanEdit>Can Edit</CanEdit>
                {/* <CanView>Can View</CanView> */}
              </EachTrip>
              {trip.map((trip) => {
                const city = trip[1].city;
                /* const owner = trip[1].owner; */
                /* const tripName = trip[1].tripTitle; */
                const tripName = "Wander";
                const UID = trip[0];
                return (
                  <EachTrip>
                    <TripName onClick={() => checkTrip(city, UID)}>
                      {tripName}
                    </TripName>
                    <Location>{city}</Location>
                    <More>
                      <Date>2021/05/17~2021/05/28</Date>
                    </More>
                    <CanEdit>Sara</CanEdit>
                  </EachTrip>
                );
              })}
            </Details>
          </Current>
          <Past>
            <HistoryTrips>Shared Trips</HistoryTrips>
            <Details>
              <EachTrip>
                <TripName>Trip Name</TripName>
                <Location>City</Location>
                <More>
                  <Date>Date</Date>
                </More>
                <Owner>Owner</Owner>
                <Access>Access</Access>
              </EachTrip>
              {tripEdit.map((tripEdit) => {
                const city = tripEdit[1].city;
                const owner = tripEdit[1].owner;
                /* const tripName = tripEdit[1].tripTitle; */
                const tripName = "Wander";
                const UID = tripEdit[0];
                /* setTripCity(city); */
                /* setTripUID(UID); */
                return (
                  <EachTrip>
                    <TripName>{tripName}</TripName>
                    <Location>{city}</Location>
                    <More>
                      <Date>2021/05/17~2021/05/28</Date>
                    </More>
                    <Owner>
                      <h5>{owner}</h5>
                    </Owner>
                    <Access>Can edit</Access>
                  </EachTrip>
                );
              })}
            </Details>
          </Past>
        </Trips>
      </Manage>
    </div>
  );
}

export default ManageSchedule;
