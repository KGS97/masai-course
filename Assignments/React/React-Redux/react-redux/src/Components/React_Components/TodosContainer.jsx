import React from "react";
import TodoItem from "./TodoItem";
const Todos = (props) => {
  let { data } = props;
  return (
    <div>
      {data.map((elem, index) => {
        return <TodoItem elem={elem} key={index + 1} index={index} />;
      })}
    </div>
  );
};

export default Todos;
