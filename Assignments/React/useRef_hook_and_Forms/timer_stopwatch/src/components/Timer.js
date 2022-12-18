import { useRef, useState } from "react";
let Timer = () => {
  let [data, updateData] = useState({});
  let checkboxRef = useRef(false);
  let onChangeHandler = (props) => {
    let prop = { ...data, ...props };
    console.log(prop);
    updateData(prop);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => {
          let data = { name: e.target.value };
          onChangeHandler(data);
        }}
      />
      <select
        value="Select Gender"
        onChange={(e) => {
          let data = { gender: e.target.value };
          onChangeHandler(data);
        }}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <div>
        {" "}
        <p>Are you married?</p>{" "}
        <input
          type="checkbox"
          onClick={(e) => {
            checkboxRef.current = !checkboxRef.current;
            console.log(checkboxRef.current);
            let data = {
              maritalStaus: checkboxRef.current,
            };
            onChangeHandler(data);
          }}
        />
      </div>
    </>
  );
};

export default Timer;
