import React from "react";

const AddTodo = () => {
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        display: "flex",
        borderRadius: "10px",
        height: "auto",
      }}
    >
      <input
        style={{
          flex: "1",
          borderRadius: " 25px 0 0 25px",
          padding: "10px 25px",
          border: "1px solid gray",
        }}
        type="text"
        placeholder="Enter New Todo"
      />
      <button
        style={{
          flex: ".05",
          borderRadius: "0 25px 25px 0",
          padding: "10px 20px",
          color: "white",
          cursor: "pointer",
          background: "#3498db",
          border: "1px solid #2980b9",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
