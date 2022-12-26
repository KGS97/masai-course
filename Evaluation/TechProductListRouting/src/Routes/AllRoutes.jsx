import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import SingleProductPage from "./SingleProductPage";
function AllRoutes() {
  let { auth } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={auth ? <Dashboard /> : <Login />} />
          <Route path="productpage/:id" element={<SingleProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
