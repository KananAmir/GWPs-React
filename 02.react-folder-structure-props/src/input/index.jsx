import React from "react";

const InputComp = () => {
  const handleChange = (inputValue) => {
    console.log(inputValue);
  };
  return (
    <input
      type="text"
      placeholder="type here.."
      // onChange={(e) => console.log(e.target.value)}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default InputComp;
