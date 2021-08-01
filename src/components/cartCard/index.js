import React, { useState } from "react";
import "./style.css";
import Button from "../button";
import WishListButton from "../wishListButton";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";
import { useCart } from "../../contexts/cartContext";
import { useToast } from "../../contexts/toastContext";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../utils/cartFunctions";
import CartButton from "../cartButton";
import { useAuth } from "../../contexts/authContext";
const CartCard = ({ productImage, productName, price, id, quantity }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { cartDispatch } = useCart();
  const { toastDispatch } = useToast();
  const {
    login: { token },
  } = useAuth();
  const [loader, loaderSetter] = useState(false);
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
          loader={loader}
          type="secondary"
          text={language.removeCart}
          size="cartCard-btn"
          clickFunction={() => {
            removeFromCart(
              cartDispatch,
              id,
              toastDispatch,
              loaderSetter
            );
          }}
        />
        <WishListButton type="CART_WISHLIST" id={id} />
      </div>
    </div>
  );
};

export default CartCard;
