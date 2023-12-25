import React from "react";
import CardComp from "../../components/card";
import Counter from "../../components/counter";
import Counter2 from "../../components/counter2";
import SuppliersTable from "../../assets/suppliers-table";
import { uid } from "uid";

const HomePage = ({ products, userName, skills }) => {
  return (
    <div id="home-page">
      <div className="home-page">
        <div id="cards">
          <div className="container">
            <div className="cards">
              {products.map((product, index) => (
                <CardComp key={uid()} product={product} />
              ))}
            </div>
          </div>
        </div>

        <hr />
        <div id="users">
          <div className="container">
            <div className="users">
              <h3>User Name: {userName}</h3>
            </div>
          </div>
        </div>
        <hr />
        <div id="skill-list">
          <div className="container">
            <div className="skill-list">
              <h4>Skills List</h4>
              <ul>
                {skills.map((item, index, array) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div id="counter">
          <div className="container">
            <div className="counter">
              {/* <Counter /> */}
              <Counter2 />
            </div>
          </div>
        </div>

        <div id="suppliers">
          <div className="container">
            <div className="suppliers">
              <SuppliersTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
