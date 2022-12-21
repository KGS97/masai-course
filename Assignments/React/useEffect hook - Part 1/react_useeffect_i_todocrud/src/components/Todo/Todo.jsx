import { useState, useEffect } from "react";
import RenderData from "../RenderData/RenderData";
import RelatedPages from "./RelatedPages";
import { deleteItem, updateItem, createItem } from "../utils/crud";
import Navbar from "../Navbar";
export default function Todo() {
  let [Loading, UpdateLoading] = useState(true);
  let [Error, UpdateError] = useState(null);
  let [crudNum, UpdateCrudNum] = useState(0);
  let [Currdata, updateCurrData] = useState();
  let [pageUrl, UpdatePageUrl] = useState(
    "http://localhost:3000/todos?_page=1&_limit=5"
  );

  let [relatedPages, UpdateRelatedPages] = useState({});
  useEffect(() => {
    try {
      console.log("trying");
      fetch(pageUrl)
        .then((res) => {
          console.log(res);
          UpdateLoading(false);
          RelatedPages(UpdateRelatedPagesHandler, res);
          return res.json();
        })
        .then((data) => {
          updateCurrData(data);
        });
    } catch {
      UpdateLoading(false);
      UpdateError(true);
    }
  }, [pageUrl]);

  let UpdatePageUrlHandler = (url) => {
    UpdatePageUrl(url);
  };

  let UpdateRelatedPagesHandler = (relatedPages) => {
    UpdateRelatedPages(relatedPages);
  };
  let UpdateCrudNumhandler = () => {
    UpdateCrudNum((crudNum) => crudNum + 1);
  };
  return Loading ? (
    <p>Loading...</p>
  ) : Error ? (
    <p>Something went wrong</p>
  ) : (
    <>
      <Navbar />
      <RenderData
        Currdata={Currdata}
        UpdatePageUrlHandler={UpdatePageUrlHandler}
        relatedPages={relatedPages}
        deleteItem={deleteItem}
        updateItem={updateItem}
        UpdateCrudNumhandler={UpdateCrudNumhandler}
      />
    </>
  );
}
