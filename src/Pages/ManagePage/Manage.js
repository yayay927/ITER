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
} from "../../Utils/firebase.js";
import Swal from "sweetalert2";
import items from "../../images/items.jpg";
import EditShareList from "./EditShareList.js";
import { useSelector, useDispatch } from "react-redux";

const ManageContainer = styled.div`
  background: 
  /* linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2)), */ url(${items});
  background-size: cover;
`;

const Manage = styled.div`
  margin-top: 55px;
  height: 90vh;
  overflow: auto;
`;

const Profile = styled.div`
  max-width: 1280px;
  margin: 3vh auto;
  margin-bottom: 0;
  width: 30%;
  background-color: rgb(57, 80, 73, 0.5);
  border-radius: 40px;
  @media (min-width: 1280px) {
    margin-top: 10vh;
  }
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
  width: 70%;
  margin: 0 auto;
  background-color: rgb(57, 80, 73, 0.8);
  border-radius: 25px;
  color: white;
`;
const Current = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 1px solid rgb(57, 80, 73, 0.3);
  @media (max-width: 960px) {
    display: block;
  }
`;
const CurrentTrips = styled.div`
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
  @media (max-width: 960px) {
    width: fit-content;
    border: none;
    margin: 10px auto;
    height: auto;
    font-size: 6vw;
  }
`;
const Table = styled.table`
  width: calc(100% - 120px);
  display: block;
  margin: 10px;
  @media (max-width: 960px) {
    width: 95%;
  }
`;

const THead = styled.thead`
  border-bottom: 1px solid lightgrey;
  align-items: center;
  height: 30px;
  line-height: 30px;
  width: 100%;
  font-weight: bold;
  font-size: 22px;
  display: block;
  @media (max-width: 400px) {
    padding-bottom: 15px;
  }
`;
const TrHead = styled.tr`
  line-height: 20px;
`;
const Tr = styled.tr`
  height: 60px;
  border-radius: 10px;
  border: none;
`;
const Td = styled.td`
  @media (max-width: 960px) {
    font-size: 2vw;
  }
`;
const TimeTd = styled.td`
  font-size: 15px;
  @media (max-width: 960px) {
    font-size: 3vw;
  }
`;
const EmailTd = styled.td`
  font-size: 15px;
`;
const TableCity = styled.td`
  font-weight: bold;
  @media (max-width: 960px) {
    font-size: 4vw;
  }
`;

const TBody = styled.tbody`
  align-items: center;
  font-size: 20px;
  width: 100%;
  display: block;
`;

const EditTd = styled.td`
  /* display: flex; */
  @media (max-width: 960px) {
    /* display: block; */
  }
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
  :hover {
    color: white;
    background-color: rgb(238, 221, 66, 0.5);
    border: 1px solid #eedd42;
  }
  @media (max-width: 400px) {
    font-size: 3vw;
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
    background-color: rgb(238, 221, 66, 0.5);
    border: 1px solid #eedd42;
  }
  @media (max-width: 400px) {
    font-size: 3vw;
  }
`;

const Past = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  border-radius: 20px;
  border: 1px solid rgb(57, 80, 73, 0.3);
  height: 250px;
  @media (max-width: 960px) {
    display: block;
  }
`;
const HistoryTrips = styled.div`
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
  @media (max-width: 960px) {
    width: fit-content;
    border: none;
    margin: 10px auto;
    height: auto;
    font-size: 6vw;
  }
`;

function ManageSchedule() {
  let url = window.location.search;
  let params = new URLSearchParams(url);
  let UID = params.get("number");
  let history = useHistory();
  const [trip, setTrip] = useState([]);
  const [tripEdit, setTripEdit] = useState([]);
  const [profileData, setProfileData] = useState([]);
  const [ownerEmail, setOwnerEmail] = useState([]);
  const userEmail = useSelector((state) => state.userEmail);
  const userUID = useSelector((state) => state.userUID);

  console.log(userEmail);
  console.log(userUID);

  if (UID === undefined) {
    history.push(`/error`);
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("current user " + user.email);
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
      setProfileData(resProfileData);
    };
    renderProfileData();
    //eslint-disable-next-line
  }, []);

  const renderOwnEventsData = async () => {
    let tripData = await getTripDataByUID(UID);
    console.log(tripData);
    setTrip(tripData);
  };

  useEffect(() => {
    renderOwnEventsData();
    //eslint-disable-next-line
  }, []);

  const getEventsData = async () => {
    let tripDataEdit = await getTripDataByCanEdit(UID);
    console.log(tripDataEdit);
    setTripEdit(tripDataEdit);
  };

  useEffect(() => {
    getEventsData();

    //eslint-disable-next-line
  }, []);
  console.log(tripEdit);

  function checkTrip(tripCity, tripID) {
    if (tripCity === "Buenos Aires") {
      tripCity = "BuenosAires";
    } else if (tripCity === "Cape Town") {
      tripCity = "CapeTown";
    }
    history.push(`/confirm?city=${tripCity}&number=${tripID}`);
  }

  function editTrip(tripCity, tripID) {
    if (tripCity === "Buenos Aires") {
      tripCity = "BuenosAires";
    } else if (tripCity === "Cape Town") {
      tripCity = "CapeTown";
    }
    history.push(`/city/${tripCity}?number=${tripID}`);
  }

  async function deleteTrip(tripID) {
    console.log(tripID);

    await Swal.fire({
      title: "Are you sure?",
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
    <ManageContainer>
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
                  const city = trip[1].city;
                  const time = trip[1].createTime;
                  const share = trip[1].share;
                  const tripID = trip[0];

                  return (
                    <Tr key={i}>
                      <TableCity style={{ width: "200px" }}>{city}</TableCity>
                      <TimeTd style={{ width: "200px" }}>{time}</TimeTd>
                      <EmailTd style={{ width: "220px" }}>
                        <EditShareList
                          tripID={tripID}
                          share={share}
                        ></EditShareList>
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
    </ManageContainer>
  );
}

export default ManageSchedule;
