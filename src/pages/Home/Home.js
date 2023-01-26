import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import products from "../../config/data";
import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  return (
    <section>
      <Navbar />
      <div className="products">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Home;
