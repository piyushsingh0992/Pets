import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import axios from "axios";
import { cartManager } from "./cartreducer.js";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartManager, []);
  const [loader, loaderSetter] = useState(false);

  useEffect(() => {
    let source = axios.CancelToken.source();

    (async function () {
      try {
        loaderSetter(true);
        const response = await axios.get("/cart", {
          cancelToken: source.token,
        });
        cartDispatch({ type: "FIRST_LOAD", payload: response.data.products });
      } catch (error) {
        console.error(error);
      } finally {
        loaderSetter(false);
      }
    })();

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <CartContext.Provider value={{ loader, cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
