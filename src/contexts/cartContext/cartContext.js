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
  const { login } = useAuth();
  useEffect(() => {
    if (login) {
      (async function () {
        try {
          loaderSetter(true);
          const { data } = await axios.get(
            "https://pets-1.piyushsingh6.repl.co/cart"
          );
          cartDispatch({ type: "FIRST_LOAD", payload: data.products });
        } catch (error) {
          console.error(error);
        } finally {
          loaderSetter(false);
        }
      })();
    }
  }, [login]);

  return (
    <CartContext.Provider value={{ loader, cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
