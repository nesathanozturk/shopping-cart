import React from "react";
import BasketCard from "../../components/BasketCard/BasketCard";

function Products({ cart, setCart }) {
  return (
    <div>
      <BasketCard cart={cart} setCart={setCart} />
    </div>
  );
}

export default Products;
