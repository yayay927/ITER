// import styled from "styled-components";
// import React, { useState } from "react";
// import Swal from "sweetalert2";
// import { uploadImage, storeProfileData } from "../../Utils/firebase.js";

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

// function UploadPhoto() {
//   const [photoFile, setPhotoFile] = useState([]);
//   const [photoUrl, setPhotoUrl] = useState([]);
//   function selectPhoto() {
//     (async () => {
//       const { value: file } = await Swal.fire({
//         title: "Select image",
//         input: "file",
//         inputAttributes: {
//           accept: "image/*",
//           "aria-label": "Upload your profile picture",
//         },
//       });
//       const url = await uploadImage(file);
//       console.log(url);
//       setPhotoUrl(url);
//       storeProfileData("Lara", "lara@gmail.com", url /*, UID*/);

//       if (file) {
//         const reader = new FileReader();
//         reader.onload = (e) => {
//           Swal.fire({
//             title: "Successfully upload! Your uploaded picture",
//             imageUrl: e.target.result,
//             imageAlt: "The uploaded picture",
//           });
//         };
//         reader.readAsDataURL(file);
//       }
//     })();
//   }
//   return (
//     <div>
//       <Photo src={photoUrl} onClick={selectPhoto} />
//       <form action="/somewhere/to/upload" enctype="multipart/form-data">
//         <input
//           // name="progressbarTW_img"
//           type="file"
//           accept="image/gif, image/jpeg, image/png"
//           // onChange={(e) => setPhotoFile(e.target.files[0])}
//         ></input>
//       </form>
//       <SavePhoto>Save photo</SavePhoto>
//     </div>
//   );
// }

// export default UploadPhoto;
