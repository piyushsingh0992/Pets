import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";

import { wishListManager } from "./wishlistreducer.js";
import { useAuth } from "../authContext/index.js";
import { useToast } from "../../contexts/toastContext";
import { apiCall } from "../../apiCall";
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
          loaderSetter(false);
        
      })();
    }
  }, []);

  useEffect(() => {
    if (loginStatus) {
      (async function () {
        
          loaderSetter(true);
          let wishlist = JSON.parse(localStorage.getItem("wishlist"));


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
          loaderSetter(false);
      
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
