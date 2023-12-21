import React from "react";
import cardPhoto from "../../assets/images/image-hero.jpg";
import "./index.scss";
import { IoAccessibility } from "react-icons/io5";

const Card = () => {
  return (
    <div id="card">
      <h3>
        Lets go for a{" "}
        <IoAccessibility style={{ color: "pink", fontSize: "2rem" }} />?
      </h3>
      <h3>Card Title</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      <img src={cardPhoto} alt="card" />
    </div>
  );
};

export default Card;
