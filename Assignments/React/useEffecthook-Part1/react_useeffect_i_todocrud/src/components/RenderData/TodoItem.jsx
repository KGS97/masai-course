export default function TodoItem(
  elem,
  index,
  UpdatePageUrlHandler,
  deleteItem,
  updateItem,
  UpdateCrudNumhandler
) {
  let { title, id, completed } = elem;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <input
          type="checkbox"
          defaultChecked={completed}
          onChange={() => {
            updateItem(id, !completed);
            UpdateCrudNumhandler();
          }}
        />
      </td>
      <td>
        <i
          className="fa-regular fa-trash-can"
          onClick={() => {
            deleteItem(id);
            UpdateCrudNumhandler();
          }}
        ></i>
      </td>
    </tr>
  );
}
