import React from "react";
import "./style.css";
import {
  cardCartButton,
  productPreviewCartButton,
  cartCartButton,
} from "./common.js";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";
import { useToast } from "../../contexts/toastContext";
import { useCart } from "../../contexts/cartContext";


const CartButton = ({ type, id, quantity }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { cartDispatch } = useCart();
  const { toastDispatch } = useToast();
 
  

  switch (type) {
    case "CARD_CART_BUTTON":
      return cardCartButton(
        id,
        quantity,
        toastDispatch,
        cartDispatch,
        language,
        theme
      );

    case "PRODUCT_PREVIW_CART_BUTTON":
      return productPreviewCartButton(
        id,
        quantity,
        toastDispatch,
        cartDispatch,
        language,
        theme
      );

    case "CART_CART_BUTTON":
      return cartCartButton(
        id,
        quantity,
        toastDispatch,
        cartDispatch,
        language,
        theme
      );

    default:
      return cardCartButton(
        id,
        quantity,
        toastDispatch,
        cartDispatch,
        language,
        theme
      );
  }
};

export default CartButton;
