import products from "../../data/data";
import ProductCard from "../ProductCard/ProductCard";
import "./Card.css";

function Card({ addProductAtBasket }) {
  return (
    <section>
      <div className="products-box">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addProductAtBasket={addProductAtBasket}
          />
        ))}
      </div>
    </section>
  );
}

export default Card;
