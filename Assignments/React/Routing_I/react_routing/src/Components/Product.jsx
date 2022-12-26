import React from "react";

function Product(props) {
  let {
    elem: { name, price, id },
  } = props;
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default Product;
