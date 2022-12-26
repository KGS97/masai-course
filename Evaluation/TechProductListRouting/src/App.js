import { useState } from "react";
import AllRoutes from "./Routes/AllRoutes";
import "./styles.css";
import AuthContext from "./Context/AuthContext";
export default function App() {
  let [auth, updateAuth] = useState(false);
  let [token, updateToken] = useState(null);
  let context = { auth, updateAuth, token, updateToken };
  return (
    <AuthContext.Provider value={context}>
      <div className="App">
        <AllRoutes />
      </div>
    </AuthContext.Provider>
  );
}

// authentication: reqres.in
//
