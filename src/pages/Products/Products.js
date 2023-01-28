import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BasketCard from "../../components/BasketCard/BasketCard";
import "./Products.css";

function Products({ cart, setCart }) {
  return (
    <div>
      <BasketCard cart={cart} setCart={setCart} />
    </div>
  );
}

export default Products;
