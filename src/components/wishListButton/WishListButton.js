import React from "react";
import "./wishListButton.css";
import heart1 from "../../utils/images/icons/heart1.svg";
import heart2 from "../../utils/images/icons/heart2.svg";
import {
  addToWishList,
  removeFromWishList,
} from "../../utils/wishlistFunctions.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";

import { useToast } from "../../contexts/toastContext/toastContext.js";

const WishListButton = ({ wishlist, id }) => {
  const { wishlistDispatch } = useWishlist();
  const { toastDispatch } = useToast();
  const wishListButtonHandler = () => {

    if (wishlist) {
      removeFromWishList(wishlistDispatch, id, toastDispatch);
    } else {
      addToWishList(wishlistDispatch, id, toastDispatch);
    }
  };
  return (
    <img
      onClick={wishListButtonHandler}
      src={wishlist ? heart2 : heart1}
      className="card-add-to-wishlist"
      alt="Add toCart"
    />
  );
};

export default WishListButton;
