import {
  addToWishListLocal,
  removeFromWishListLocal,
} from "./wishlistLocal.js";
import {
  addToWishListServer,
  removeFromWishListServer,
} from "./wishlistServer.js";

export function addToWishList(wishlistDispatch, productId, toastDispatch) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    addToWishListServer(wishlistDispatch, productId, toastDispatch);
  } else {
    addToWishListLocal(wishlistDispatch, productId, toastDispatch);
  }
}

export function removeFromWishList(wishlistDispatch, productId, toastDispatch) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    removeFromWishListServer(wishlistDispatch, productId, toastDispatch);
  } else {
    removeFromWishListLocal(wishlistDispatch, productId, toastDispatch);
  }
}
