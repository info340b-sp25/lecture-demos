import React, { useState } from 'react';

import {getDatabase, ref as dbRef, set as dbSet} from 'firebase/database';


export default function ProfilePage(props) {
  const { currentUser } = props;
  //convenience
  const displayName = currentUser.userName;

  const [imageFile, setImageFile] = useState(undefined)
  const [imageUrl, setImageUrl] = useState(currentUser.userImg) //initial URL

  //image uploading!
  const handleChange = (event) => {
    if(event.target.files.length > 0 && event.target.files[0]) {
      const imageFile = event.target.files[0]
      setImageFile(imageFile);
      setImageUrl(URL.createObjectURL(imageFile));
    }
  }

  const handleImageUpload = (event) => {
    console.log("Uploading", imageFile);

    //config: create a file reader and callback for what to do when the file is read
    const reader = new FileReader();
    reader.onload = function (e) {
      //get the read file (read as dataURL and get its url
      const dataUrl = e.currentTarget.result
      
      //you can put this data url into the firebase db
      const db = getDatabase();
      const imgRef = dbRef(db, "profiles/"+currentUser.userId+"/profilePic")
      dbSet(imgRef, dataUrl)
    }

    //call this function to read the file (and trigger the above callback)
    reader.readAsDataURL(imageFile) //initiate the reader
  }

  return (
    <div className="container">
      <h2>
        {props.currentUser.userName && displayName+"'s"} Profile
      </h2>

      <div className="mb-5 image-upload-form">
        <p className="mb-2"><img src={imageUrl} alt="user avatar preview"/></p>
        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange}/>
      </div>
    </div>
  )
}