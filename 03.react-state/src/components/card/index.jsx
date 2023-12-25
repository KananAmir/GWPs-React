import React from "react";

const CardComp = ({ product }) => {
  return (
    <div id="card">
      <img src={product.imgUrl} alt="" />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default CardComp;
