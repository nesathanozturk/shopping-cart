import React, { useState, useEffect } from "react";
import { CgAdd } from "react-icons/cg";
import { CiCircleRemove } from "react-icons/ci";
import { BiTrash } from "react-icons/bi";
import "./BasketCard.css";

function BasketCard({ cart, setCart }) {
  const [price, setPrice] = useState(0);

  const handleChangeAmount = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handleProductPrice = () => {
    let productPrice = 0;
    cart.map((product) => (productPrice += product.amount * product.price));
    setPrice(productPrice);
  };

  useEffect(() => {
    handleProductPrice();
  });

  const removeItemAtBasket = (id) => {
    const updatedBasket = cart.filter((product) => product.id !== id);
    setCart(updatedBasket);
    handleProductPrice();
  };

  const clearAllItems = (id) => {
    setCart(cart.filter((product) => product.id && !product.id));
  };

  return (
    <section className="basket-card">
      {cart.map((product) => (
        <div className="basket-container">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <p>{product.name}</p>
            <div className="product-ar">
              <button
                className="increaseBtn"
                onClick={() => handleChangeAmount(product, 1)}
              >
                <CgAdd />
              </button>
              <span className="product-amount">{product.amount}</span>
              <button
                className="decreaseBtn"
                onClick={() => handleChangeAmount(product, -1)}
              >
                <CiCircleRemove />
              </button>
            </div>
            <span className="product-price">{product.price} &#8378;</span>
            <button
              className="removeBtn"
              onClick={() => removeItemAtBasket(product.id)}
            >
              <BiTrash />
            </button>
          </div>
        </div>
      ))}
      {cart?.length ? (
        <div className="total">
          <span onClick={() => clearAllItems()}>Clear All</span>
          <span>Total Amount:&nbsp; {price} &#8378;</span>
        </div>
      ) : (
        <p className="warning">There is nothing in your basket!</p>
      )}
    </section>
  );
}

export default BasketCard;
