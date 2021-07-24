import React from "react";
import Button from "../button";
import cartError from "../../utils/images/icons/emptyCart.png";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import "./emptyCart.css";
import { Link } from "react-router-dom";
const EmptyWishlist = () => {
  const { theme } = useTheme();
  return (
    <div className="emptyCart">
      <div>
        <p style={{ color: theme.boldText }}>Your Cart is empty.</p>
        <p style={{ color: theme.boldText }}>
          Explore some of our exclusive pet Products
        </p>
      </div>
      <Link to="/products">
        <Button text="Explore" />
      </Link>

      <img src={cartError} />
    </div>
  );
};

export default EmptyWishlist;
