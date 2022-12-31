import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementbyAmount, reset } from "./counterSlice";

const Counter = () => {
  const [amount, setAmount] = React.useState();
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <p>{count}</p>
      <input type="text" />
      <button>Add by amount</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(reset())}>+</button>
      <button onClick={() => dispatch(incrementbyAmount())}>Reset</button>
    </>
  );
};

export default Counter;
