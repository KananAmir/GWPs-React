import React from "react";
import "./index.scss";
const CardComp = ({ cardTitle }) => {
  // const { cardTitle } = props;
  return (
    <div id="card">
      <h3>{cardTitle}</h3>
      <p>
        Desc: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        illo harum, consequuntur possimus consequatur nostrum at aliquam iste
        molestias nulla magnam ullam modi commodi repudiandae quia laborum ipsam
        eum blanditiis.
      </p>
    </div>
  );
};

export default CardComp;
