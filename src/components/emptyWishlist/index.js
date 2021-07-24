import React from "react";
import Button from "../button";
import wishlistError from "../../utils/images/icons/emptyWishlist.png";
import { useTheme } from "../../contexts/themeContext";
import "./style.css";
import { Link } from "react-router-dom";
const EmptyWishlist = () => {
  const { theme } = useTheme();
  return (
    <div className="emptyWishlist">
      <div>
        <p style={{ color: theme.boldText }}>Your Wishlist is empty.</p>
        <p style={{ color: theme.boldText }}>
          Explor some of our exclusive pet Products
        </p>
      </div>
      <Link to="/products">
        <Button text="Explore" />
      </Link>

      <img src={wishlistError} />
    </div>
  );
};

export default EmptyWishlist;
