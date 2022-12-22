import React from "react";
import Navbar from "../Navbar/Navbar";
import AuthContext from "../../Context/AuthContext";
function Page(props) {
  React.useEffect(() => {
    fetch("");
  });
  const [isAuth, toggleAuth] = React.useState();
  const toggleAuthHandler = (newVal) => {
    toggleAuth(newVal);
  };
  return (
    <AuthContext.Provider value={{ isAuth, toggleAuthHandler }}>
      <div>
        <Navbar />
      </div>
    </AuthContext.Provider>
  );
}

export default Page;
