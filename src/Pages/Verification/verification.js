//Sign up and Log in page
import styled from "styled-components";
import {
  fireAuthLogIn,
  fireAuthSignUp,
  fireAuthLogOut,
  firebaseGoogle,
} from "../../Utils/firebase";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Verification = styled.div`
  margin-top: 80px;
  height: 500px;
`;

function VerificationStep() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // Redux 寫法
  const dispatch = useDispatch();
  const userEmail = useSelector((state) => state.userEmail);
  const userPassword = useSelector((state) => state.userPassword);
  // const userName = useSelector((state) => state.userName);
  // const userUID = useSelector((state) => state.userUID);

  // dispatch({ type: "UPDATE_USERNAME", data: firebaseActivityData });
  // dispatch({ type: "UPDATE_USERUID", data: firebaseActivityData });

  const handleChangeEmailInput = (e) => {
    // setEmail(e.target.value);
    dispatch({ type: "UPDATE_USEREMAIL", data: e.target.value });
    // console.log(userEmail);
  };
  const handleChangePasswordInput = (e) => {
    // setPassword(e.target.value);
    dispatch({ type: "UPDATE_USERPASSWORD", data: e.target.value });
    // console.log(password);
  };
  console.log(userEmail);

  return (
    <div>
      <Verification>
        <div>
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
          <button
            onClick={() => {
              fireAuthLogIn(userEmail, userPassword);
            }}
          >
            Log In
          </button>
          <button
            onClick={() => {
              fireAuthSignUp(userEmail, userPassword);
            }}
          >
            Sign Up
          </button>
        </div>
        <div>
          <button onClick={firebaseGoogle}>Log In with google</button>
        </div>
        <div>
          <button onClick={fireAuthLogOut}>Log Out</button>
        </div>
      </Verification>
    </div>
  );
}

export default VerificationStep;
