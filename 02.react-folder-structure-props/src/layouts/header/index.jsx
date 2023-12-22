import React from "react";
import "./index.scss";
import PrimaryButton from "../../components/button";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h2>This is Header</h2>
          <PrimaryButton btnTextContent={"Header Btn"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
