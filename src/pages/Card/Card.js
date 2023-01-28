import React from "react";
import products from "../../config/data";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Card.css";

function Card({ handleClick }) {
  return (
    <section>
      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleClick={handleClick}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
