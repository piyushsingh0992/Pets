import React from "react";
import "./priceCalculator.css";
import Button from "../button/Button.js";
const PriceCalculator = () => {
  return (
    <div className="priceCalculator">
      <h1>Checkout Amount</h1>
      <div className="priceDetails">
        <div className="product-price">
          <p>dog(4)</p>
          <p>Rs 500</p>
        </div>

        <div className="product-price">
          <p>dog(4)</p>
          <p>Rs 500</p>
        </div>

        <div className="product-price">
          <p>dog(4)</p>
          <p>Rs 500</p>
        </div>

        <div className="product-price">
          <p>dog(4)</p>
          <p>Rs 500</p>
        </div>

        <div className="final-amount">
          <p>Total Amount</p>
          <p>Rs 500</p>
        </div>
        <div className="priceCalculator-btn-container">
          <Button type="primary" text="Checkout" size="priceCalculator-btn"/>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
