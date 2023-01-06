import React from "react";
import UpdateThunk from "../Redux/Thunk_Action_Creators/UpdateThunk";
import { useDispatch } from "react-redux";
import DeleteThunk from "../Redux/Thunk_Action_Creators/DeleteThunk";
const TodoItem = (props) => {
  let dispatch = useDispatch();
  let {
    elem: { title, completed, id },
  } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 20px",
        border: "1px solid gray",
        margin: "5px",
        borderRadius: "5px",
        textAlign: "left",
      }}
    >
      <p>{title}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "2px 10px",
        }}
      >
        <input
          style={{ height: "52.5px", width: "52.5px", borderRadius: "20px" }}
          type="checkbox"
          checked={completed === "true" ? true : false}
          onChange={() => dispatch(UpdateThunk(dispatch, id, completed))}
        />
        <button
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            cursor: "pointer",
            border: "1px solid gray",
            padding: "2px 30px",
            color: "red",
          }}
          onClick={() => dispatch(DeleteThunk(dispatch, id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
