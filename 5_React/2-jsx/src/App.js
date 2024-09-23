import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const plusTen = () => {
    setCount(count + 10);
  };
  const minusTen = () => {
    setCount(count - 10);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Total Clicks : {count}</h1>
      <button onClick={plusTen}>+10</button>
      <button onClick={minusTen}>-10</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default App;
