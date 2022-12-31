import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import { applyMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
