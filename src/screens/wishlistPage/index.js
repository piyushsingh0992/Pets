import React from "react";
import "./style.css";
import WishlistGrid from "../../components/wishlistgrid";
import Loader from "../../components/loader";
import { useWishlist } from "../../contexts/wishlistContext";

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
