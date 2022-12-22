import React from "react";
import AuthContext from "../../Context/AuthContext";
function Navbar(props) {
  const { isAuth, toggleAuthHandler } = React.useContext(AuthContext);
  console.log(toggleAuthHandler);
  const passRef = React.useRef();
  const nameRef = React.useRef();
  return (
    <div>
      {!isAuth && <input ref={nameRef} type="text" placeholder="Username" />}
      {!isAuth && (
        <input ref={passRef} type="password" placeholder="Password" />
      )}
      {isAuth ? (
        <button
          onClick={() => {
            toggleAuthHandler(!isAuth);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            let name = nameRef.current.value;
            let pass = passRef.current.value;
            logIn(name, pass, toggleAuthHandler);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Navbar;
function logIn(email, password, toggleAuthHandler) {
  fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      {
        if (Object.keys(data)[0] === "token") toggleAuthHandler(true);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
