import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import TodoReducer from "../Reducers/TodoReducer";
const store = configureStore({
  reducer: TodoReducer,
  middleware: [thunk, logger],
});
export default store;
