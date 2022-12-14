//import ShowData from "./ShowData";

import { useState, useEffect } from "react";
function GetData() {
  let [list, updateList] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => updateList(data));
  return ShowData(list);
}
function ShowData(data) {
  console.log(data);
  return data.map((elem) => {
    let { id, title, body } = elem;
    return (
      <div>
        <p>{id}</p>
        <p>{title}</p>
        <p>{body}</p>
      </div>
    );
  });
}
export default GetData;
