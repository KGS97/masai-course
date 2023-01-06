import thunkRender from "./ThunkFirstRender";

export default function DeleteThunk(dispatch, id) {
  console.log("delete thunk");
  return function () {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    }).then((res) => {
      res.json();
      console.log(res);
      thunkRender(dispatch);
    });
  };
}
