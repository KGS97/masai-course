import "./App.css";
import React from "react";
import AuthContext from "./Context/AuthContext";
import Routes from "./Routes/Routes";
import Nav from "./Components/Nav";
import PrivateRoutes from "./Routes/PrivateRoutes";
import { BrowserRouter } from "react-router-dom";
function App() {
  let [IsAuth, ToggleAuth] = React.useState(false);
  return (
    <AuthContext.Provider value={{ IsAuth, ToggleAuth }}>
      <BrowserRouter>
        <Nav />
        <Routes />
        <PrivateRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
