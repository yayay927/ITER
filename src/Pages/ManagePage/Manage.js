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
  deleteTripData,
} from "../../Utils/firebase.js";
import Swal from "sweetalert2";
import { getDefaultNormalizer } from "@testing-library/dom";
import ListModal from "./ListModal";
import Joyride from "react-joyride";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  // display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const Manage = styled.div`
  margin-top: 100px;
  height: 60%;
`;
// const Message = styled.div`
//   margin: 50px auto;
//   width: 50%;
//   font-size: 30px;
//   font-weight: bolder;
// `;
const Profile = styled.div`
  max-width: 1280px;
  margin: 50px auto;
  margin-bottom: 0;
  width: 50%;
  /* border-bottom: 1px solid darkblue; */
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
  font-size: 60px;
  width: fit-content;
  font-family: "Allura";
  font-weight: bold;
`;
// const UserID = styled.div`
//   margin: 0px auto;
//   font-size: 30px;
//   width: fit-content;
// `;
const Email = styled.div`
  margin: 0px auto;
  font-size: 40px;
  width: fit-content;
  font-family: "Allura";
`;
const LogOut = styled.button`
  display: block;
  margin: 20px auto;
  font-size: 15px;
  /* width: fit-content; */
  cursor: pointer;
  font-family: "QuickSand";
  border-radius: 20px;
  border: 1px lightgrey solid;
  padding: 8px;
  border: none;
  padding: 10px;
  :hover {
    color: white;
    background-color: #91ccb9;
  }
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
  /* margin-top: 100px; */
  width: 70%;
  margin: 0 auto;
`;
const Current = styled.div`
  margin-top: 3%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #91ccb9;
  height: 250px;
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
`;
const Table = styled.table`
  /* margin-top: 10px; */
  width: calc(100% - 120px);
  /* border-collapse: collapse; */
  background-color: #c1dbd5;
  /* opacity: 0.5; */
  display: block;
  height: 220px;
  /* overflow-y: scroll; */
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
`;
const Tr = styled.tr`
  height: 60px;
  /* background-color: #91ccb9; */
  border-radius: 10px;
  border: none;
`;
const Td = styled.td`
  /* width: 25%; */
`;
const TimeTd = styled.td`
  font-size: 15px;
`;
const EmailTd = styled.td`
  font-size: 15px;
`;
const TableCity = styled.td`
  /* width: 20%; */
  /* cursor: pointer; */
  font-weight: bold;

  /* :hover {
    color: white;
    font-weight: bold;
    font-size: 28px;
  } */
`;

const TBody = styled.tbody`
  /* border: 1px solid lightgrey; */
  align-items: center;
  font-size: 20px;
  width: 100%;
  display: block;
  height: 180px;
  overflow-y: scroll;
`;

// const TripName = styled.div`
//   text-decoration: underline;
// `;
// const Location = styled.div`
//   cursor: pointer;
// `;

// const Owner = styled.div`
//   width: 100px;
// `;
// const Access = styled.div`
//   width: 100px;
// `;
// const CanEdit = styled.div`
//   width: 100px;
// `;
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
  :hover {
    color: white;
    background-color: #eedd42;
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
  :hover {
    color: white;
    background-color: #eedd42;
  }
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
  // console.log(UID);
  // UID = "test9@gmail.com";
  const [ownerEmail, setOwnerEmail] = useState([]);
  const [profileEmail, setProfileEmail] = useState([]);
  const [listToggle, setListToggle] = useState(false);
  const [run, setRun] = useState(false);
  const [steps, setSteps] = useState([
    {
      target: ".step-1",
      content: "You can manage current and history trips here.",
      placement: "center",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const FadingBackground = styled(BaseModalBackground)`
    opacity: ${(props) => props.opacity};
    /* opacity: 0.2; */
    transition: all 0.3s ease-in-out;
    /* background-color: yellow; */
    background-color: rgba(0, 0, 0, 0.06);
  `;

  if (UID === undefined) {
    history.push(`/error`);
  }

  function EditShareList() {
    // console.log("list button clicked");
    // setListToggle(true);
    // return <ListModal></ListModal>;

    function toggleModal(e) {
      setOpacity(0);
      setIsOpen(!isOpen);
    }

    function afterOpen() {
      setTimeout(() => {
        setOpacity(1);
      }, 100);
    }

    function beforeClose() {
      return new Promise((resolve) => {
        setOpacity(0);
        setTimeout(resolve, 300);
      });
    }

    return (
      <div>
        <button onClick={toggleModal}>Open modal</button>
        <StyledModal
          isOpen={isOpen}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          onBackgroundClick={toggleModal}
          onEscapeKeydown={toggleModal}
          opacity={opacity}
          backgroundProps={{ opacity }}
        >
          <span>I am a modal!</span>
          <div>
            <input></input>
            <button></button>
          </div>
          <button onClick={toggleModal}>Close me</button>
        </StyledModal>
      </div>
    );
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("1");
      if (user) {
        console.log(user.email);
        setLoginEmail(user.email);
      } else {
        console.log("no current user");
        Swal.fire("Please log in first.");
        history.push("/");
      }
    });

    var user = firebase.auth().currentUser;
    console.log(user);
    console.log("2");
  }, []);

  useEffect(() => {
    var user = firebase.auth().currentUser;
    console.log(user);
    console.log("3");
  }, []);

  // useEffect(() => {
  //   Swal.fire("You can manage current and history trips here.");
  // }, []);

  useEffect(() => {
    const renderProfileData = async () => {
      let resProfileData = await getProfileData(UID);
      // console.log(loginEmail);
      console.log("4");
      setProfileData(resProfileData);
      setProfileEmail(resProfileData.email);
    };
    renderProfileData();
  }, []);
  // console.log(profileData);

  useEffect(() => {
    firebase
      .firestore()
      .collection("user_trips_history")
      .where("owner", "==", UID)
      .onSnapshot((doc) => {
        console.log(doc);
      });
  }, []);

  const renderOwnEventsData = async () => {
    let tripData = await getTripDataByUID(UID);
    console.log(tripData);
    setTrip(tripData);
  };

  useEffect(() => {
    renderOwnEventsData();
  }, []);
  // console.log(trip);

  console.log(profileEmail);

  // let shareChange = firebase
  //   .firestore()
  //   .collection("user_trips_history")
  //   .where("share", "==", UID)
  //   .onSnapshot((doc) => {
  //     console.log(doc);
  //   });

  const renderEventsData = async () => {
    let tripDataEdit = await getTripDataByCanEdit(UID); //profileEmail //UID
    console.log(tripDataEdit);
    setTripEdit(tripDataEdit);
  };

  useEffect(() => {
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

  function closeShareList() {
    console.log("close list button");
    setListToggle(false);
    // return <ListModal></ListModal>;
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
      <ModalProvider backgroundComponent={FadingBackground}>
        <Manage className="step-1">
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
                    <Td style={{ width: "200px" }}>Edit</Td>
                  </TrHead>
                </THead>
                <TBody>
                  {trip.map((trip) => {
                    console.log(trip);
                    const city = trip[1].city;
                    const time = trip[1].createTime;
                    const share = trip[1].share;
                    const tripID = trip[0];

                    /* const owner = trip[1].owner; */

                    return (
                      <Tr>
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
                          {share}
                          {/* <EditList>List</EditList> */}
                          <EditShareList />
                          {listToggle === true && <ListModal></ListModal>}
                          {/* {listToggle === true ? <ListModal></ListModal>: null} */}
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
                        <EmailTd style={{ width: "220px" }}>
                          {ownerEmail}
                        </EmailTd>
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
        <Joyride run={true} steps={steps} continuous={true}></Joyride>
      </ModalProvider>
    </div>
  );
}

export default ManageSchedule;
