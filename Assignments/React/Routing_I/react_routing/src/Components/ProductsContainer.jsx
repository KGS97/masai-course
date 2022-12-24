import { useContext } from "react";
import ProductsContext from "../Context/ProductsContext";
import { Link } from "react-router-dom";
function ProductsContainer(props) {
  let products = useContext(ProductsContext);
  return products.map((elem) => {
    let { name, price, id } = elem;
    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{price}</td>
        <td>
          <Link to={`/ProductPage/${id}`}>More Details</Link>
        </td>
      </tr>
    );
  });
}

export default ProductsContainer;
