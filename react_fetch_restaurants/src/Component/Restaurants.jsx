import { useState, useRef, useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
function Restaurants() {
  let [loadingStatus, updateLoadingStatus] = useState(useRef(true));
  let dataRef = useRef(null);
  let [page, ChangePage] = useState(1);

  useEffect(() => {
    fetch(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dataRef.current = data;
        dataRef = data;
      });
  }, [page]);
  if (loadingStatusRef.current) return <LoadingIndicator />;
  else
    return (
      <div>
        <h1 data-testid="restaurants-header">Restaurants List</h1>
        <div data-testid="restaurants-container">
          {dataRef.map((elem, index) => {})}
        </div>
        <div>{/* Pagination Component */}</div>
      </div>
    );
}

export default Restaurants;
