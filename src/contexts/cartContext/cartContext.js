import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartManager } from "./cartreducer.js";
import { useAuth } from "../authContext/authContext.js";
import { apiCall } from "../../apiCall/apiCall";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartState, cartDispatch] = useReducer(cartManager, []);
  const [loader, loaderSetter] = useState(false);
  const {
    login: { loginStatus },
  } = useAuth();

  useEffect(() => {

    let localCart = JSON.parse(localStorage.getItem("cart"));
   
    if (localCart) {
      (async function () {
        try {
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
        } catch (error) {
          console.error(error);
        } finally {
          loaderSetter(false);
        }
      })();
    }
  }, []);

  useEffect(() => {
    if (loginStatus) {
      (async function () {
        try {
          let localCart = JSON.parse(localStorage.getItem("cart"));
          let { user } = JSON.parse(localStorage.getItem("loginStatus"));
          loaderSetter(true);
          let { data, message, success } = await apiCall("POST", "cart", {
            localCart: localCart ? localCart : [],
            userKey: user._id,
          });

          if (success === true) {
            cartDispatch({ type: "FIRST_LOAD", payload: data.products });
            localStorage.removeItem("cart");
          }
        } catch (error) {
          console.error(error);
        } finally {
          loaderSetter(false);
        }
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
