import React from "react";
import BasketCard from "../../components/BasketCard/BasketCard";

function Products({ basketItems, setBasketItems }) {
  return (
    <div>
      <BasketCard basketItems={basketItems} setBasketItems={setBasketItems} />
    </div>
  );
}

export default Products;
