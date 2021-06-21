//Manage trips page
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  getTripDataByUID,
  getTripDataByCanEdit,
  getProfileData,
  checkUserStatus,
  deleteTripData,
  addShareEmail,
  removeShareEmail,
} from "../../Utils/firebase.js";
import Swal from "sweetalert2";
import items from "../../images/items.jpg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import EditShareList from "./EditShareList.js";

// const StyledModal = Modal.styled`
//   height: 20rem;
//   width: 20rem;
//   align-items: center;
//   justify-content: center;
//   background-color: white;
//   /* border: none; */
//   border-radius: 10px;
//   /*opacity: ${(props) => props.opacity};*/
//   position: relative;
//   /*transition: all 0.3s ease-in-out;*/
// `;

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };

const Manage = styled.div`
  margin-top: 55px;
  /* height: 60%; */
  height: 90vh;
  overflow: auto;
  /* height: calc(100vh-120px); */
`;

const Profile = styled.div`
  max-width: 1280px;
  margin: 3vh auto;
  margin-bottom: 0;
  /* margin-top: 50px; */
  width: 30%;
  background-color: rgb(57, 80, 73, 0.3);
  /* background-color: rgb(145, 204, 185, 0.5); */
  border-radius: 40px;
  @media (min-width: 1280px) {
    margin-top: 10vh;
  }
  /* border-bottom: 1px solid darkblue; */
`;

const Name = styled.div`
  margin: 0px auto;
  font-size: 60px;
  width: fit-content;
  font-family: "Allura";
  font-weight: bold;
  color: white;
  @media (max-width: 960px) {
    font-size: 7vw;
  }
`;

const Email = styled.div`
  margin: 0px auto;
  font-size: 40px;
  width: fit-content;
  font-family: "Allura";
  color: white;
  @media (max-width: 960px) {
    font-size: 5vw;
  }
`;

const Trips = styled.div`
  /* margin-top: 100px; */
  width: 70%;
  margin: 0 auto;
  background-color: rgb(57, 80, 73, 0.3);
  border-radius: 25px;
`;
const Current = styled.div`
  margin-top: 30px;
  /* margin-top: 3%; */
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #91ccb9;
  /* height: 250px; */
  /* border: none; */
`;
const CurrentTrips = styled.div`
  /* margin-top: 50px; */
  height: 220px;
  border-right: 1px solid lightgrey;
  width: 150px;
  margin-right: 15px;
  margin-left: 15px;
  display: block;
  position: inline-block;
  font-weight: bold;
  font-size: 30px;
  color: #eedd42;

  /* background-color: rgb(255, 255, 255, 0.7); */
  /* background-color: rgb(57, 80, 73, 0.3); */
  /* text-align: center; */
`;
const Table = styled.table`
  /* margin-top: 10px; */
  width: calc(100% - 120px);
  /* border-collapse: collapse; */
  /* background-color: #c1dbd5; */
  /* background-color: rgb(57, 80, 73, 0.3); */
  /* opacity: 0.5; */
  display: block;
  /* height: 220px; */
  /* overflow-y: scroll; */
  margin: 10px;
`;

const THead = styled.thead`
  border-bottom: 1px solid lightgrey;
  align-items: center;
  height: 30px;
  line-height: 30px;
  /* margin-top: 20px; */
  /* display: flex; */
  /* justify-content: space-around; */
  /* height: 200px; */
  width: 100%;
  /* margin-bottom: 20px; */
  font-weight: bold;
  font-size: 22px;
  display: block;
`;
const TrHead = styled.tr`
  /* height: 60px; */
  line-height: 20px;
`;
const Tr = styled.tr`
  height: 60px;
  /* background-color: #91ccb9; */
  border-radius: 10px;
  border: none;
`;
const Td = styled.td``;
const TimeTd = styled.td`
  font-size: 15px;
`;
const EmailTd = styled.td`
  font-size: 15px;
`;
const TableCity = styled.td`
  font-weight: bold;
`;

const TBody = styled.tbody`
  /* border: 1px solid lightgrey; */
  align-items: center;
  font-size: 20px;
  width: 100%;
  display: block;
  /* height: 180px; */
  /* overflow-y: scroll; */
`;

const EditTd = styled.td`
  display: flex;
`;
const EditTrip = styled.button`
  cursor: pointer;
  font-family: "QuickSand";
  font-size: 16px;
  margin: 5px;
  border: none;
  border-radius: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255, 0.3);
  border: 1px solid lightgrey;
  /* color: darkgrey; */
  :hover {
    color: white;
    background-color: #eedd42;
    border: 1px solid #eedd42;
  }
`;
const EditList = styled.button`
  cursor: pointer;
  font-family: "QuickSand";
  font-size: 16px;
  margin: 5px;
  border: none;
  border-radius: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255, 0.3);
  border: 1px solid lightgrey;
  :hover {
    color: white;
    background-color: #eedd42;
    border: 1px solid #eedd42;
  }
`;

const Past = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  border-radius: 20px;
  border: 1px solid #91ccb9;
  height: 250px;
`;
const HistoryTrips = styled.div`
  /* margin-top: 50px; */
  height: 220px;
  border-right: 1px solid lightgrey;
  width: 150px;
  margin-right: 15px;
  margin-left: 15px;
  display: block;
  position: inline-block;
  font-weight: bold;
  font-size: 30px;
  color: #eedd42;
  /* background-color: rgb(57, 80, 73, 0.3); */
`;

// const FadingBackground = styled(BaseModalBackground)`
//   opacity: ${(props) => props.opacity};
//   /* opacity: 0.2; */
//   transition: all 0.3s ease-in-out;
//   /* background-color: yellow; */
//   background-color: rgba(0, 0, 0, 0.1);
// `;

function ManageSchedule() {
  let url = window.location.search;
  let params = new URLSearchParams(url);
  let UID = params.get("number");
  let history = useHistory();
  const [trip, setTrip] = useState([]);
  const [tripEdit, setTripEdit] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [ownerEmail, setOwnerEmail] = useState([]);

  if (UID === undefined) {
    history.push(`/error`);
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("current user " + user.email);
        // setLoginEmail(user.email);
      } else {
        console.log("no current user");
        Swal.fire("Please log in first.");
        history.push("/");
      }
    });

    var user = firebase.auth().currentUser;
    console.log("current user " + user);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    var user = firebase.auth().currentUser;
    console.log("current user " + user);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const renderProfileData = async () => {
      let resProfileData = await getProfileData(UID);
      // console.log(loginEmail);
      setProfileData(resProfileData);
    };
    renderProfileData();
    //eslint-disable-next-line
  }, []);
  // console.log(profileData);

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("user_trips_history")
  //     .where("owner", "==", UID)
  //     .onSnapshot((doc) => {
  //       console.log(doc);
  //     });
  //   //eslint-disable-next-line
  // }, []);

  const renderOwnEventsData = async () => {
    let tripData = await getTripDataByUID(UID);
    console.log(tripData);
    setTrip(tripData);
  };

  useEffect(() => {
    renderOwnEventsData();
    //eslint-disable-next-line
  }, []);
  // console.log(trip);

  // console.log(profileEmail);

  // let shareChange = firebase
  //   .firestore()
  //   .collection("user_trips_history")
  //   .where("share", "==", UID)
  //   .onSnapshot((doc) => {
  //     console.log(doc);
  //   });

  const getEventsData = async () => {
    let tripDataEdit = await getTripDataByCanEdit(UID); //profileEmail //UID
    console.log(tripDataEdit);
    setTripEdit(tripDataEdit);
  };

  useEffect(() => {
    getEventsData();

    //eslint-disable-next-line
  }, []);
  console.log(tripEdit);

  // useEffect(() => {
  //   const renderEventsData = async () => {
  //     let tripDataView = await getTripDataByCanView(UID);
  //     // console.log(tripDataView);
  //     setTripView(tripDataView);
  //   };
  //   renderEventsData();
  //   //eslint-disable-next-line
  // }, []);
  // // console.log(tripView);

  function checkTrip(tripCity, tripID) {
    if (tripCity === "Buenos Aires") {
      tripCity = "BuenosAires";
    } else if (tripCity === "Cape Town") {
      tripCity = "CapeTown";
    }
    history.push(`/confirm?city=${tripCity}&number=${tripID}`);
    // document.location.href = `../confirm?city=${tripCity}&number=${tripUID}`;
  }

  function editTrip(tripCity, tripID) {
    if (tripCity === "Buenos Aires") {
      tripCity = "BuenosAires";
    } else if (tripCity === "Cape Town") {
      tripCity = "CapeTown";
    }
    history.push(`/city/${tripCity}?number=${tripID}`);
    // history.push(`/confirm?city=${tripCity}&number=${tripID}`);
    // document.location.href = `../confirm?city=${tripCity}&number=${tripUID}`;
  }

  async function deleteTrip(tripID) {
    console.log(tripID);

    await Swal.fire({
      title: "Are you sure?",
      // text: "Event: " + info.event.title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Trip successfully deleted!", "success");
        deleteTripData(tripID);
        renderOwnEventsData();
      } else {
      }
    });
  }

  return (
    <div
      style={{
        background: `url(${items})`,
        backgroundSize: `cover`,
        // opacity: 0.6,
        // height: "100vh",
        // overflow: "scroll",
      }}
    >
      <Manage>
        <div style={{ height: "10px" }}></div>
        <Profile>
          <Name>{profileData.name}</Name>
          <Email>{profileData.email}</Email>
        </Profile>
        <Trips>
          <Current>
            <CurrentTrips>My Trips</CurrentTrips>
            <Table>
              <THead>
                <TrHead>
                  <Td style={{ width: "200px" }}>City</Td>
                  <Td style={{ width: "200px" }}>Create date</Td>
                  <Td style={{ width: "220px" }}>Share with</Td>
                  <Td style={{ width: "200px" }}>Trip</Td>
                </TrHead>
              </THead>
              <TBody>
                {trip.map((trip, i) => {
                  /* console.log(trip); */
                  const city = trip[1].city;
                  const time = trip[1].createTime;
                  const share = trip[1].share;
                  const tripID = trip[0];

                  return (
                    <Tr key={i}>
                      {/* <TripName onClick={() => checkTrip(city, UID)}>
                      {tripName}
                    </TripName> */}
                      <TableCity
                        style={{ width: "200px" }}
                        // onClick={() => checkTrip(city, tripID)}
                      >
                        {city}
                      </TableCity>

                      <TimeTd style={{ width: "200px" }}>{time}</TimeTd>

                      <EmailTd style={{ width: "220px" }}>
                        {/* {share} */}
                        {/* <EditList>List</EditList> */}
                        <EditShareList
                          tripID={tripID}
                          share={share}
                        ></EditShareList>
                        {/* {EditShareList(tripID, share)} */}
                      </EmailTd>
                      <EditTd style={{ width: "200px" }}>
                        <EditTrip onClick={() => editTrip(city, tripID)}>
                          Edit
                        </EditTrip>
                        <EditTrip onClick={() => checkTrip(city, tripID)}>
                          Print
                        </EditTrip>

                        <EditList onClick={() => deleteTrip(tripID)}>
                          Delete
                        </EditList>
                      </EditTd>
                    </Tr>
                  );
                })}
              </TBody>
            </Table>
          </Current>

          <Past>
            <HistoryTrips>Shared Trips</HistoryTrips>
            <Table>
              <THead>
                <TrHead>
                  <Td style={{ width: "200px" }}>City</Td>
                  <Td style={{ width: "200px" }}>Create date</Td>
                  <Td style={{ width: "220px" }}>Owner</Td>
                  <Td style={{ width: "200px" }}>Edit</Td>
                </TrHead>
              </THead>
              <TBody>
                {tripEdit.map((tripEdit) => {
                  const owner = tripEdit[1].owner;
                  const city = tripEdit[1].city;
                  const time = tripEdit[1].createTime;
                  const tripID = tripEdit[0];

                  let userData;
                  const renderProfileData = async () => {
                    userData = await getProfileData(owner);
                    setOwnerEmail(userData.email);
                  };
                  renderProfileData();

                  return (
                    <Tr>
                      <TableCity
                        style={{ width: "200px" }}
                        onClick={() => checkTrip(city, tripID)}
                      >
                        {city}
                      </TableCity>
                      <TimeTd style={{ width: "200px" }}>{time}</TimeTd>
                      <EmailTd style={{ width: "220px" }}>{ownerEmail}</EmailTd>
                      <EditTd style={{ width: "200px" }}>
                        <EditTrip onClick={() => editTrip(city, tripID)}>
                          Clone
                        </EditTrip>
                      </EditTd>
                    </Tr>
                  );
                })}
              </TBody>
            </Table>
          </Past>
        </Trips>
      </Manage>
    </div>
  );
}

export default ManageSchedule;
