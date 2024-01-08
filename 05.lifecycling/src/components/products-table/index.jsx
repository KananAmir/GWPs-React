import React, { useState } from "react";

const ProductsTable = ({ products }) => {
 
//   console.log(products);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity Per Unit</th>
          <th>Unit Price</th>
          <th>Discontinued</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantityPerUnit}</td>
              <td>{item.unitPrice}</td>
              <td>{item.discontinued ? "stockda yoxdur" : "stockda var"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductsTable;
