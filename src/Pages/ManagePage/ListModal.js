import styled from "styled-components";

const Modal = styled.div`
  width: 400px;
  height: 400px;
  background-color: yellow;
`;
const AddByEmail = styled.div``;
const Add = styled.button``;
const AlreadySharedList = styled.div``;
const EachUser = styled.div``;
const Title = styled.div``;
const CloseModalBtn = styled.div``;
const AllUsers = styled.div``;
const Email = styled.div``;
const Delete = styled.button``;

function ListModal() {
  console.log("create modal");
  function addUser() {}
  function deleteUser() {}
  function closeModal() {}

  return (
    <Modal>
      <AddByEmail>
        <form>
          <input></input>
        </form>
        <Add onClick={addUser}></Add>
      </AddByEmail>

      <AlreadySharedList>
        <Title>Already share</Title>
        <CloseModalBtn onClick={closeModal}></CloseModalBtn>
        <AllUsers>
          <EachUser>
            <Email>ellie@gmail.com</Email>
            <Delete onClick={deleteUser}>delete</Delete>
          </EachUser>
          <div>
            <div>bb@gmail.com</div>
            <button>delete</button>
          </div>
        </AllUsers>
      </AlreadySharedList>
    </Modal>
  );
}

export default ListModal;
