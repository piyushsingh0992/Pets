import React from 'react';
import "./wishlistPage.css";
import WishListGrid from "../../components/wishListGrid/WishListGrid.js";
const WishlistPage = () => {
    return (
        <div className="wishlist">
            <WishListGrid />
        </div>
    );
};

export default WishlistPage;