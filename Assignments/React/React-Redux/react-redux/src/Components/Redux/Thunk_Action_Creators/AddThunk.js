import thunkRender from "./ThunkFirstRender";

export default function AddThunk(dispatch, title) {
  return function () {
    fetch(`http://localhost:3000/todos/`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      res.json();
      console.log(res);
      thunkRender(dispatch);
    });
  };
}
