export default function TodoItem(elem, deleteItem, updateItem) {
  let { title, id, completed } = elem;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <input type="checkbox" defaultChecked={completed} />
      </td>
      <td>
        <i
          className="fa-regular fa-pen-to-square"
          onClick={() => updateItem(prompt("Update Task Name", title), id)}
        ></i>
        <i
          className="fa-regular fa-trash-can"
          onClick={() => deleteItem(id)}
        ></i>
      </td>
    </tr>
  );
}
