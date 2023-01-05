export default async function thunkRender(dispatch, getState) {
  const res = await fetch("http://localhost:3000/todos").then((res) =>
    res.json()
  );
  dispatch({ type: "firstRender", data: res });
}
