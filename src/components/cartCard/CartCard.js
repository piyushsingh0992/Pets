import React from "react";
import "./cartCard.css";
import Button from "../button/Button";
import Product from "./images/dogFood.jpg";
import plus from "../../utils/images/icons/plus.svg";
import minus from "../../utils/images/icons/minus.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";

import {
  quantityManagerInCart,
  removeFromCart,
} from "../../utils/cartFunctions.js";

import { addToWishList } from "../../utils/wishlistFunctions.js";

const CartCard = ({
  productImage,
  productName,
  price,

  id,

  quantity,
}) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { wishlistDispatch } = useWishlist();
  const { cartDispatch } = useCart();

  
  function addTowishList() {
    addToWishList(wishlistDispatch, id);
    removeFromCart(cartDispatch, id);
  }

  return (
    <div
      className="cartCard"
      style={{
        backgroundColor: theme.highLightBackground,
      }}
    >
      <div className="cartCard-details">
        <img src={productImage} className="cartProduct-image" />
        <div className="cartProduct-details">
          <h2 style={{ color: theme.boldText }}>{productName}</h2>
          <p style={{ color: theme.primaryText }}>Rs {price}</p>

          <div
            className="quantity-controls"
            style={{ color: theme.primaryText }}
          >
            {language.quantity}: &ensp;
            <img
              src={minus}
              onClick={() => {
                quantityManagerInCart(cartDispatch, "DECREASE", id);
              }}
            />
            <p style={{ color: theme.boldText }}>{quantity}</p>
            <img
              src={plus}
              onClick={() => {
                quantityManagerInCart(cartDispatch, "INCREASE", id);
              }}
            />
          </div>
        </div>
      </div>
      <div className="cartCard-btn-container">
        <Button
          type="secondary"
          text={language.removeCart}
          size="cartCard-btn"
          clickFunction={()=>{removeFromCart(cartDispatch, id)}}
        />
        <Button
          type="secondary"
          text="Move to Wishlist"
          size="cartCard-btn"
          clickFunction={addTowishList}
        />
      </div>
    </div>
  );
};

export default CartCard;
