import React from "react";
import ProductsContainer from "./ProductsContainer";
import { useSearchParams } from "react-router-dom";
import Pagination from "./Pagination";

function Products(props) {
  return (
    <>
      <table>
        <tbody>
          <ProductsContainer />
        </tbody>
      </table>
      <Pagination />
    </>
  );
}

export default Products;
