import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { cartManager } from "./cartreducer.js";
import { useAuth } from "../authContext/authContext.js";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartManager, []);
  const [loader, loaderSetter] = useState(false);
  const { login:{loginStatus} } = useAuth();
  useEffect(() => {
    if (loginStatus) {
      (async function () {
        try {
          let localCart = JSON.parse(localStorage.getItem("cart"));
          let { user } = JSON.parse(localStorage.getItem("loginStatus"));
          loaderSetter(true);
          const { data } = await axios.post(
            "https://pets-1.piyushsingh6.repl.co/cart",
            {
              localCart: localCart ? localCart : [],
              userKey: user._id,
            }
          );
          cartDispatch({ type: "FIRST_LOAD", payload: data.products });
          localStorage.removeItem("cart");
        } catch (error) {
          console.error(error);
        } finally {
          loaderSetter(false);
        }
      })();
    } else {
      let localCart = JSON.parse(localStorage.getItem("cart"));

      if (localCart) {
        (async function () {
          try {
            loaderSetter(true);
            const { data } = await axios.post(
              "https://pets-1.piyushsingh6.repl.co/cart/products",
              {
                localCart,
              }
            );
            cartDispatch({ type: "FIRST_LOAD", payload: data.products });
          } catch (error) {
            console.error(error);
          } finally {
            loaderSetter(false);
          }
        })();
      }
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
