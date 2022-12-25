import React from "react";
import ProductsContainer from "./ProductsContainer";
import { useSearchParams } from "react-router-dom";
function Products(props) {
  console.log("products called");
  return (
    <table>
      <tbody>
        <ProductsContainer />
      </tbody>
    </table>
  );
}

export default Products;
