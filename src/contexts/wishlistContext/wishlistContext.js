import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

import { wishListManager } from "./wishlistreducer.js";
import { useAuth } from "../authContext/authContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { apiCall } from "../../apiCall/apiCall";
const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishListManager, []);
  const [loader, loaderSetter] = useState(false);
  const {
    login: { loginStatus, token },
  } = useAuth();

  const { toastDispatch } = useToast();

  useEffect(() => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist"));

    if (wishlist) {
      (async function () {
        try {
          loaderSetter(true);

          let { data, message, success } = await apiCall(
            "POST",
            "products/localwishlistProducts",
            {
              localwishlist: wishlist ? wishlist : [],
            }
          );

          if (success === true) {
            wishlistDispatch({ type: "FIRST_LOAD", payload: data.products });
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
          loaderSetter(true);
          let wishlist = JSON.parse(localStorage.getItem("wishlist"));
          let { user } = JSON.parse(localStorage.getItem("loginStatus"));

          let { data, message, success } = await apiCall(
            "POST",
            "wishlist",
            {
              localwishlist: wishlist ? wishlist : [],
            },
            token
          );
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
    }
  }, [loginStatus]);
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
