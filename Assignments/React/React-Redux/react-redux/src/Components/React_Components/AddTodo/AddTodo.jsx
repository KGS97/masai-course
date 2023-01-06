import React from "react";
import { useDispatch } from "react-redux";
import AddThunk from "../../Redux/Thunk_Action_Creators/AddThunk";
const AddTodo = () => {
  const dispatch = useDispatch();
  const [state, setState] = React.useState();
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        display: "flex",
        borderRadius: "5px",
        height: "75px",
        marginBottom: "20px",
      }}
    >
      <input
        style={{
          flex: "1",
          borderRadius: " 5px 0 0 5px",
          padding: "10px 25px",
          border: "1px solid gray",
        }}
        type="text"
        placeholder="Enter New Todo"
        onChange={(e) => setState(e.target.value)}
      />
      <button
        style={{
          flex: ".20",
          borderRadius: "0 5px 5px 0",
          padding: "10px 20px",
          color: "white",
          cursor: "pointer",
          background: "#3498db",
          border: "1px solid #2980b9",
        }}
        onClick={() => dispatch(AddThunk(dispatch, state))}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
