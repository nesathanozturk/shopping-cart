import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import shopping from "../../assets/shopping.png";

function Navbar() {
  return (
    <header>
      <nav>
        <img src={shopping} alt="Shopping Cart Logo" />
        <ul>
          <li>
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
