import React from "react";
import { suppliers } from "../../data";
import TableRow from "./TableRow";
const SuppliersTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Company Name</th>
          <th>Street</th>
          <th>City, Country</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((supplier) => {
          return <TableRow key={supplier.id} supplier={supplier} />;
        })}
      </tbody>
    </table>
  );
};

export default SuppliersTable;
