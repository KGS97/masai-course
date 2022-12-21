import { useState, useEffect } from "react";
import RenderData from "../RenderData/RenderData";
import RelatedPages from "./RelatedPages";
export default function Todo() {
  let [Loading, UpdateLoading] = useState(true);
  let [Error, UpdateError] = useState(false);
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
  var UpdateRelatedPagesHandler = (relatedPages) => {
    UpdateRelatedPages(relatedPages);
  };
  // if (Currdata && relatedPages)
  //   return RenderData(Currdata, UpdatePageUrlHandler, relatedPages);

  return Loading ? <p>Loading...</p>:Error? <p>Something went wrong</p>:RenderData(Currdata, UpdatePageUrlHandler, relatedPages);
  }
}
