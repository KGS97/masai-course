import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
function Dashboard(props) {
  let { isAuth, ToggleAuthContext } = React.useContext(AuthContext);
  return (
    <div>
      <p>Welcome to Dashboard</p>
      <Link to={isAuth ? "settings" : "Login"}>Settings</Link>
    </div>
  );
}

export default Dashboard;
