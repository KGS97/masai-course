export default function TodoReducer(state = {}, action) {
  if (action.type === "firstRender")
    return {
      ...state,
      todos: action.data,
      token: localStorage.getItem("token"),
    };
  else return state;
}
