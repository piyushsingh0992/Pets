import React from "react";
import "./cartButton.css";
import {
  cardCartButton,
  productPreviewCartButton,
  cartCartButton,
} from "./common.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";

const CartButton = ({ type, id, quantity }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { cartDispatch } = useCart();
  const { toastDispatch } = useToast();
  const {
    login: { loginStatus, token },
  } = useAuth();
  

  switch (type) {
    case "CARD_CART_BUTTON":
      return cardCartButton(
        id,
        token,
        quantity,
        toastDispatch,
        cartDispatch,
        language,
        theme
      );

    case "PRODUCT_PREVIW_CART_BUTTON":
      return productPreviewCartButton(
        id,
        token,
        quantity,
        toastDispatch,
        cartDispatch,
        language,
        theme
      );

    case "CART_CART_BUTTON":
      return cartCartButton(
        id,
        token,
        quantity,
        toastDispatch,
        cartDispatch,
        language,
        theme
      );

    default:
      return cardCartButton(
        id,
        token,
        quantity,
        toastDispatch,
        cartDispatch,
        language,
        theme
      );
  }
};

export default CartButton;
