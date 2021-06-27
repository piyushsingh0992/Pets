import React, { useState } from "react";
import "./card.css";
import Rating from "../rating/Rating";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { Link } from "react-router-dom";
import WishListButton from "../wishListButton/WishListButton.js";
import CartButton from "../cartButton/CartButton.js";

const Card = ({
  productImage,
  productName,
  price,
  off,
  productDes,
  rating,
  outOfStock,
  imgHeight,
  id,
  fast,
  wishlist,
  quantity,
}) => {
  let newPrice = Math.floor(price - (price / 100) * off);
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      className="card"
      style={{ backgroundColor: theme.highLightBackground }}
      key={id}
    >
      {outOfStock && (
        <div className="out-of-stock">
          <p>{language.outStock}</p>
        </div>
      )}

      <Link to={`/productdetails/${id}`}>
        <div className="card-img-container">
          <img
            src={productImage}
            className="card-img"
            alt="product"
            style={{ height: imgHeight && `${imgHeight}rem` }}
          />
        </div>
        <div className="card-description-container">
          <p className="card-heading" style={{ color: theme.boldText }}>
            {productName && productName.length > 20
              ? `${productName?.slice(0, 20)}...`
              : productName}
          </p>
          <p className="card-description" style={{ color: theme.primaryText }}>
            {productDes && productDes.length > 24
              ? `${productDes?.slice(0, 24)}...`
              : productDes}
          </p>
          <div className="card-price-container">
            <p className="card-new-price" style={{ color: theme.boldText }}>
              Rs {newPrice}{" "}
            </p>
            <p className="card-old-price" style={{ color: theme.primaryText }}>
              Rs {price}
            </p>
            <p className="card-percentage-off">{off} % off</p>
          </div>

          <Rating rating={rating} />
        </div>
      </Link>
      <div className="card-btn-container">
        <CartButton quantity={quantity} id={id} type="CARD_CART_BUTTON" />
        <WishListButton wishlist={wishlist} id={id} type="PRODUCT_CARD" />
        {fast && (
          <div className="fast-delivery-tag">
            <p>Fast</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
