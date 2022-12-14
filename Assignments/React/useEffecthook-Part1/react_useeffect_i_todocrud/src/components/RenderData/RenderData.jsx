import TodoItem from "./TodoItem";
export default function RenderData(props) {
  let {
    Currdata,
    UpdatePageUrlHandler,
    relatedPages,
    deleteItem,
    updateItem,
    UpdateCrudNumhandler,
  } = props;
  return (
    <>
      <table>
        <tbody>
          {Currdata.map((elem, index) => {
            return TodoItem(
              elem,
              index,
              UpdatePageUrlHandler,
              deleteItem,
              updateItem,
              UpdateCrudNumhandler
            );
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
