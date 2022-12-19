import Todo from "./Todo/Todo";
import { useState, useEffect, useRef } from "react";
export default function FetchData() {
  let loading = useRef(true);
  let error = useRef(false);
  console.log("fetchdata called", loading.current, error.current);
  useEffect(() => {
    fetch(`http://localhost:3000/todos?_page=1&_limit=5`)
      .then((res) => {
        loading.current = false;
      })
      .catch((err) => {
        error.current = true;
      });
    loading.current = false;
  }, []);
  if (loading.current) {
    loading.current = false;
    return <p>Loading...</p>;
  }
  if (error.current) return <p>Something went wrong</p>;
  if (!error.current) return <Todo />;
}
