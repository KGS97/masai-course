import Card from "./Card";
import TodoItem from "./TodoItem";
function TodoList(props) {
  let { list } = props;
  let style = {
    minHeight: "100px",
    width: "50%",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
    margin: "25px auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  return (
    <div style={style}>
      {list.map((elem, index) => {
        return <TodoItem item={elem} index={index} />;
      })}
    </div>
  );
  //console.log(list);
}
export default TodoList;
