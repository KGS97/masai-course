export default async function thunkRender(dispatch, getState) {
  const res = await fetch("http://localhost:3000/todos").then((res) => {
    res = res.json();
    return res;
  });
  dispatch({ type: "firstRender", data: res });
}
