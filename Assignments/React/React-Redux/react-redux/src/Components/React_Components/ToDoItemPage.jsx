import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import thunkRender from "../Redux/Thunk_Action_Creators/ThunkFirstRender";
import TodoItem from "./TodoItem";
const ToDoItemPage = () => {
  let { id } = useParams();

  let dispatch = useDispatch();
  let data = useSelector((data) => data);
  if (!data) thunkRender(dispatch);
  data = useSelector((data) => data);
  console.log(data);
  if (data) {
    data = data.filter((elem) => elem.id == id);
    let [elem] = data;
    return <TodoItem elem={elem} />;
  }
};

export default ToDoItemPage;
