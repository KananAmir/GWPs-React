import React, { useState } from "react";

const Counter = ({ count, setCount, testFunc }) => {
  const [className, setClassName] = useState("gwp");

  return (
    <>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          console.log(count);
          console.log("salam");
        }}
      >
        count is {count}
      </button>
    </>
  );
};

export default Counter;
