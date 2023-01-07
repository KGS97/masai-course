import React from "react";
import { todoContainerStyles } from "../styles.js";
import { useDispatch } from "react-redux";
import LoginThunk from "../Redux/Thunk_Action_Creators/LoginThunk.js";
const Login = () => {
  let dispatch = useDispatch();
  let [state, setState] = React.useState({ email: "", password: "" });
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
        onChange={(e) => setState({ ...state, email: e.target.value })}
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
        onChange={(e) => setState({ ...state, password: e.target.value })}
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
        onClick={() => {
          let { email, password } = state;
          if (email !== "" && password !== "")
            dispatch(LoginThunk(dispatch, state.email, state.password));
          else alert("Please enter valid credentials");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
