import React from "react";
import "./Card.css";

function Card() {
  return (
    <div class="container">
      <div class="card">
        <div class="image">
          <img src="https://assets.codepen.io/4164355/shoes.png" />
        </div>
        <div class="content">
          <h2>Nike Shoes</h2>
          <div class="size">
            <h3>Size :</h3>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
          </div>
          <div class="color">
            <h3>Color :</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <a>Add to basket</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
