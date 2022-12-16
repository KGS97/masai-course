export default function TodoItem(elem, index, props) {
  console.log(props);
  let { title, id, completed } = elem;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>
        <input type="checkbox" defaultChecked={completed} />
      </td>
    </tr>
  );
}
