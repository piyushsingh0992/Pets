import React from "react";
import "./style.css";
import CartList from "../../components/cartList";
import PriceCalculator from "../../components/priceCalculator";
import Loader from "../../components/loader";
import EmptyCart from "../../components/emptyCart";
import { useCart } from "../../contexts/cartContext";
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
