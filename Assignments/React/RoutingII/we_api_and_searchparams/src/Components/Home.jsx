import React from "react";
import { Link } from "react-router-dom";
import Users from "./Users";
function Home(props) {
  return (
    <div>
      <p>Welcome home</p>
      <Link to={`/users/?page=${1}`} element={<Users />}>
        Users
      </Link>
    </div>
  );
}

export default Home;
