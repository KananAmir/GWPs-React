import React from "react";

const TableRow = ({ supplier }) => {
  return (
    <tr>
      <td>{supplier.id}</td>
      <td>{supplier.companyName}</td>
      <td>{supplier.address.street}</td>
      <td>
        {supplier.address.city}, {supplier.address.country}
      </td>
      <td>{supplier.address.phone}</td>
    </tr>
  );
};

export default TableRow;
