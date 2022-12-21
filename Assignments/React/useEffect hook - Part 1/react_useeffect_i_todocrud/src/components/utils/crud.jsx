let deleteItem = (id) => {
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
    body: JSON.stringify({}),
  });
};
let updateItem = (id, newVal) => {
  console.log(newVal, id);
  fetch(`http://localhost:3000/todos/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status: newVal }),
  });
};
let createItem = (title) => {
  fetch(`http://localhost:3000/todos/`, {
    method: "POST",
    body: JSON.stringify({ title: title, status: false }),
  });
};

export { deleteItem, updateItem, createItem };
