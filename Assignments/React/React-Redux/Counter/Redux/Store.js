import { legacy_createStore } from "redux";
import countReducer from "./Reducer.js";
export const countStore = legacy_createStore(countReducer);
