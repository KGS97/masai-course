import React from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
function Dashboard(props) {
  let { IsAuth, ToggleAuthContext } = React.useContext(AuthContext);
  console.log(IsAuth);
  return (
    <div>
      <p>Welcome to Dashboard</p>
      <Link to={IsAuth ? "Settings" : "/Login"}>Settings</Link>
    </div>
  );
}

export default Dashboard;
