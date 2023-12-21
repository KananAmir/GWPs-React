import React from "react";
import "./index.css";
const PrimaryButton = (props) => {
  console.log(props);
  return (
    <button className={props.bg === "red" ? "bg-red" : ""}>{props.text}</button>
  );
};

export default PrimaryButton;
