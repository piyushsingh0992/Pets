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
    
    // use effect of wishlist provider
    let source = axios.CancelToken.source();
    (async function () {
      try {
        loaderSetter(true);
        let response = await axios.get("/wishlist", {
          cancelToken: source.token,
        });
        wishlistDispatch({ type: "FIRST_LOAD", payload: response.data });
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
