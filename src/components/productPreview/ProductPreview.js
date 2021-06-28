import React from "react";
import "./productPreview.css";
import Rating from "../rating/Rating";
import WishListButton from "../wishListButton/WishListButton.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import CartButton from "../cartButton/CartButton.js";

const ProductPreview = ({ productDetails }) => {
  const { theme } = useTheme();
  let newPrice = Math.floor(
    productDetails.price - (productDetails.price / 100) * productDetails.off
  );

  return (
    <div
      className="productPreview"
      style={{
        backgroundColor: theme.highLightBackground,
      }}
    >
      <img src={productDetails.productImg} className="product-img" />

      <div className="product-description">
        <div>
          <h1 style={{ color: theme.boldText }}>
            {productDetails.productName}
          </h1>
          <Rating rating={5} />
        </div>
        <p className="product-des" style={{ color: theme.primaryText }}>
          {productDetails.desc}
        </p>
        <div className="product-price-container">
          <p className="Product-new-price" style={{ color: theme.boldText }}>
            Rs {newPrice}
          </p>
          <p className="Product-old-price" style={{ color: theme.primaryText }}>
            Rs {productDetails.price}
          </p>
          <p className="Product-percentage-off">{productDetails.off} % off</p>
        </div>
        <div className="product-btn-container">
          <CartButton
            id={productDetails._id}
            quantity={productDetails?.quantity}
            type="PRODUCT_PREVIW_CART_BUTTON"
          />
          <WishListButton
            type="PRODUCT_PREVIEW"
            text={
              productDetails.wishlist
                ? "Remove from Wishlist"
                : "Add to Wishlist"
            }
            wishlist={productDetails.wishlist}
            id={productDetails._id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
