//Sign up and Log in page
import styled from "styled-components";
import {
  fireAuthLogIn,
  fireAuthSignUp,
  fireAuthLogOut,
  firebaseGoogle,
  storeAccountData,
} from "../../Utils/firebase";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBIcon,
  MDBModalFooter,
} from "mdbreact";

const Verification = styled.div`
  margin-top: 80px;
  height: 500px;
`;
const Choices = styled.div`
  display: flex;
`;

// const FormPage = () => {
//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <MDBCard>
//             <MDBCardBody className="mx-4">
//               <div className="text-center">
//                 <h3 className="dark-grey-text mb-5">
//                   <strong>Sign in</strong>
//                 </h3>
//               </div>
//               <MDBInput
//                 label="Your email"
//                 group
//                 type="email"
//                 validate
//                 error="wrong"
//                 success="right"
//               />
//               <MDBInput
//                 label="Your password"
//                 group
//                 type="password"
//                 validate
//                 containerClass="mb-0"
//               />
//               <p className="font-small blue-text d-flex justify-content-end pb-3">
//                 Forgot
//                 <a href="#!" className="blue-text ml-1">
//                   Password?
//                 </a>
//               </p>
//               <div className="text-center mb-3">
//                 <MDBBtn
//                   type="button"
//                   gradient="blue"
//                   rounded
//                   className="btn-block z-depth-1a"
//                 >
//                   Sign in
//                 </MDBBtn>
//               </div>
//               <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
//                 or Sign in with:
//               </p>
//               <div className="row my-3 d-flex justify-content-center">
//                 <MDBBtn
//                   type="button"
//                   color="white"
//                   rounded
//                   className="mr-md-3 z-depth-1a"
//                 >
//                   <MDBIcon
//                     fab
//                     icon="facebook-f"
//                     className="blue-text text-center"
//                   />
//                 </MDBBtn>
//                 <MDBBtn
//                   type="button"
//                   color="white"
//                   rounded
//                   className="mr-md-3 z-depth-1a"
//                 >
//                   <MDBIcon fab icon="twitter" className="blue-text" />
//                 </MDBBtn>
//                 <MDBBtn
//                   type="button"
//                   color="white"
//                   rounded
//                   className="z-depth-1a"
//                 >
//                   <MDBIcon fab icon="google-plus-g" className="blue-text" />
//                 </MDBBtn>
//               </div>
//             </MDBCardBody>
//             <MDBModalFooter className="mx-5 pt-3 mb-1">
//               <p className="font-small grey-text d-flex justify-content-end">
//                 Not a member?
//                 <a href="#!" className="blue-text ml-1">
//                   Sign Up
//                 </a>
//               </p>
//             </MDBModalFooter>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

function VerificationStep() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // Redux 寫法
  // const dispatch = useDispatch();
  // const userEmail = useSelector((state) => state.userEmail);
  // const userPassword = useSelector((state) => state.userPassword);
  // const userName = useSelector((state) => state.userName);
  // const userUID = useSelector((state) => state.userUID);
  // dispatch({ type: "UPDATE_USERNAME", data: firebaseActivityData });
  // dispatch({ type: "UPDATE_USERUID", data: firebaseActivityData });

  // const handleChangeEmailInput = (e) => {
  //   setEmail(e.target.value);
  //   // console.log(email);
  //   // dispatch({ type: "UPDATE_USEREMAIL", data: e.target.value });
  // };
  // const handleChangePasswordInput = (e) => {
  //   setPassword(e.target.value);
  //   // console.log(password);
  //   // dispatch({ type: "UPDATE_USERPASSWORD", data: e.target.value });
  // };

  // const handleChangeNameInput = (e) => {
  //   setName(e.target.value);
  //   // console.log(name);
  //   // dispatch({ type: "UPDATE_USERNAME", data: e.target.value });
  // };

  async function logIn() {
    await Swal.fire({
      title: "Login",
      html: `<input type="text" id="login" class="swal2-input" placeholder="Email">
      <input type="password" id="password" class="swal2-input" placeholder="Password"><h5>* Password should be at least 6 digits</h5>`,
      confirmButtonText: "Sign in",
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector("#login").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!login || !password) {
          Swal.showValidationMessage(`Please enter login and password`);
        }

        fireAuthLogIn(login, password);
        return { login: login, password: password };
      },
    }).then((result) => {
      Swal.fire(
        `
        Login: ${result.value.login}
        Password: ${result.value.password}
      `.trim()
      );
    });
  }

  async function signUp() {
    await Swal.fire({
      title: "Sign Up",
      html: `<input type="name" id="name" class="swal2-input" placeholder="Name"><input type="text" id="login" class="swal2-input" placeholder="Email">
      <input type="password" id="password" class="swal2-input" placeholder="Password"><h5>* Password should be at least 6 digits</h5>`,
      confirmButtonText: "Sign up",
      focusConfirm: false,
      preConfirm: () => {
        const name = Swal.getPopup().querySelector("#name").value;
        const login = Swal.getPopup().querySelector("#login").value;
        const password = Swal.getPopup().querySelector("#password").value;
        if (!login || !password || !name) {
          Swal.showValidationMessage(`Please enter name, email and password`);
        }

        fireAuthSignUp(login, password);
        storeAccountData(login, name);
        return { name: name, login: login, password: password };
      },
    }).then((result) => {
      Swal.fire(
        `
        Name: ${result.value.name}
        Login: ${result.value.login}
        Password: ${result.value.password}
      `.trim()
      );
    });
  }

  async function google() {
    await firebaseGoogle();
  }
  async function logOut() {
    await fireAuthLogOut();
  }
  console.log(typeof logOut());
  console.log(typeof google());

  return (
    <div>
      <Verification>
        {/* <div>
          <input
            type="email"
            placeholder="email"
            onChange={handleChangeEmailInput}
          ></input>
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            onChange={handleChangePasswordInput}
          ></input>
        </div>
        <div>
          <input
            type="name"
            placeholder="name"
            onChange={handleChangeNameInput}
          ></input>
        </div> */}
        <Choices>
          <button
            onClick={() => {
              logIn();
            }}
          >
            Log In
          </button>
          <button
            onClick={() => {
              signUp();
            }}
          >
            Sign Up
          </button>

          <div>
            <button onClick={google}>Log In with google</button>
          </div>
          <div>
            <button onClick={logOut}>Log Out</button>
          </div>
        </Choices>
      </Verification>
      {/* <FormPage></FormPage> */}
    </div>
  );
}

export default VerificationStep;
