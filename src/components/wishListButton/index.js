import React from "react";
import "./style.css";
import heart1 from "../../utils/images/icons/heart1.svg";
import heart2 from "../../utils/images/icons/heart2.svg";
import Button from "../button";
import {
  addToWishList,
  removeFromWishList,
} from "../../utils/wishlistFunctions/wishlistFunctions.js";
import { removeFromCart } from "../../utils/cartFunctions/cartFunctions.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";

const WishListButton = ({ wishlist, id, text, type }) => {
  const { wishlistDispatch } = useWishlist();
  const { toastDispatch } = useToast();
  const { cartDispatch } = useCart();
  const {
    login: {  token },
  } = useAuth();
  
  const wishListButtonHandler = () => {
    if (wishlist) {
      removeFromWishList(wishlistDispatch, id, toastDispatch);
    } else {
      addToWishList(wishlistDispatch, id, toastDispatch);
    }
  };

  function addTowishListHandler() {
    addToWishList(wishlistDispatch, id, toastDispatch);
    removeFromCart(cartDispatch, id,toastDispatch);
  }

  switch (type) {
    case "PRODUCT_PREVIEW":
      return (
        <Button
          type="secondary"
          text={text}
          size="wishlist-preview-btn"
          clickFunction={wishListButtonHandler}
        />
      );

    case "PRODUCT_CARD":
      return (
        <img
          onClick={wishListButtonHandler}
          src={wishlist ? heart2 : heart1}
          className="card-add-to-wishlist"
          alt="Add toCart"
        />
      );
    case "CART_WISHLIST":
      return (
        <Button
          type="secondary"
          text="Move to Wishlist"
          size="cartCard-wishlist-btn"
          clickFunction={addTowishListHandler}
        />
      );

    default:
      return (
        <img
          onClick={wishListButtonHandler}
          src={wishlist ? heart2 : heart1}
          className="card-add-to-wishlist"
          alt="Add toCart"
        />
      );
  }
};

export default WishListButton;
