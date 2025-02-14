import { useState } from "react";

function useCounter(initialCount=69,value=1) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrement = () => {
    setCount((prevCount) => {
      return prevCount - value;
    });
  };
  const reset = () => {
    setCount(initialCount);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
