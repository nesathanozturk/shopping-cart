import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BasketCard from "../../components/BasketCard/BasketCard";
import products from "../../config/data";
import "./Products.css";

function Products({ cart, setCart, handleChange }) {
  return (
    <div>
      <BasketCard cart={cart} setCart={setCart} handleChange={handleChange} />
    </div>
  );
}

export default Products;
