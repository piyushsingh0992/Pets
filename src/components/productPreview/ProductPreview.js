import React from "react";
import "./productPreview.css";

import Button from "../button/Button";
import Rating from "../rating/Rating";
import WishListButton from "../wishListButton/WishListButton.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import plus from "../../utils/images/icons/plus.svg";
import minus from "../../utils/images/icons/minus.svg";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { addToCart, quantityManagerInCart } from "../../utils/cartFunctions.js";

const ProductPreview = ({ productDetails }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { cartDispatch } = useCart();

  const { toastState, toastDispatch } = useToast();
  let newPrice = Math.floor(
    productDetails.price - (productDetails.price / 100) * productDetails.off
  );

  function quantityHandler(type) {
    quantityManagerInCart(cartDispatch, type, productDetails.id, toastDispatch);
  }
  function cartButtonHandler() {
    addToCart(cartDispatch, productDetails.id, toastDispatch);
  }
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
          {productDetails?.quantity > 0 ? (
            <div className="productPreviewQuantityHandler">
              <img
                src={minus}
                onClick={() => {
                  quantityHandler("DECREASE");
                }}
              />
              <p style={{ color: theme.boldText }}>
                {productDetails?.quantity}
              </p>
              <img
                src={plus}
                onClick={() => {
                  quantityHandler("INCREASE");
                }}
              />
            </div>
          ) : (
            <Button
              type="primary"
              text={language.addCart}
              size="product-preview-btn"
              clickFunction={() => {
                cartButtonHandler();
              }}
            />
          )}

          <WishListButton
            text={
              productDetails.wishlist
                ? "Remove from Wishlist"
                : "Add to Wishlist"
            }
            wishlist={productDetails.wishlist}
            id={productDetails.id}
            productPreview
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
