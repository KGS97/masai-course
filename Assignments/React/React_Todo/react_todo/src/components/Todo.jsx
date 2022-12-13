import { useState } from "react";
import TodoList from "./TodoList";
function Todo() {
  let [list, changeList] = useState([]);
  let AddTodo = (val) => {
    changeList([...list, val]);
  };
  let DeleteTodo = (index) => {
    changeList(() => list.splice(index, 1));
  };
  return <TodoList props={list} />;
}

export default Todo;
