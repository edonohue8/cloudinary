import React, { useState } from "react";
import Axios from 'axios';
import './App.css';

function App() {

  const uploadImage = (files) => {
    // console.log(files[0]);
    const formData = new FormData()
    // sending files to formData
    formData.append("file", files[0])
    formData.append("upload_preset", "kzdldvww")

    Axios.post("https://api.cloudinary.com/v1_1/dfmqiwt8n/image/upload",
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
      }}
    >
      <input
        type="file"
        onChange={(event) => {
          uploadImage(event.target.files);
        }}
      />
    </div>
  );
}

export default App;
