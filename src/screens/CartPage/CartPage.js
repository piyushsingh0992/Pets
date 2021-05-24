import React from "react";
import "./cartPage.css";
import CartList from "../../components/cartList/CartList.js";
import PriceCalculator from "../../components/priceCalculator/PriceCalculator.js";
import Loader from "../../components/loader/Loader.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import EmptyCart from "../../components/emptyCart/EmptyCart";

const CartPage = () => {
  const { loader, cartState } = useCart();
  return loader ? (
    <div
      style={{
        minWidth: "90vw",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader size={5} />
    </div>
  ) : cartState.length > 0 ? (
    <div className="cartPage">
      <CartList />
      <PriceCalculator />
    </div>
  ) : (
    <EmptyCart />
  );
};

export default CartPage;
