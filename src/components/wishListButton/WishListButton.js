import React from "react";
import "./wishListButton.css";
import heart1 from "../../utils/images/icons/heart1.svg";
import heart2 from "../../utils/images/icons/heart2.svg";
import Button from "../button/Button";
import {
  addToWishList,
  removeFromWishList,
} from "../../utils/wishlistFunctions/wishlistFunctions.js";
import { removeFromCart } from "../../utils/cartFunctions/cartFunctions.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";

const WishListButton = ({ wishlist, id, text, type }) => {
  const { wishlistDispatch } = useWishlist();
  const { toastDispatch } = useToast();
  const { cartDispatch } = useCart();
  const wishListButtonHandler = () => {
    if (wishlist) {
      removeFromWishList(wishlistDispatch, id, toastDispatch);
    } else {
      addToWishList(wishlistDispatch, id, toastDispatch);
    }
  };

  function addTowishListHandler() {
    addToWishList(wishlistDispatch, id, toastDispatch);
    removeFromCart(cartDispatch, id);
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
