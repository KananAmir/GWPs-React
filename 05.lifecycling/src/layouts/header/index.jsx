import React from "react";
import "./index.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1> Galatasaray </h1>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home</NavLink>
              </li>
              <li>
                <NavLink to="/about"> About</NavLink>
              </li>
              <li>
                <NavLink to="/products"> Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
