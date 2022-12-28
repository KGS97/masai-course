import TodoItem from "./TodoItem";
export default function RenderData(
  Currdata,
  UpdatePageUrlHandler,
  relatedPages
) {
  return (
    <>
      <table>
        <tbody>
          {Currdata.map((elem, index) => {
            return TodoItem(elem, index, UpdatePageUrlHandler);
          })}
        </tbody>
      </table>
      <button
        onClick={() => {
          if (relatedPages.previous)
            UpdatePageUrlHandler(relatedPages.previous);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (relatedPages.next) UpdatePageUrlHandler(relatedPages.next);
        }}
      >
        Next
      </button>
    </>
  );
}
