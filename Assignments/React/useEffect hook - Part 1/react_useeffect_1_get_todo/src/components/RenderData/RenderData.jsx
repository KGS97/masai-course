import TodoItem from "./TodoItem";
export default function RenderData(
  Currdata,
  UpdatePageUrlHandler,
  relatedPages
) {
  console.log(Currdata);
  return (
    <>
      <table>
        <tbody>
          {Currdata.map((elem, index) => {
            return TodoItem(elem, index, UpdatePageUrlHandler);
          })}
        </tbody>
      </table>
      <button onClick={() => UpdatePageUrlHandler(relatedPages.previous)}>
        Prev
      </button>
      <button onClick={() => UpdatePageUrlHandler(relatedPages.next)}>
        Next
      </button>
    </>
  );
}
