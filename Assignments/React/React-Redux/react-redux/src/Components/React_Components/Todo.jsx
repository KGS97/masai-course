import React from "react";
import AddTodo from "./AddTodo/AddTodo";
import { todoContainerStyles } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import thunkRender from "../Redux/Thunk_Action_Creators/ThunkFirstRender";
const Todo = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(thunkRender);
  }, []);
  let data = useSelector((data) => data);
  console.log(data);
  return (
    <div style={todoContainerStyles()}>
      <AddTodo />
    </div>
  );
};

export default Todo;
