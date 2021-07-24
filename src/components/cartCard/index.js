import React from "react";
import "./style.css";
import Button from "../button";
import WishListButton from "../wishListButton";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../utils/cartFunctions/cartFunctions.js";
import CartButton from "../cartButton";
import { useAuth } from "../../contexts/authContext/authContext";
const CartCard = ({ productImage, productName, price, id, quantity }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { cartDispatch } = useCart();
  const { toastDispatch } = useToast();
  const {
    login: { token },
  } = useAuth();
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
           
            removeFromCart(cartDispatch, id, toastDispatch, token);
          }}
        />
        <WishListButton type="CART_WISHLIST" id={id} />
      </div>
    </div>
  );
};

export default CartCard;
