import React from "react";
import "./priceCalculator.css";
import Button from "../button/Button.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";

const PriceCalculator = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { cartState } = useCart();

  let finalPrice = cartState.reduce((accumulator, state) => {
    return accumulator + state.quantity * state.price;
  }, 0);
  return (
    <div className="priceCalculator">
      <h1>
        {language.checkout} {language.amount}
      </h1>
      <div
        className="priceDetails"
        style={{ backgroundColor: theme.highLightBackground }}
      >
        {cartState.map((item) => {
          return (
            <div className="product-price" style={{ color: theme.primaryText }}>
              <p>
                {item.productName} ({item.quantity})
              </p>
              <p style={{ color: theme.primaryText }}>Rs {item.price}</p>
            </div>
          );
        })}

        <div className="final-amount" style={{ color: theme.boldText }}>
          <p>
            {language.checkout} {language.amount}
          </p>
          <p>Rs {finalPrice}</p>
        </div>
        <div className="priceCalculator-btn-container">
          <Button
            type="primary"
            text={language.checkout}
            size="priceCalculator-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
