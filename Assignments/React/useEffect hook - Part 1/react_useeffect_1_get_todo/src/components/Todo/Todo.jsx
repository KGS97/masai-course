import { useState, useEffect } from "react";
import RenderData from "../RenderData/RenderData";
export default function Todo() {
  let [UI, UpdateUI] = useState();
  let [currData, Updatedata] = useState();
  let [page, ChangePage] = useState(1);
  let UpdateUIHelper = (ui) => {
    UpdateUI(ui);
  };
  let UpdatePageHelper = (page) => {
    ChangePage(page);
  };
  let UpdateStatus = (index) => {
    currData[index].completed = !currData[index].completed;
    Updatedata([...currData]);
  };
  useEffect(() => {
    UpdateUI(<p>Loading...</p>);
    fetch(`http://localhost:3000/todos?_page=${page}&_limit=5`)
      .then((res) => {
        for (var pair of res.headers.entries()) {
          //if (pair[0] === "link") console.log(pair[1].substring(1, 10));
        }
        return res.json();
      })
      .then((data) => {
        currData = data;
        UpdateUI(
          RenderData(data, UpdateUIHelper, UpdatePageHelper, UpdateStatus, page)
        );
      });
  }, [page, currData]);
  return UI;
}
