import React, { useState } from "react";
import "./style.css";
import heart1 from "../../utils/images/icons/heart1.svg";
import heart2 from "../../utils/images/icons/heart2.svg";
import Button from "../button";
import {
  addToWishList,
  removeFromWishList,
} from "../../utils/wishlistFunctions/wishlistFunctions.js";
import { removeFromCart } from "../../utils/cartFunctions/cartFunctions.js";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { useToast } from "../../contexts/toastContext";
import { useAuth } from "../../contexts/authContext/index.js";
import MiniLoader from "../miniloader";

const WishListButton = ({ wishlist, id, text, type }) => {
  const { wishlistDispatch } = useWishlist();
  const { toastDispatch } = useToast();
  const { cartDispatch } = useCart();
  const {
    login: { token },
  } = useAuth();
  const [loader, loaderSetter] = useState(false);

  const wishListButtonHandler = () => {
    if (wishlist) {
      removeFromWishList(wishlistDispatch, id, toastDispatch, loaderSetter);
    } else {
      addToWishList(wishlistDispatch, id, toastDispatch, loaderSetter);
    }
  };

  function addTowishListHandler() {
    addToWishList(wishlistDispatch, id, toastDispatch, loaderSetter);
    removeFromCart(cartDispatch, id, toastDispatch, loaderSetter);
  }

  switch (type) {
    case "PRODUCT_PREVIEW":
      return (
        <Button
          loader={loader}
          type="secondary"
          text={text}
          size="wishlist-preview-btn"
          clickFunction={wishListButtonHandler}
        />
      );

    case "PRODUCT_CARD":
      return loader ? (
        <MiniLoader extraClass="card-add-to-wishlist" />
      ) : (
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
          loader={loader}
          type="secondary"
          text="Move to Wishlist"
          size="cartCard-wishlist-btn"
          clickFunction={addTowishListHandler}
        />
      );

    default:
      return loader ? (
        <MiniLoader extraClass="card-add-to-wishlist"/>
      ) : (
        <img
          onClick={wishListButtonHandler}
          src={wishlist ? heart2 : heart1}
          className="card-add-to-wishlist"
          alt="Add to Cart"
        />
      );
  }
};

export default WishListButton;
