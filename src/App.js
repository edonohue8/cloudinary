import React, { useState } from "react";
import './App.css';

function App() {

  const uploadImage = (files) => {
    console.log(files[0]);
  }

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
