import styled from "styled-components";
import anchor from "./anchor.png";
import anchorW from "./anchorW.png";
import anchorwhite from "./anchorwhite.png";
import user from "./user.png";
import suitcaseNew from "./suitcaseNew.png";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  fireAuthLogIn,
  fireAuthSignUp,
  fireAuthLogOut,
  storeAccountData,
  checkUserStatus,
} from "../Utils/firebase";
import Swal from "sweetalert2";

const TheHeader = styled.div`
  background-color: #91ccb9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 3;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height: 45px;
  margin: 10px;
  cursor: pointer;
  margin-right: 30px;
  margin-left: 20px;
`;
const SignUp = styled.div`
  height: 50px;
  margin: 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  line-height: 45px;
`;
const LogIn = styled.div`
  height: 50px;
  margin: 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  line-height: 45px;
`;
const LogOut = styled.div`
  height: 50px;
  margin: 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  line-height: 45px;
`;

const Input = styled.input`
  margin: 10px;
  width: 400px;
  height: 40px;
  border-radius: 20px;
  border: 1px lightgray solid;
  font-size: 18px;
  padding-left: 20px;
  outline: none;
`;

function Header() {
  let history = useHistory();
  const [inputValue, setInputValue] = useState("");
  const getParamValue = (event) => {
    event.preventDefault();
    history.push(`/city/${inputValue}`);
    console.log(inputValue);
  };
  const [userAuth, setUserAuth] = useState();

  function headerView() {
    if (userAuth) {
      return (
        <>
          <LogOut onClick={logOut}>Log Out</LogOut>
        </>
      );
    } else {
      return (
        <>
          <SignUp onClick={signUp}>Signup</SignUp>
          <LogIn onClick={login}>Login</LogIn>
        </>
      );
    }
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      setUserAuth(user);
    });
  }, []);

  // let UID = "GMRfBP2uJVcIeG3pGGfJHXLTG4e2";

  function managePage() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        console.log(uid);
        console.log(user.email);
        history.push(`/manage?number=${uid}`);
        // ...
      } else {
        // User is signed out
        // ...
        console.log("no current user");
        Swal.fire("Please log in first.");
        // alert("please log in first");
      }
    });
    // let result = checkUserStatus();
    // console.log(result);
    // history.push(`/manage?number=${UID}`);
    // document.location.href = `../manage?number=${UID}`;
  }

  async function signUp() {
    await Swal.fire({
      title: "Sign Up",
      html: `<input type="name" id="name" class="swal2-input" placeholder="Name"><input type="text" id="login" class="swal2-input" placeholder="Email">
      <input type="password" id="password" class="swal2-input" placeholder="Password"><h5>* Password should be at least 6 digits</h5>`,
      confirmButtonText: "Sign up",
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value;
        const login = Swal.getPopup().querySelector("#login").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!login || !password || !name) {
          Swal.showValidationMessage(`Please enter name, email and password`);
        }

        fireAuthSignUp(login, password).then((r) => {
          storeAccountData(login, name, r);
        });

        return { name: name, login: login, password: password };
      },
      // }).then((result) => {
      //   if (result.value.name && result.value.login && result.value.password) {
      //     Swal.fire(
      //       `
      //         Name: ${result.value.name}
      //         Login: ${result.value.login}
      //         Password: ${result.value.password}
      //       `.trim()
      //     );
      //   }
    });
  }
  async function login() {
    await Swal.fire({
      title: "Login",
      html: `<input type="text" id="login" class="swal2-input" placeholder="Email">
      <input type="password" id="password" class="swal2-input" placeholder="Password"><P>* Test account: test@gmail.com/000000</P>`,
      confirmButtonText: "Sign in",
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector("#login").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`);
        } else {
          fireAuthLogIn(login, password)
            .then(() => {
              Swal.fire("Welcome back!");
            })
            .catch(() => {
              Swal.fire("Wrong email or password. Please try again.");
            });
        }

        return { login: login, password: password };
      },
    });
  }

  async function logOut() {
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

  return (
    <div className="App">
      <TheHeader className="App-header">
        <a href="../">
          <Logo src={anchor} />
        </a>
        <form onSubmit={getParamValue}></form>

        {/* {(() => {
          if (userAuth) {
            return (
              <>
                <SignUp>Log Out</SignUp>
              </>
            );
          } else {
            return (
              <>
                <SignUp onClick={signUp}>Signup</SignUp>
                <LogIn onClick={login}>Login</LogIn>
              </>
            );
          }
        })()} */}

        <Block>
          {headerView()}
          {/* <SignUp onClick={signUp}>Signup</SignUp>
          <LogIn onClick={login}>Login</LogIn> */}
          <div onClick={managePage}>
            <Logo src={suitcaseNew} className="step-4" />
          </div>
        </Block>
      </TheHeader>
    </div>
  );
}

export default Header;
