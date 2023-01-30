import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../pages/Card/Card";
import Products from "../Products/Products";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
import "animate.css";

function Home() {
  const [basketItems, setBasketItems] = useState([]);
  const [modal, setModal] = useState(false);

  const addedProductNotify = () =>
    toast("The product has been added to the basket.");

  const addProductAtBasket = (product) => {
    if (basketItems.indexOf(product) !== -1) return;
    setBasketItems([...basketItems, product]);
    addedProductNotify();
  };

  return (
    <main className="animate__animated animate__fadeInDown">
      <Navbar basketItemsLength={basketItems.length} setModal={setModal} />
      {modal ? (
        <Products basketItems={basketItems} setBasketItems={setBasketItems} />
      ) : (
        <Card addProductAtBasket={addProductAtBasket} />
      )}
    </main>
  );
}

export default Home;
