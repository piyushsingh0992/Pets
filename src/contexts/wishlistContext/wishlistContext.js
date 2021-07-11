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
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { apiCall } from "../../apiCall/apiCall";
const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishListManager, []);
  const [loader, loaderSetter] = useState(false);
  const { login } = useAuth();
  const { toastDispatch } = useToast();
  useEffect(() => {
    if (login) {
      (async function () {
        try {
          loaderSetter(true);
          let wishlist = JSON.parse(localStorage.getItem("wishlist"));
          let { user } = JSON.parse(localStorage.getItem("loginStatus"));
          let { data, message, success } = await apiCall("POST", "wishlist", {
            localwishlist: wishlist ? wishlist : [],
            userKey: user._id,
          });
          if (success === true) {
            wishlistDispatch({ type: "FIRST_LOAD", payload: data.products });
            localStorage.removeItem("wishlist");
          }
        } catch (error) {
          console.error(error);
        } finally {
          loaderSetter(false);
        }
      })();
    } else {
      (async function () {
        try {
          loaderSetter(true);
          let wishlist = JSON.parse(localStorage.getItem("wishlist"));
          let { data } = await axios.post(
            "https://pets-1.piyushsingh6.repl.co/wishlist/products/all",
            {
              localwishlist: wishlist ? wishlist : [],
            }
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
