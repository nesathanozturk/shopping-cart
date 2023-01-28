import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../pages/Card/Card";
import Products from "../Products/Products";
import "./Home.css";

function Home() {
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    if (cart.indexOf(product) !== -1) return;
    setCart([...cart, product]);
  };

  const handleChange = (product, d) => {
    const ind = cart.indexOf(product);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <section>
      <Navbar />
      <Card handleClick={handleClick} />
      <Products cart={cart} setCart={setCart} handleChange={handleChange} />
    </section>
  );
}

export default Home;
