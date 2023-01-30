import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ basketItemsLength, setModal }) {
  return (
    <header>
      <nav>
        <h1>Shopping Cart</h1>
        <ul>
          <li onClick={() => setModal(false)}>Products</li>
          <li>
            <FaShoppingCart className="icon" onClick={() => setModal(true)} />
            <span>{basketItemsLength}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
