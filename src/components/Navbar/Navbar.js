import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ cartLength, setModal }) {
  return (
    <header>
      <nav>
        <h1>Sport Shop</h1>
        <ul>
          <li onClick={() => setModal(false)}>Products</li>
          <li>
            <FaShoppingCart className="icon" onClick={() => setModal(true)} />
            <span>{cartLength}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
