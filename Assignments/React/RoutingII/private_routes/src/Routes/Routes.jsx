import React from "react";
import Home from "../Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import AuthContext from "../Context/AuthContext";
import Dashboard from "../Components/Dashboard";
function RoutesFun(props) {
  let { IsAuth } = React.useContext(AuthContext);
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default RoutesFun;
