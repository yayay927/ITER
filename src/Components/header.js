import styled from "styled-components";
import logo2 from "../images/logo2.png";
import suitcaseNew from "../images/suitcaseNew.png";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import {
  fireAuthLogIn,
  fireAuthSignUp,
  storeAccountData,
} from "../Utils/firebase";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
const Profile = styled.img`
  height: 35px;
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
  font-size: 18px;
  :hover {
    color: grey;
  }
`;
const LogIn = styled.div`
  height: 50px;
  margin: 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  line-height: 45px;
  font-size: 18px;
  :hover {
    color: grey;
  }
`;
const LogOut = styled.div`
  height: 50px;
  margin: 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  line-height: 45px;
  font-size: 18px;
  :hover {
    color: grey;
  }
`;

function Header() {
  let history = useHistory();
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

  function managePage() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        console.log(uid, user.email);
        history.push(`/manage?number=${uid}`);
      } else {
        console.log("no current user");
        Swal.fire("Please log in first.");
      }
    });
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
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
    }).then((result) => {
      if (result.isConfirmed) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            console.log("log out successfully");
            Swal.fire("You're logged out", "", "success");
            history.push("/");
          })
          .catch((error) => {
            console.log("log out error");
          });
      }
    });
  }

  return (
    <div className="App">
      <TheHeader className="App-header">
        <Link to="/">
          <Logo src={logo2} />
        </Link>
        <Block>
          {headerView()}
          <div onClick={managePage}>
            <Profile src={suitcaseNew} />
          </div>
        </Block>
      </TheHeader>
    </div>
  );
}

export default Header;
