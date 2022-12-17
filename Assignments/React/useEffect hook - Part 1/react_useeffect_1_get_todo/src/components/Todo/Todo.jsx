import { useState, useEffect } from "react";
import RenderData from "../RenderData/RenderData";
export default function Todo() {
  let [Loading, Loaded] = useState(true);
  let [Error, ReceiveError] = useState(false);
  let [Currdata, updateCurrData] = useState();
  let [pageUrl, UpdatePageUrl] = useState(
    "http://localhost:3000/todos?_page=1&_limit=5"
  );
  let [relatedPages, UpdateRelatedPages] = useState({});
  useEffect(() => {
    async function hello() {
      let response;
      try {
        response = await fetch(pageUrl);
        Loaded(false);
        let head = response.headers.get("Link");
        let data = await response.json();
        head = response.headers.get("Link").split(",");
        head = head.map((elem) => elem.split(";"));
        head = head.map((elem) => {
          let string = [elem[0], elem[1].substring(6, 10)];
          return string;
        });
        let relatedPages = {};
        head.forEach((elem) => {
          if (elem[1][0] === "f")
            relatedPages.first = elem[0].substring(1, elem[0].length - 1);
          else if (elem[1][0] === "p")
            relatedPages.previous = elem[0].substring(2, elem[0].length - 1);
          else if (elem[1][0] === "n")
            relatedPages.next = elem[0].substring(2, elem[0].length - 1);
          else if (elem[1][0] === "l")
            relatedPages.last = elem[0].substring(2, elem[0].length - 1);
        });
        UpdateRelatedPages(relatedPages);
      } catch {
        ReceiveError(true);
        Loaded(false);
      }
    }
  }, [pageUrl]);
  useEffect(() => {
    if (Loading) document.title = "Loading...";
    else if (Error) document.title = "Something went wrong";
    else if (!Error) {
      document.title = "React App";
      return RenderData(Currdata, UpdatePageUrlHandler, relatedPages);
    }
  }, [Loading, Error]);
  var UpdatePageUrlHandler = (url) => {
    UpdatePageUrl(url);
  };
}
