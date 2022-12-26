import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Components/Loader";
function SingleProductPage() {
  let { id } = useParams();
  let [data, setdata] = useState();

  useEffect(() => {
    fetchData();
    async function fetchData() {
      let response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`
      );
      let json = await response.json();
      setdata(json.data);
    }
  }, []);
  console.log(data);

  return !data ? (
    <Loader />
  ) : (
    <div data-testid="products-container">
      <div>
        <h3 data-testid="product-brand">{data.brand}</h3>
      </div>
      <div>
        <img data-testid="product-image" src={data.img} />
      </div>
      <div data-testid="product-category">Category : {data.category}</div>

      <div data-testid="product-details">Details : {data.details}</div>
      <div data-testid="product-price">Price : {data.price}</div>
    </div>
  );
}
export default SingleProductPage;
