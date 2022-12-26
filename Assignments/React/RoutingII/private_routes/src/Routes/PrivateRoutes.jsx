import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import Dashboard from "../Components/Dashboard";
import Login from "../Components/Login";
import Settings from "../Components/Settings";
function PrivateRoutes(props) {
  const { IsAuth } = React.useContext(AuthContext);
  return (
    <Routes>
      <Route path="/dashboard">
        <Route index element={IsAuth ? <Dashboard /> : <Login />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default PrivateRoutes;
