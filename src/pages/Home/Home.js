import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../pages/Card/Card";
import Products from "../Products/Products";
import "./Home.css";

function Home() {
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);

  const addItemAtBasket = (product) => {
    if (cart.indexOf(product) !== -1) return;
    setCart([...cart, product]);
  };

  return (
    <main>
      <Navbar cartLength={cart.length} setModal={setModal} />
      {modal ? (
        <Products cart={cart} setCart={setCart} />
      ) : (
        <Card addItemAtBasket={addItemAtBasket} />
      )}
    </main>
  );
}

export default Home;
