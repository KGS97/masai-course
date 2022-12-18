export default function TableItem(elem) {
  let { name, age, department } = elem;
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{department}</td>
    </tr>
  );
}
