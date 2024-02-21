import { useState } from "react";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }
  return (
    <>
      <p>{props}</p>
      <button onClick={decrement}>-</button> {counter}{" "}
      <button onClick={increment}>+</button>
      <h1>I Love you Counter</h1>
    </>
  );
};

export default Counter;
