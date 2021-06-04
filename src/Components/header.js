import styled from "styled-components";
import anchor from "./anchor.png";
import user from "./user.png";
import suitcaseNew from "./suitcaseNew.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  fireAuthLogIn,
  fireAuthSignUp,
  fireAuthLogOut,
  firebaseGoogle,
  storeAccountData,
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
  line-height: 40px;
`;
const LogIn = styled.div`
  height: 50px;
  margin: 10px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  line-height: 40px;
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

  let UID = "GMRfBP2uJVcIeG3pGGfJHXLTG4e2";
  function managePage() {
    history.push(`/manage?number=${UID}`);
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
        storeAccountData(login, name);
        fireAuthSignUp(login, password);

        return { name: name, login: login, password: password };
      },
      // }).then((result) => {
      //   if (result.value.name && result.value.login && result.value.password) {
      //     Swal.fire(
      //       `
      //       Name: ${result.value.name}
      //       Login: ${result.value.login}
      //       Password: ${result.value.password}
      //     `.trim()
      //     );
      //   }
    });
  }
  async function login() {
    await Swal.fire({
      title: "Login",
      html: `<input type="text" id="login" class="swal2-input" placeholder="Email">
      <input type="password" id="password" class="swal2-input" placeholder="Password"><h5>* Password should be at least 6 digits</h5>`,
      confirmButtonText: "Sign in",
      focusConfirm: false,
      showCancelButton: true,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector("#login").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`);
        } else {
          Swal.fire("Welcome back!");
        }

        fireAuthLogIn(login, password);
        return { login: login, password: password };
      },
      // }).then((result) => {
      //   Swal.fire(
      //     `
      //     Login: ${result.value.login}
      //     Password: ${result.value.password}
      //   `.trim()
      //   );
    });
  }

  return (
    <div className="App">
      <TheHeader className="App-header">
        <a href="../">
          <Logo src={anchor} />
        </a>
        <form onSubmit={getParamValue}>
          {/* <Input
            placeholder="Search a city you want to go"
            onChange={(e) => setInputValue(e.target.value)}
          /> */}
        </form>
        <Block>
          <SignUp onClick={signUp}>Signup</SignUp>
          <LogIn onClick={login}>Login</LogIn>
          <a onClick={managePage}>
            <Logo src={suitcaseNew} />
          </a>
          {/* <a href="../verification">
            <Logo src={user} />
          </a> */}
        </Block>
      </TheHeader>
    </div>
  );
}

export default Header;
