import React from "react";
import "./wishlistPage.css";
import WishlistGrid from "../../components/wishlistGrid";
import Loader from "../../components/loader";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";

const WishlistPage = () => {
  const { loader } = useWishlist();

  return loader ? (
    <div
      style={{
        minWidth: "90vw",
        minHeight: "100vh",
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
