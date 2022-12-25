import { useContext, useState, useEffect } from "react";
import ProductsContext from "../Context/ProductsContext";
import { Link, useSearchParams } from "react-router-dom";

function ProductsContainer(props) {
  console.log("productscontainer called");
  const [data, setData] = useState();
  const [searchParams, updateSearchParams] = useSearchParams();
  let [page, changePage] = useState(searchParams.get("page"));
  let url = `http://localhost:3000/products?_page=${page}&_limit=2`;

  let updateSearchParamsHandler = () => {
    updateSearchParams();
  };
  useEffect(() => {
    let products = async () => {
      try {
        let data = await fetch(url);
        let relatedPages = data.headers.get("link");
        data = await data.json();
        setData(data);
      } catch {
        console.log("Something went wrong");
      }
    };
    products();
  }, [url]);
  data && console.log(data);
}

export default ProductsContainer;
