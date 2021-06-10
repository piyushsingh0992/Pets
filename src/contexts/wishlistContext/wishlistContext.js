import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import {wishListManager } from "./wishlistreducer.js";
const WishlistContext = createContext();


export const WishlistProvider = ({ children }) => {
  const [wishlistState, wishlistDispatch] = useReducer(wishListManager, []);

  const [loader, loaderSetter] = useState(false);
  useEffect(() => {
    let source = axios.CancelToken.source();
    (async function () {
      try {
        loaderSetter(true);
        let {data} = await axios.get("https://pets.piyushsingh6.repl.co/wishlist", {
          cancelToken: source.token,
        });
        wishlistDispatch({ type: "FIRST_LOAD", payload: data.products });
      } catch (error) {
        console.error(error);
      } finally {
        loaderSetter(false);
      }
    })();

    return ()=>{
      source.cancel();
    }
  }, []);
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
