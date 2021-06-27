import React from "react";
import "./cartCard.css";
import Button from "../button/Button";
import WishListButton from "../wishListButton/WishListButton.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../utils/cartFunctions.js";
import CartButton from "../cartButton/CartButton.js";
const CartCard = ({ productImage, productName, price, id, quantity }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { cartDispatch } = useCart();
  const { toastDispatch } = useToast();

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
          <CartButton id={id} quantity={quantity} type="CART_CART_BUTTON" />
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
        <WishListButton type="CART_WISHLIST" id={id} />
      </div>
    </div>
  );
};

export default CartCard;
