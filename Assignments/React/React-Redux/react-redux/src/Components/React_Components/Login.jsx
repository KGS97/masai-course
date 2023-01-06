import React from "react";
import { todoContainerStyles } from "../styles.js";
const Login = () => {
  return (
    <div
      style={{
        ...todoContainerStyles(),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        justifyContent: "space-evenly",
      }}
    >
      <input
        style={{
          height: "10%",
          width: "90%",
          padding: "10px 20px",
          border: "1px solid gray",
          margin: "5px auto",
          borderRadius: "5px",
          textAlign: "left",
          fontSize: "20px",
        }}
        type="text"
        placeholder="Enter Email"
      />
      <input
        style={{
          height: "10%",
          width: "90%",
          padding: "10px 20px",
          border: "1px solid gray",
          margin: "5px",
          borderRadius: "5px",
          textAlign: "left",
          fontSize: "20px",
        }}
        type="password"
        placeholder="Enter Password"
      />
      <button
        style={{
          height: "10%",
          width: "90%",
          padding: "10px 20px",
          border: "1px solid gray",
          margin: "5px",
          borderRadius: "5px",
          textAlign: "center",
          backgroundColor: "white",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
