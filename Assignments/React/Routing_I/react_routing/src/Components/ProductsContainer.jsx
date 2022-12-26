import { useContext, useState, useEffect } from "react";
import ProductsContext from "../Context/ProductsContext";
import { Link, useSearchParams } from "react-router-dom";
import Search from "./Search";
import Product from "./Product";
import Pagination from "./Pagination";

function ProductsContainer(props) {
  const [data, setData] = useState();
  const [relatedPages, updateRelatedPages] = useState();
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
        let data = await fetch(url);
        updateRelatedPages(data.headers.get("link"));
        data = await data.json();
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
      {relatedPages && <Pagination relatedPages={relatedPages} />}
    </>
  );
}

export default ProductsContainer;
