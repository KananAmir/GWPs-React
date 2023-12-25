import React from "react";

const ChildComp = ({ getChildCompData }) => {
  let num = 5;
  getChildCompData(num);
  return <div>ChildComp</div>;
};

export default ChildComp;
