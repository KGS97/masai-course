import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import TodoReducer from "../Reducers/TodoReducer";
import LoginReducer from "../Reducers/LoginReducer";
let preLoadedState = { token: localStorage.getItem("token") };
const store = configureStore({
  reducer: {
    todo: TodoReducer,
    login: LoginReducer,
  },
  preLoadedState,
  middleware: [thunk, logger],
});
export default store;
