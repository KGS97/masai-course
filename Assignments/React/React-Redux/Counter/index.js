import { incCountAction, decCountAction } from "./Redux/ActionCreator.js";
import { countStore } from "./Redux/Store.js";
function incCount(data) {
  incCountAction(data);
}
function decCount(data) {
  decCountAction(data);
}
decCount(3);
decCount(3);
incCount(5);
console.log(countStore.getState().count);
