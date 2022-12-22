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
            logIn(name, pass);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}

export default Navbar;
function logIn(name, pass) {
  console.log(name, pass);
  fetch(`https://reqres.in/api/login`, {
    method: "POST",
    body: JSON.stringify({
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
