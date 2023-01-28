import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <NavLink className="link" to="/">
          <h1>Sport Shopping</h1>
        </NavLink>
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
