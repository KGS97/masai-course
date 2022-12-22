import React from "react";
import DashboardHead from "./DashboardHead/DashboardHead";
import CardsContext from "../../Context/CardsContext";
import ThemeContext from "../../Context/ThemeContext";
import DashboardBody from "../Dashboard/Dashboard_Body/Dashboard_Container/";
function Dashboard(props) {
  let Cards = [
    {
      name: "Nrupul Dev",
      avatar: "https://robohash.org/eanobisipsum.png?size=300x300&set=set1",
      Location: "Bangalore,India",
    },
    {
      name: "Nrupul Dev",
      avatar: "https://robohash.org/eanobisipsum.png?size=300x300&set=set1",
      Location: "Bangalore,India",
    },
    {
      name: "Nrupul Dev",
      avatar: "https://robohash.org/eanobisipsum.png?size=300x300&set=set1",
      Location: "Bangalore,India",
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
      <CardsContext.Provider value={Cards}>
        <ThemeContext.Provider value={{ theme, ChangeTheme }}>
          <DashboardHead />
          <DashboardBody />
        </ThemeContext.Provider>
      </CardsContext.Provider>
    </div>
  );
}

export default Dashboard;
