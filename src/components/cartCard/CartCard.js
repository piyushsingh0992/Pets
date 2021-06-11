import React from "react";
import "./cartCard.css";
import Button from "../button/Button";
import plus from "../../utils/images/icons/plus.svg";
import minus from "../../utils/images/icons/minus.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { Link } from "react-router-dom";
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
  const { toastState, toastDispatch } = useToast();

  function addTowishListHandler() {
    addToWishList(wishlistDispatch, id, toastDispatch);

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
        <Link to={`/productdetails/${id}`}>
          <img src={productImage} className="cartProduct-image" />
        </Link>
        <div className="cartProduct-details">
          <Link to={`/productdetails/${id}`}>
            <h2 style={{ color: theme.boldText }}>{productName}</h2>
          </Link>
          <p style={{ color: theme.primaryText }}>Rs {price}</p>

          <div
            className="quantity-controls"
            style={{ color: theme.primaryText }}
          >
            {language.quantity}: &ensp;
            <img
              src={minus}
              onClick={() => {
                quantityManagerInCart(
                  cartDispatch,
                  "DECREASE",
                  id,
                  toastDispatch
                );
              }}
            />
            <p style={{ color: theme.boldText }}>{quantity}</p>
            <img
              src={plus}
              onClick={() => {
                quantityManagerInCart(
                  cartDispatch,
                  "INCREASE",
                  id,
                  toastDispatch
                );
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
          clickFunction={() => {
            removeFromCart(cartDispatch, id, toastDispatch);
          }}
        />
        <Button
          type="secondary"
          text="Move to Wishlist"
          size="cartCard-btn"
          clickFunction={addTowishListHandler}
        />
      </div>
    </div>
  );
};

export default CartCard;
