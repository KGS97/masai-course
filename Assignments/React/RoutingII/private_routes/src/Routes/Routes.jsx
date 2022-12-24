import React from "react";
import Home from "../Components/Home";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
function RoutesFun(props) {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}

export default RoutesFun;
