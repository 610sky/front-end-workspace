import { useState, useEffect, useRef } from "react";

import Btn from "./Btn";

const Counter = () => {
  const [count, setCount] = useState(0);
  const updateCheckRef = useRef(false);

  const plusTen = () => {
    setCount(count + 10);
  };
  const minusTen = () => {
    setCount(count - 10);
  };
  const reset = () => {
    setCount(0);
  };

  // 마운트
  useEffect(() => {
    console.log("mount!");
  }, []);

  // 업데이트
  useEffect(() => {
    if (!updateCheckRef.current) {
      updateCheckRef.current = true;
      return;
    } else {
      console.log("count update!");
    }
  }, [count]);

  // 언마운트
  useEffect(() => {
    return () => {
      console.log("unmount!");
    };
  }, []);
  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <Btn click={plusTen} text="+10" />
      <Btn click={minusTen} text="-10" />
      <Btn click={reset} text="reset" />
    </div>
  );
};

export default Counter;
