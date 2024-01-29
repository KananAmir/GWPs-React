// import axios from "axios";
import React, { useEffect, useState } from "react";
import { addData, getData, updateData } from "../../services/api";
import TableRow from "../../components/table-row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [quantityPerUnit, setQuantityPerUnit] = useState("");
  const [unitPrice, setUnitPrice] = useState(0);
  const [editStatus, setEditStatus] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    // console.log("mount");
    // getData();
    getProducts();
    // return () => {
    //   console.log("unmounting");
    // };
  }, []);

  async function getProducts() {
    const result = await getData("products");
    setProducts(result);
  }
  // const getData = async () => {
  //   try {
  //     const response = await axios("https://northwind.vercel.app/api/products");
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (productName && quantityPerUnit && unitPrice) {
        let product = {
          name: productName,
          quantityPerUnit,
          unitPrice,
        };
        if (!editStatus) {
          let res = await addData("products", product);
          // console.log(res);
        } else {
          let res = await updateData("products", product, editId);
        }

        setProductName("");
        setQuantityPerUnit("");
        setUnitPrice(0);

        await getProducts();
      } else {
        alert("pls, fill all fields!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container>
        <Row className="justify-content-center my-5 ">
          <Form style={{ maxWidth: "500px" }} onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={(e) => setProductName(e.target.value)}
                value={productName}
              />
              <Form.Control
                type="text"
                placeholder="Quantitiy per Unit"
                onChange={(e) => setQuantityPerUnit(e.target.value)}
                value={quantityPerUnit}
              />
              <Form.Control
                type="number"
                placeholder="Unit Price"
                onChange={(e) => setUnitPrice(e.target.value)}
                value={unitPrice}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Row>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>QuantityPerUnit</th>
              <th>Unit Price</th>
              <th>Discontinued</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => {
              return (
                <TableRow
                  data={products}
                  product={item}
                  key={item.id}
                  setProductName={setProductName}
                  setQuantityPerUnit={setQuantityPerUnit}
                  setUnitPrice={setUnitPrice}
                  setEditStatus={setEditStatus}
                  setEditId={setEditId}
                />
              );
            })}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default ProductsPage;
