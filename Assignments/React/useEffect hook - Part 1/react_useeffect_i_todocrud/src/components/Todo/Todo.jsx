import { useState, useEffect } from "react";
import RenderData from "../RenderData/RenderData";
import RelatedPages from "./RelatedPages";
export default function Todo() {
  let [Currdata, updateCurrData] = useState();
  let [pageUrl, UpdatePageUrl] = useState(
    "http://localhost:3000/todos?_page=1&_limit=5"
  );

  let [relatedPages, UpdateRelatedPages] = useState({});
  useEffect(() => {
    fetch(pageUrl)
      .then((res) => {
        RelatedPages(UpdateRelatedPagesHandler, res);
        return res.json();
      })
      .then((data) => {
        updateCurrData(data);
      });
  }, [pageUrl]);

  var UpdatePageUrlHandler = (url) => {
    UpdatePageUrl(url);
  };
  var deleteItem = (id) => {};
  var updateItem = (newVal, id) => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ title: `${newVal}` }),
    });
  };
  var UpdateRelatedPagesHandler = (relatedPages) => {
    UpdateRelatedPages(relatedPages);
  };
  if (Currdata && relatedPages)
    return RenderData(
      Currdata,
      UpdatePageUrlHandler,
      relatedPages,
      deleteItem,
      updateItem
    );

  // if (Loading) return <p>Loading...</p>;
  // else if (Error) return <p>Something went wrong</p>;
  // else if (!Error) {
  //   return RenderData(Currdata, UpdatePageUrlHandler, relatedPages);
  // }
}
