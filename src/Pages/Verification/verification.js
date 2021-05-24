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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeEmailInput = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };
  const handleChangePasswordInput = (e) => {
    setPassword(e.target.value);
    // console.log(password);
  };

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
              fireAuthLogIn(email, password);
            }}
          >
            Log In
          </button>
          <button
            onClick={() => {
              fireAuthSignUp(email, password);
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
