import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartManager } from "./cartreducer.js";
import { useAuth } from "../authContext/authContext.js";
import { apiCall } from "../../apiCall";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartManager, []);
  const [loader, loaderSetter] = useState(false);
  const {
    login: { loginStatus, token },
  } = useAuth();

  useEffect(() => {
    let localCart = JSON.parse(localStorage.getItem("cart"));

    if (localCart) {
      (async function () {
        loaderSetter(true);
        let { data, message, success } = await apiCall(
          "POST",
          "products/localCartProducts",
          {
            localCart,
          }
        );

        if (success === true) {
          cartDispatch({ type: "FIRST_LOAD", payload: data.products });
        }
        loaderSetter(false);
      })();
    }
  }, []);

  useEffect(() => {
    if (loginStatus) {
      (async function () {
        let localCart = JSON.parse(localStorage.getItem("cart"));

        loaderSetter(true);
        let { data, message, success } = await apiCall(
          "POST",
          "cart",
          {
            localCart: localCart ? localCart : [],
          },
          token
        );

        if (success === true) {
          cartDispatch({ type: "FIRST_LOAD", payload: data.products });
          localStorage.removeItem("cart");
        }
        loaderSetter(false);
      })();
    }
  }, [loginStatus]);

  return (
    <CartContext.Provider value={{ loader, cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
