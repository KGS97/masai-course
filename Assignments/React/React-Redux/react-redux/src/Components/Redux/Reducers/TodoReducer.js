export default function TodoReducer(state, action) {
  if (action.type == "firstRender") return [...action.data];
}
