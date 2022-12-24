import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

function Login(props) {
  let { IsAuth, ToggleAuth } = React.useContext(AuthContext);
  // console.log(IsAuth, ToggleAuth);
  // console.log("login called");
  const navigate = useNavigate();
  let passRef = React.useRef();
  let mailRef = React.useRef();
  return (
    <div>
      <p>Welcome to login</p>
      <input ref={mailRef} type="text" placeholder="Email" />
      <input ref={passRef} type="password" placeholder="Password" />
      <input
        type="submit"
        onClick={async () => {
          let verified = await VerifyUser(
            mailRef.current.value,
            passRef.current.value
          );
          if (verified) {
            console.log("ok");
            navigate(-1);
            ToggleAuth(true);
          } else {
            alert("Please enter valid credentials");
          }
        }}
      />
    </div>
  );
}
async function VerifyUser(email, password) {
  try {
    let data = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    let json = await data.json();
    if (Object.keys(json)[0] === "token") {
      console.log(json);
      return true;
    }
  } catch {
    return false;
  }
}

export default Login;
