import React, { useRef } from "react";
import { deleteData } from "../../services/api";

const TableRow = ({
  data,
  product,
  setUnitPrice,
  setQuantityPerUnit,
  setProductName,
  // setEditStatus,
  setEditId,
}) => {
  const btnRef = useRef();
  const handleDelete = async (id) => {
    // console.log(id);

    // console.log(btnRef);
    if (window.confirm("Are u sure??")) {
      const statusCode = await deleteData("products", id);
      if (statusCode === 200) {
        // console.log(btn);
        btnRef.current.closest("tr").remove();

        setProductName("");
        setQuantityPerUnit("");
        setUnitPrice(0);
      }
    }
  };

  const handleEdit = (id) => {
    let editedProduct = data.find((item) => item.id === id);
    // console.log(editedProduct);
    setProductName(editedProduct.name);
    setQuantityPerUnit(editedProduct.quantityPerUnit);
    setUnitPrice(editedProduct.unitPrice);
    // setEditStatus(true);
    setEditId(id);
    window.scrollTo(0, 0);
  };
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.quantityPerUnit}</td>
      <td>{product.unitPrice}</td>
      <td>{product.discontinued ? "var" : "yoxdu"}</td>
      <td>
        <button onClick={() => handleDelete(product.id)} ref={btnRef}>
          DELETE
        </button>
        <button onClick={() => handleEdit(product.id)}>EDIT</button>
      </td>
    </tr>
  );
};

export default TableRow;
