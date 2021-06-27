import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { wishListManager } from "./wishlistreducer.js";
import { useAuth } from "../authContext/authContext.js";
const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishListManager, []);
  const [loader, loaderSetter] = useState(false);
  const { login } = useAuth();
  useEffect(() => {
    if (login) {
      (async function () {
        try {
          loaderSetter(true);
          let { data } = await axios.get(
            "https://pets-1.piyushsingh6.repl.co/wishlist"
          );
          wishlistDispatch({ type: "FIRST_LOAD", payload: data.products });
        } catch (error) {
          console.error(error);
        } finally {
          loaderSetter(false);
        }
      })();
    }
  }, [login]);
  return (
    <WishlistContext.Provider
      value={{ loader, wishlistState, wishlistDispatch }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export function useWishlist() {
  return useContext(WishlistContext);
}
