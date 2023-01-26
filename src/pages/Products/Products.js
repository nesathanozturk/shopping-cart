import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import products from "../../config/data";
import Card from "../../components/Card/Card";

function Products() {
  return (
    <section>
      <Navbar />
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;
