import styled from "styled-components";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { addShareEmail, removeShareEmail } from "../../Utils/firebase.js";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const StyledPopup = styled(Popup)`
  &-content {
    height: 20rem;
    width: 20rem;
    align-items: center;
    justify-content: center;
    background-color: white;
    /* border: none; */
    border-radius: 10px;
    /*opacity: ${(props) => props.opacity};*/
    position: relative;
    /*transition: all 0.3s ease-in-out;*/
  }
`;
const OpenButton = styled.button`
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
const AddByEmail = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
`;
const Form = styled.form``;
const Input = styled.input`
  font-family: "QuickSand";
  width: 220px;
  margin-right: 10px;
  height: 25px;
  font-size: 14px;
  color: grey;
  padding-left: 12px;
  outline: none;
  border-radius: 15px;
  border: 1px solid #91ccb9;
`;
const Add = styled.button`
  font-family: "QuickSand";
  border-radius: 30px;
  border: 1px solid #91ccb9;
  background-color: white;
  color: #91ccb9;
  :hover {
    background-color: #91ccb9;
    border: 1px solid #91ccb9;
    color: white;
    cursor: pointer;
  }
`;
const AlreadySharedList = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const EachUser = styled.div`
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
`;
const Title = styled.div`
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
  border-bottom: 1px solid grey;
`;
const CloseModalBtn = styled.div``;
const AllUsers = styled.div``;
const TypeEmail = styled.div``;
const Delete = styled.button`
  font-family: "QuickSand";
  border-radius: 20px;
  border: 1px solid #91ccb9;
  background-color: white;
  color: #91ccb9;
  height: 25px;
  :hover {
    cursor: pointer;
    background-color: #91ccb9;
    color: white;
  }
`;
const CloseBtn = styled.button`
  font-family: "QuickSand";
  font-size: 16px;
  border-radius: 20px;
  height: 30px;
  border: 1px solid #eedd42;
  background-color: white;
  color: grey;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%);
  :hover {
    background-color: #eedd42;
    border: 1px solid #eedd42;
    color: black;
    cursor: pointer;
  }
`;

function EditShareList({ tripID, share }) {
  // const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const [shareEmail, setShareEmail] = useState([]);

  console.log(tripID, share);

  function addUser(tripID, shareEmail) {
    console.log(tripID, shareEmail);
    addShareEmail(tripID, shareEmail);
    setShareEmail("");
  }
  function deleteUser(tripID, email) {
    removeShareEmail(tripID, email);
  }

  return (
    <div>
      <StyledPopup
        key={tripID}
        open={open}
        closeOnDocumentClick
        onClose={closeModal}
        // afterOpen={afterOpen}
        // beforeClose={beforeClose}
        // onBackgroundClick={toggleModal}
        // onEscapeKeydown={toggleModal}
        // opacity={opacity}
        // backgroundProps={{ opacity }}
        trigger={
          <OpenButton
            onClick={() => {
              setOpen(true);
            }}
          >
            Edit
          </OpenButton>
        }
        modal
        position="right center"
      >
        {(close) => (
          <>
            <AddByEmail>
              <Form>
                <Input
                  type="text"
                  name="email"
                  id="inputEmail"
                  placeholder="email"
                  onChange={(e) => {
                    e.preventDefault();
                    setShareEmail(e.target.value);
                  }}
                  value={shareEmail}
                ></Input>
              </Form>
              <Add onClick={() => addUser(tripID, shareEmail)}>add</Add>
            </AddByEmail>

            <AlreadySharedList>
              <Title>Share list</Title>
              <CloseModalBtn></CloseModalBtn>
              <AllUsers>
                {share
                  ? share.map((each, i) => {
                      /* console.log(each); */

                      return (
                        <EachUser key={i}>
                          <TypeEmail>{each}</TypeEmail>
                          <Delete
                            onClick={() => deleteUser(tripID, shareEmail)}
                          >
                            delete
                          </Delete>
                        </EachUser>
                      );
                    })
                  : null}
              </AllUsers>
            </AlreadySharedList>
            <CloseBtn onClick={close}>Finish</CloseBtn>
          </>
        )}
      </StyledPopup>
    </div>
  );
}

export default EditShareList;
