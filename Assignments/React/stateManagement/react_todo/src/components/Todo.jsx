import { useState } from "react";
import TodoList from "./TodoList";
function Todo(val, index) {
  let [list, changeList] = useState([]);
  let AddTodo = (val) => {
    changeList([...list, val]);
  };
  let DeleteTodo = (index) => {
    console.log("delete Todo", index);
    list.splice(index, 1);
    let newList = [...list];
    changeList(newList);
  };
  let EditTodo = (index) => {
    console.log("edit Todo");
    changeList((list) => {
      list[index] = window.prompt("Rename the task", list[index]);
      let newList = [...list];
      return newList;
    });
  };
  function Card() {
    let style = {
      height: "150px",
      width: "50%",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      margin: "25px auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };
    return (
      <div style={style}>
        <input
          type="text"
          placeholder="Enter Task"
          style={{
            margin: "20px",
            height: "30px",
            borderRadius: "5px",
            border: "1px solid lightgray",
            width: "80%",
            padding: "10px 10px",
          }}
          onChange={(event) => {
            val = event.target.value;
          }}
        />
        <button
          style={{
            width: "10%",
            padding: "10px 5px",
            backgroundColor: "#5b04ba",
            color: "white",
            fontFamily: "Ubuntu",
            fontSize: "14px",
            letterSpacing: "1px",
            borderRadius: "5px",
            cursor: "pointer",
            border: "1px solid lightgray",
          }}
          onClick={() => {
            AddTodo(val);
          }}
        >
          ADD
        </button>
      </div>
    );
  }
  return (
    <>
      <Card />
      <TodoList list={list} DeleteTodo={DeleteTodo} EditTodo={EditTodo} />
    </>
  );
}

export default Todo;
