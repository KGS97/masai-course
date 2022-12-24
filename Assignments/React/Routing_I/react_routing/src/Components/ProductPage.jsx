import React from "react";
import { useParams } from "react-router-dom";
import ProductsContext from "../Context/ProductsContext";

function ProductPage() {
  let products = React.useContext(ProductsContext);
  let { id } = useParams();
  let product = products[id];
  console.log(product);
  return product ? (
    <ul>
      {Object.keys(product).map((key) => {
        let value = product[key];
        return (
          <li>
            {key} : {value}
          </li>
        );
      })}
    </ul>
  ) : (
    <p>Product Not found</p>
  );
}

export default ProductPage;
