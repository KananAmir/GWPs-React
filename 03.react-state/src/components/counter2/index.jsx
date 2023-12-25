import React, { useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";

const Counter2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Increment count={count} setCount={setCount} />
      <h1>{count}</h1>
      <Decrement count={count} setCount={setCount} />
    </div>
  );
};

export default Counter2;
