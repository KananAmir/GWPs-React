import React, { useEffect, useState } from "react";
import Counter from "../../components/counter";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("counter updating");
  //   return () => {
  //     console.log(" counter unmounting");
  //   };
  // }, [count]);

  const testFunc = (param) => {
    // console.log(param);
  };

  return (
    <>
      <div className="card">
        COUNTER:{" "}
        <Counter count={count} setCount={setCount} testFunc={testFunc} />
      </div>
    </>
  );
};

export default CounterPage;
