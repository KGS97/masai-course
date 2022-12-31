let initState = {
  count: 0,
};
const countReducer = (state = initState, action) => {
  if (action.type === "add")
    return { ...state, count: state.count + action.data };
  if (action.type === "sub")
    return { ...state, count: state.count - action.data };
  return state;
};
export default countReducer;
