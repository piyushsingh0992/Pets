import React from "react";
import Button from "../button/Button";
import Rating from "../rating/Rating";
import product from "./images/dogFood.jpg";
import "./productPreview.css";
const ProductPreview = () => {
  return (
    <div className="productPreview">
      <img src={product} className="product-img" />

      <div className="product-description">
        <div>
        <h1>Product Name</h1>
        <Rating rating={5} />
        </div>
        <p className="product-des">Description</p>
        <div class="product-price-container">
          <p class="Product-new-price">Rs 10000 </p>
          <p class="Product-old-price">Rs 9999</p>
          <p class="Product-percentage-off">5% off</p>
        </div>
        <div className="product-btn-container">
          <Button type="primary" text="Add to Cart" size="product-preview-btn" />
          <Button type="secondary" text="Add to Wishlist" size="product-preview-btn"/>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
