import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [userName, setUserName] = useState("Ruslan");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("HomePage component mounted");
    return () => {
      console.log("HomePage component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("HomePage component updated");
  }, [count]);

  return (
    <div id="home-page">
      <div className="container">
        {/* <div className="home-page">HomePage</div> */}
        <br />
        <br />
        <button
          onClick={() => {
            setUserName("Ravan");
          }}
        >
          Change Username
        </button>
        <br />
        <br />
        <h4>User Name: {userName}</h4>
        <br />
        <br />
        <hr />
        <br />
        <button
          onClick={() => {
            setCount((c) => c + 1);
          }}
        >
          Increment
        </button>
        <br />
        <br />
        <h3>Count: {count}</h3>
      </div>
    </div>
  );
};

export default HomePage;
