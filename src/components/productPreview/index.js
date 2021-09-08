import React from "react";
import "./style.css";
import Rating from "../rating";
import WishListButton from "../wishListButton";
import { useTheme } from "../../contexts/themeContext";
import { useToast } from "../../contexts/toastContext";
import CartButton from "../cartButton";
import share from "../../assets/images/icons/share.png";
const ProductPreview = ({ productDetails }) => {
  const { theme } = useTheme();
  let newPrice = Math.floor(
    productDetails.price - (productDetails.price / 100) * productDetails.off
  );
  const { toastDispatch } = useToast();
  function copyToClipBoard() {
    navigator.clipboard.writeText(
      `https://pets-1997.netlify.app/productdetails/${productDetails._id}`
    );
    toastDispatch({ type: "success", message: "copied to clipboard" });
  }

  return (
    <div
      className="productPreview"
      style={{
        backgroundColor: theme.highLightBackground,
      }}
    >
      <div className="share-product">
        <img src={theme.share} onClick={copyToClipBoard} />
        <div>
          <p
            style={{
              backgroundColor: theme.primaryBackground,
              color: theme.primaryText,
            }}
          >
            <strong>Share with Friends</strong>
          </p>
        </div>
      </div>
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
