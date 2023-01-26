import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import products from "../../config/data";
import Card from "../../components/Card/Card";
import "./Products.css";

function Products() {
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

export default Products;
