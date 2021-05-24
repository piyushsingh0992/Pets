import React from "react";
import WishlistGrid from "../../components/wishlistGrid/WishlistGrid.js";

import Loader from "../../components/loader/Loader.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import "./wishlistPage.css"
const WishlistPage = () => {
  const { loader } = useWishlist();

  return loader ? (
    <div
      style={{
        minWidth: "90vw",
        minHeight: "10000vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}

    >
      <Loader size={5} />
    </div>
  ) : (
    <div className="wishlistPage">
    <WishlistGrid />
    </div>
  );
};

export default WishlistPage;
