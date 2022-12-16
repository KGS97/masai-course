import TodoItem from "./TodoItem";
export default function RenderData(...props) {
  let [data, ChangePageHelper, page] = props;
  console.log(props);
  return (
    <>
      <table>
        <tbody>
          {data.map((elem, index) => {
            {
              return TodoItem(elem, index, props);
            }
          })}
        </tbody>
      </table>
      <button onClick={() => ChangePageHelper(--page)}>Prev</button>
      <button onClick={() => ChangePageHelper(++page)}>Next</button>
    </>
  );
}
