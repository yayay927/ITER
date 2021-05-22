//Sign up and Log in page
import styled from "styled-components";
// import FirebaseAuth from "../../Utils/FirebaseAuth";
import FirebaseGoogle from "../../Utils/FirebaseGoogle";

const Verification = styled.div`
  margin-top: 80px;
`;

function VerificationStep() {
  return (
    <div>
      <Verification>
        {/* <FirebaseAuth></FirebaseAuth> */}
        <button onClick={FirebaseGoogle}>log in with google</button>
        {/* <FirebaseGoogle></FirebaseGoogle> */}
      </Verification>
    </div>
  );
}

export default VerificationStep;
