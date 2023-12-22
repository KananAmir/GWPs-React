import React from "react";
import CardComp from "../../components/card";
import UsersTable from "../../components/table";
import "./index.scss";
import InputComp from "../../input";
const HomePage = (props) => {
  // console.log(props);
  return (
    <div id="home-page">
      <div className="container">
        <div className="home-page">HomePage</div>
        <br />
        <InputComp />
        <br />
        <br />
        <h3>User Name: {props.userName}</h3>
        <CardComp cardTitle={props.cardTitle} />
        <hr />
        <h3 style={{ textAlign: "center" }}>USERS TABLE</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <UsersTable users={props.users} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
