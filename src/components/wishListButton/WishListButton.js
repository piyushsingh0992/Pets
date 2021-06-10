import React from "react";
import "./wishListButton.css";
import heart1 from "../../utils/images/icons/heart1.svg";
import heart2 from "../../utils/images/icons/heart2.svg";
import Button from "../button/Button";
import {
  addToWishList,
  removeFromWishList,
} from "../../utils/wishlistFunctions.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";

import { useToast } from "../../contexts/toastContext/toastContext.js";

const WishListButton = ({ wishlist, id, productPreview ,text}) => {
  debugger;
  const { wishlistDispatch } = useWishlist();
  const { toastDispatch } = useToast();
  const wishListButtonHandler = () => {
    debugger;
    if (wishlist) {
      removeFromWishList(wishlistDispatch, id, toastDispatch);
    } else {
      addToWishList(wishlistDispatch, id, toastDispatch);
    }
  };
  return productPreview ? (
    <Button
      type="secondary"
      text={text}
      size="wishlist-preview-btn"
      clickFunction={wishListButtonHandler}
    />
  ) : (
    <img
      onClick={wishListButtonHandler}
      src={wishlist ? heart2 : heart1}
      className="card-add-to-wishlist"
      alt="Add toCart"
    />
  );
};

export default WishListButton;
