import React from "react";
import { useSearchParams } from "react-router-dom";
import Page from "./Page";
import Pagination from "./Pagination";

function Users(props) {
  let [params, updateParams] = useSearchParams();
  let [data, UpdateData] = React.useState();
  let page = params.get("page");
  //console.log(page);
  let updateParamsHandler = (page) => {
    updateParams(page);
  };
  React.useEffect(() => {
    try {
      hello();
    } catch {
      alert("Something went wrong");
    }

    async function hello() {
      let res = await fetch(`https://reqres.in/api/users?page=${page}`);
      let json = await res.json();
      UpdateData(json);
    }
  }, [page]);

  return (
    <div>
      {data && Page(data.data)}
      {data && Pagination(data.total_pages, updateParamsHandler, page)}
    </div>
  );
}

export default Users;
