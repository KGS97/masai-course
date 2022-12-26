import { Link, redirect } from "react-router-dom";
import React from "react";
import AuthContext from "../Context/AuthContext";

function Login() {
  let context = React.useContext(AuthContext);
  let [email, setEmail] = React.useState();
  let [password, setPassword] = React.useState();
  let { auth, token, updateAuth, updateToken } = context;

  async function loginUser(email, password) {
    try {
      let response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      let json = await response.json();
      if (json.error) {
        alert("Please enter valid credentials");
      } else {
        console.log(json);
        updateAuth(true);
        updateToken(json.token);
        redirect("/dashboard");
      }
    } catch {
      console.log("Something went wrong");
    }
  }
  return (
    <div>
      <form
        data-testid="login-form"
        onSubmit={() => {
          event.preventDefault();
          loginUser(email, password);
        }}
      >
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
