import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
function Home(props) {
  let { IsAuth, ToggleAuth } = React.useContext(AuthContext);
  return (
    <>
      <p>Welcome to Home</p>
      {IsAuth ? (
        <button
          onClick={() => {
            ToggleAuth(!IsAuth);
          }}
        >
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </>
  );
}

export default Home;
