import React from "react";
import "./cartList.css";
import CartCard from "../cartCard/CartCard.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";

const CartList = () => {
  const { language } = useLanguage();
  const { cartState } = useCart();

  return (
    <div className="cardList">
      <h1>{language.cart}</h1>
      {cartState.map((item) => {
        return (
          <CartCard
            productImage={item.productImg}
            productName={item.productName}
            price={item.price}
            wishlist={item.wishlist}
            id={item.id}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  );
};

export default CartList;
