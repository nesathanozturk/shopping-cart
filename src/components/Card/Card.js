import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import "./Card.css";

function Card({ product }) {
  const { name, price, image } = product;

  return (
    <div class="container">
      <div class="card">
        <div class="image">
          <img src={image} alt={name} />
        </div>
        <div class="content">
          <h2>{name}</h2>
          <div class="size">
            <h3>Size :</h3>
            <span>41</span>
            <span>42</span>
            <span>43</span>
            <span>44</span>
          </div>
          <div class="price">
            <h3>{price} &#8378;</h3>
          </div>
          <a>
            Add to basket <MdOutlineAddShoppingCart className="add-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
