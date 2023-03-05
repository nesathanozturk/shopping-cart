import "./ProductCard.css";

function ProductCard({ product, addProductAtBasket }) {
  return (
    <div class="container">
      <div class="card">
        <div class="image">
          <img src={product.image} alt={product.name} />
        </div>
        <div class="content">
          <h2>{product.name}</h2>
          <div class="size">
            <h3>Size:</h3>
            <span>{product.sizes[0].text}</span>
            <span>{product.sizes[1].text}</span>
            <span>{product.sizes[2].text}</span>
            <span>{product.sizes[3].text}</span>
          </div>
          <div class="price">
            <h3>{product.price} &#8378;</h3>
          </div>
          <button onClick={() => addProductAtBasket(product)}>
            Add to basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
