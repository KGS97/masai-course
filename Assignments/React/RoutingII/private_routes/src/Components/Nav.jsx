import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

function Nav(props) {
  let { IsAuth, ToggleAuth } = React.useContext(AuthContext);
  return (
    <nav className="navbar bg-dark" data-bs-theme="dark">
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
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
    </nav>
  );
}

export default Nav;
