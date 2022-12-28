import { useContext, useState, useEffect } from "react";
import ProductsContext from "../Context/ProductsContext";
import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";
import Product from "./Product";
import Pagination from "./Pagination";
import parseLinkHeader from "parse-link-header";
function ProductsContainer(props) {
  const [data, setData] = useState();
  const [totalPages, updateTotalPages] = useState();
  const [search, UpdateSearch] = useState("");
  const [searchParams, updateSearchParams] = useSearchParams();

  let url = `http://localhost:3000/products?_page=${searchParams.get(
    "page"
  )}&_limit=${searchParams.get("limit")}&q=${searchParams.get("q")}`;
  let updatePageHandler = (page) => {
    updateSearchParams({
      page: page,
      limit: searchParams.get("limit"),
      q: searchParams.get("q"),
    });
  };
  let updateQHandler = (q) => {
    updateSearchParams({
      page: searchParams.get("page"),
      limit: searchParams.get("limit"),
      q: q,
    });
  };

  useEffect(() => {
    let products = async () => {
      try {
        let res = await fetch(url);

        //updateRelatedPages(parseLinkHeader(res.headers.get("link")));
        updateTotalPages(
          Math.ceil(
            res.headers.get("X-Total-Count") / searchParams.get("limit")
          )
        );
        let data = await res.json();
        setData(data);
      } catch {
        console.log("Something went wrong");
      }
    };
    products();
  }, [url]);
  return (
    <>
      <Search updater={updateQHandler} />
      {data &&
        data.map((elem) => {
          return <Product key={elem.id} elem={elem} />;
        })}
      {totalPages && (
        <Pagination
          totalPages={totalPages}
          handler={updatePageHandler}
          page={searchParams.get("page")}
        />
      )}
    </>
  );
}

export default ProductsContainer;
