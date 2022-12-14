function TodoItem(props) {
  let { item, index, EditTodo, DeleteTodo } = props;
  return (
    <tr style={tditem()}>
      <td>
        <input
          type="checkbox"
          className="checkboxes"
          onChange={(event) => event.target.value}
          style={CheckBoxStyle()}
        />
      </td>
      <td>{item}</td>
      <td style={buttonsStyle()}>
        <i
          onClick={() => {
            EditTodo(index);
          }}
          style={{ cursor: "pointer" }}
          className="fa-regular fa-pen-to-square"
        ></i>
        <i
          onClick={() => {
            DeleteTodo(index);
          }}
          style={{ cursor: "pointer" }}
          className="fa-regular fa-trash-can"
        ></i>
      </td>
    </tr>
  );
}
export default TodoItem;
let tditem = () => {
  let style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    border: ".5px solid lightgray",
    borderRadius: "5px",
    padding: "15px",
    fontWeight: "400",
    fontSize: "20px",
    letterSpacing: "1px",
  };
  return style;
};
function buttonsStyle() {
  let style = {
    width: "9%",
    display: "flex",
    justifyContent: "space-between",
  };
  return style;
}
function CheckBoxStyle() {
  return {
    width: "20px",
    height: "20px",
    borderRadius: "5px",
    marginLeft: "auto",
  };
}
