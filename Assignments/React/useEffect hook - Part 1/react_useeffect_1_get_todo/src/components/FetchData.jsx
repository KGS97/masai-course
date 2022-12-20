import Todo from "./Todo/Todo";
import { useState, useEffect, useRef } from "react";
export default function FetchData() {
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(false);
  console.log("fetchdata called", loading, error);
  useEffect(() => {
    fetch(`http://localhost:3000/todos?_page=1&_limit=5`)
      .then((res) => {
        setLoading(false);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.length === 0) setError(true);
      });
    setLoading(false);
  });
  return (
    <>
      {loading && <p>loading</p>}
      {error && <p>Something went wrong</p>}
      {!error && null}
    </>
  );
}
