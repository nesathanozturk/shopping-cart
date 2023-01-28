import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ size }) {
  return (
    <header>
      <nav>
        <h1>Sport Shopping</h1>
        <ul>
          <li>
            <FaShoppingCart className="icon" />
            <span>{size}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
