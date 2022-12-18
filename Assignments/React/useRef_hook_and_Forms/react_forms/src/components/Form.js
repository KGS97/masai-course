import { useRef, useState, useEffect } from "react";
import Table from "./Table/Table";
let Form = () => {
  let [dataTable, UpdateDataTable] = useState([]);
  let [data, updateData] = useState({
    maritalStaus: false,
    profile:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  });
  let checkboxRef = useRef(false);
  let onChangeHandler = (props) => {
    let prop = { ...data, ...props };
    updateData(prop);
  };
  return (
    <>
      <img
        src={data.profile}
        alt="profile-pic-preview"
        style={{ height: "100px" }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          let data = { name: e.target.value };
          onChangeHandler(data);
        }}
      />
      <input
        type="text"
        placeholder="Enter Age"
        onChange={(e) => {
          let data = { age: e.target.value };
          onChangeHandler(data);
        }}
      />
      <input
        type="text"
        placeholder="Enter Address"
        onChange={(e) => {
          let data = { address: e.target.value };
          onChangeHandler(data);
        }}
      />
      <select
        onChange={(e) => {
          let data = { department: e.target.value };
          onChangeHandler(data);
        }}
      >
        <option value="">Select your department</option>
        <option value="marketing">Marketing</option>
        <option value="hr">HR</option>
      </select>
      <div>
        <p>Are you married?</p>
        <input
          type="checkbox"
          onClick={(e) => {
            checkboxRef.current = !checkboxRef.current;
            let data = {
              maritalStaus: checkboxRef.current,
            };
            onChangeHandler(data);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Enter Salary"
          onChange={(e) => {
            let data = { salary: e.target.value };
            onChangeHandler(data);
          }}
        />
        <input
          type="text"
          placeholder="Enter profile photo link"
          onChange={(e) => {
            let data = { profile: e.target.value };
            onChangeHandler(data);
          }}
        />
        <button
          onClick={() => {
            UpdateDataTable([...dataTable, data]);
          }}
        >
          Submit
        </button>
      </div>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
          </tr>
        </thead>
        {Table(dataTable)}
      </table>
    </>
  );
};

export default Form;
