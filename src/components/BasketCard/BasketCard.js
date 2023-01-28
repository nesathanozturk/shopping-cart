import React, { useState, useEffect } from "react";
import useShoppingCardContext from "../../hooks/use-shopping-card";
import { GoDiffAdded } from "react-icons/go";
import { CiSquareRemove } from "react-icons/ci";
import "./BasketCard.css";

function BasketCard({ cart, setCart }) {
  const [price, setPrice] = useState(0);

  const handleChange = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handlePrice = () => {
    let productPrice = 0;
    cart.map((product) => (productPrice += product.amount * product.price));
    setPrice(productPrice);
  };

  useEffect(() => {
    handlePrice();
  });

  const removeItemAtBasket = (id) => {};

  return (
    <section>
      {cart.map((product) => (
        <div className="basket-container">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <p>{product.name}</p>
            <div className="products">
              <button className="add" onClick={() => handleChange(product, 1)}>
                <GoDiffAdded />
              </button>
              <span>{product.amount}</span>
              <button
                className="remove"
                onClick={() => handleChange(product, -1)}
              >
                <CiSquareRemove />
              </button>
            </div>
          </div>
          <span className="product-price">{product.price} &#8378;</span>
        </div>
      ))}
      <div className="total">
        <span>Total Price of Your Basket:</span>
        <span>{price} &#8378;</span>
      </div>
    </section>
  );
}

export default BasketCard;
