/* eslint-disable no-unused-vars */
import { useState } from "react";
function ToDo() {
  let index = 0;
  let val = "";
  let [td, updateTd] = useState([]);
  function addItem() {
    if (val !== "") {
      td.push(val);
      console.log(td);
      updateTd(td);
    }
  }

  return (
    <div>
      <input
        placeholder="Enter Text"
        onChange={(event) => {
          val = event.target.value;
        }}
      />
      <button onClick={addItem}>Add</button>
      <table>
        <thead>
          <th>Task</th>
          <th>Delete</th>
          <th>Edit</th>
        </thead>
        <tbody>
          {td.map((elem) => {
            return (
              <tr>
                <td>{elem}</td>
                <td>Delete</td>
                <td>Edit</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ToDo;
