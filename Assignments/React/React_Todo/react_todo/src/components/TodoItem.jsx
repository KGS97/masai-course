function TodoItem(props) {
  let { item, index } = props;
  //console.log(index, item);
  return (
    <table>
      <tr>
        <td>
          <input type="checkbox" className="checkboxes" onChange={event} />
        </td>
        <td>
          <p>{item}</p>
        </td>
        <td></td>
      </tr>
    </table>
  );
}
export default TodoItem;
