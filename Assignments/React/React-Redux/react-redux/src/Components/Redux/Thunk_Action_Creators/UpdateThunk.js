import thunkRender from "./ThunkFirstRender";

export default function UpdateThunk(dispatch, id, completed) {
  console.log(completed);
  return function () {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: completed === "true" ? "false" : "true",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res = res.json();
      console.log(res);
      thunkRender(dispatch);
    });
  };
}
