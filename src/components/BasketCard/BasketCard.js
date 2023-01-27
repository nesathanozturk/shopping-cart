import React from "react";
import useShoppingCartContext from "../../hooks/use-shopping-cart";

function BasketCard() {
  const { basketItems, setBasketItems, price, setPrice, handleChange } =
    useShoppingCartContext();

  return <div></div>;
}

export default BasketCard;
