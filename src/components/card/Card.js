import React, { useState } from "react";
import "./card.css";

import heart1 from "./images/heart1.svg";
import heart2 from "./images/heart2.svg";
import Button from "../button/Button";
import Rating from "../rating/Rating";
const Card = ({
  productImage,
  productName,
  price,
  off,
  productDes,
  addToWishList,
  removeFromWishList,
  rating,
  outOfStock,
}) => {
  let newPrice = Math.floor(price - (price / 100) * off);

  const [wishlistButton, wishlistButtonSetter] = useState(false);

  const wishListButtonHandler = () => {
    if (wishlistButton) {
      wishlistButtonSetter(false);
      removeFromWishList && removeFromWishList();
    } else {
      wishlistButtonSetter(true);
      addToWishList && addToWishList();
    }
  };

  return (
    <div class="card">
      {outOfStock && (
        <div class="out-of-stock">
          <p>Out of Stock</p>
          <p></p>
        </div>
      )}
      <div class="card-img-container">
        <img
          onClick={wishListButtonHandler}
          src={wishlistButton ? heart2 : heart1}
          class="card-add-to-wishlist"
          alt="Add toCart"
        />
        <img src={productImage} class="card-img" alt="product" />
      </div>
      <div class="card-description-container">
        <p class="card-heading">
          {productName && productName.length > 20
            ? `${productName?.slice(0, 20)}...`
            : productName}
        </p>
        <p class="card-description">
          {productDes && productDes.length > 24
            ? `${productDes?.slice(0, 24)}...`
            : productDes}
        </p>
        <div class="card-price-container">
          <p class="card-new-price">Rs {newPrice} </p>
          <p class="card-old-price">Rs {price}</p>
          <p class="card-percentage-off">{off}% off</p>
        </div>

        <Rating rating={rating} />
      </div>
      <div class="card-btn-container">
        <Button type="primary" text="Add to Cart" />
      </div>
    </div>
  );
};

export default Card;
