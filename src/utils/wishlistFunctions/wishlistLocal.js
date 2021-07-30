import axios from "axios";
import { apiCall } from "../../apiCall";

function addtoLocalStorage(productId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist"));
  if (wishlist) {
    wishlist.push({ productId });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
    localStorage.setItem("wishlist", JSON.stringify([{ productId }]));
  }
}

export async function addToWishListLocal(
  wishlistDispatch,
  productId,
  toastDispatch,loaderSetter
) {
  loaderSetter(true);
  let { success, data, message } = await apiCall(
    "GET",
    `products/${productId}`
  );


  if (success === true) {
    addtoLocalStorage(productId);
    wishlistDispatch({
      type: "ADD",
      payload: { ...data.product, wishlist: true },
    });
    toastDispatch({type:"success", message:"Added to Wishlist"});
  } else {
    toastDispatch({type:"error", message});
  }
  loaderSetter(false);
}

function removingFromLocalStorage(productId, toastDispatch) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist"));
  if (wishlist) {
    wishlist = wishlist.filter((item) => {
      if (item.productId === productId) {
        return false;
      }
      return true;
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
    toastDispatch({type:"error", message:"Sorry! couldn't remove Wishlist"});
  }
}

export async function removeFromWishListLocal(
  wishlistDispatch,
  productId,
  toastDispatch,loaderSetter
) {
  loaderSetter(true);
  let { success, data, message } = await apiCall(
    "GET",
    `products/${productId}`
  );

  if (success === true) {
    removingFromLocalStorage(productId, toastDispatch);
    wishlistDispatch({ type: "REMOVE", payload: data.product });
    toastDispatch({type:"success", message:"Removed from  Wishlist"});
  } else {
    toastDispatch({type:"error", message});
  }
  loaderSetter(false);
}
