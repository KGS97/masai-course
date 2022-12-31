import { countStore } from "./Store.js";
export const incCountAction = (data) => {
  countStore.dispatch({
    type: "add",
    data,
  });
};
export const decCountAction = (data) => {
  countStore.dispatch({
    type: "sub",
    data,
  });
};
