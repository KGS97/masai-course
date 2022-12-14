import Card from "./Card";
import TodoItem from "./TodoItem";
function TodoList(props) {
  let { list } = props;
  let style = {
    minHeight: "100px",
    width: "47.5%",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    margin: "25px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "20px",
  };
  return (
    <div style={style}>
      {list.map((elem, index) => {
        return (
          <table style={tableStyle()}>
            <tbody>
              <TodoItem item={elem} index={index} />
            </tbody>
          </table>
        );
      })}
    </div>
  );
  //console.log(list);
}
export default TodoList;
let tableStyle = () => {
  let Style = {
    padding: "5px",
    width: "90%",
    display: "flex",
    flexDirection: "column",
  };
  return Style;
};
