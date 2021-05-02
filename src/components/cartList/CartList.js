import React from "react";
import "./cartList.css";
import CartCard from "../cartCard/CartCard.js";
const CartList = () => {
  return (
    <div className="cardList">
      <h1>My Cart</h1>
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
      <CartCard />
    </div>
  );
};

export default CartList;
