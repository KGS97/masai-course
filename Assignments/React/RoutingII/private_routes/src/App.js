import "./App.css";
import React from "react";
import AuthContext from "./Context/AuthContext";
import Routes from "./Routes/Routes";
import { BrowserRouter } from "react-router-dom";
function App() {
  let [IsAuth, ToggleAuth] = React.useState(false);
  return (
    <AuthContext.Provider value={{ IsAuth, ToggleAuth }}>
      <BrowserRouter>
        <div className="App">Hello React</div>
        <Routes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
