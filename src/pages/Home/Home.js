import React, { useState } from "react";
import products from "../../config/data";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../pages/Card/Card";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState();

  //   const removeItemAtBasket = (product) => {
  //     const updatedBasketItems = basketItems.filter(
  //       (basketItem) => basketItem.id !== product.id
  //     );
  //     setBasketItems(updatedBasketItems);
  //   };

  return (
    <section>
      <Navbar />
      <Card />
    </section>
  );
}

export default Home;
