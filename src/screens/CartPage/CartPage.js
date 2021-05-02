import React from "react";
import "./cartPage.css";
import CartList from "../../components/cartList/CartList.js";
import PriceCalculator from "../../components/priceCalculator/PriceCalculator.js";
const CartPage = () => {
  return (
    <div className="cartPage">
      <CartList />
      <PriceCalculator/>
    </div>
  );
};

export default CartPage;
