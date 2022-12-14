function TodoItem(props) {
  let { item, index } = props;
  return (
    <tr style={tditem()}>
      <td>
        <input
          type="checkbox"
          className="checkboxes"
          onChange={(event) => event.target.value}
        />
      </td>
      <td>{item}</td>
      <td style={buttonsStyle()}>
        <i
          style={{ cursor: "pointer" }}
          className="fa-regular fa-pen-to-square"
        ></i>
        <i
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
    justifyContent: "space-evenly",
  };
  return style;
};
function buttonsStyle() {
  let style = {
    width: "7.5%",
    display: "flex",
    justifyContent: "space-around",
  };
  return style;
}
