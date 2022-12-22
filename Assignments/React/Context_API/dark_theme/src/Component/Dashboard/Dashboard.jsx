import React from "react";
import DashboardHead from "./DashboardHead/DashboardHead";
import CardsContext from "../../Context/CardsContext";
import ThemeContext from "../../Context/ThemeContext";
import DashboardContainer from "../Dashboard/DashboardBody/DashboardContainer";
function Dashboard(props) {
  let Cards = [
    {
      name: "Nrupul Dev",
      avatar:
        "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      Location: "Bangalore,India",
      points: 4732,
    },
    {
      name: "Nrupul Dev",
      avatar:
        "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      Location: "Bangalore,India",
      points: 2339,
    },
    {
      name: "Nrupul Dev",
      avatar:
        "https://images.unsplash.com/photo-1568316674077-d72ee56de61c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      Location: "Bangalore,India",
      points: 1884,
    },
  ];
  let [theme, ChangeTheme] = React.useState("Light");
  colorTheBody();
  function colorTheBody() {
    document.querySelector("body").style.backgroundColor =
      theme === "Light" ? "#F5F6FA" : "#1F2327";
  }

  return (
    <div className={theme === "Light" ? "Light" : "Dark"}>
      <ThemeContext.Provider value={{ theme, ChangeTheme }}>
        <CardsContext.Provider value={Cards}>
          <DashboardHead />
          <DashboardContainer />
        </CardsContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default Dashboard;
