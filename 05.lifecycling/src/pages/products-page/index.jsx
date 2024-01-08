import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import ProductsTable from "../../components/products-table";
const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const BASE_URL = "https://northwind.vercel.app/api";
  const getData = async () => {
    try {
      setLoading(true);
      let response = await axios(`${BASE_URL}/products`);
      // console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="products-page">
      <div className="container">
        <div className="products-page">
          <h1>Products Info Table</h1>
          {loading ? <h1>Loading...</h1> : <ProductsTable products={data} />}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
