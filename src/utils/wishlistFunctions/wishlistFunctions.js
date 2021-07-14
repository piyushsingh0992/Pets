import {
  addToWishListLocal,
  removeFromWishListLocal,
} from "./wishlistLocal.js";
import {
  addToWishListServer,
  removeFromWishListServer,
} from "./wishlistServer.js";

export function addToWishList(wishlistDispatch, productId, toastDispatch,token) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    addToWishListServer(wishlistDispatch, productId, toastDispatch,token);
  } else {
    addToWishListLocal(wishlistDispatch, productId, toastDispatch);
  }
}

export function removeFromWishList(wishlistDispatch, productId, toastDispatch,token) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    removeFromWishListServer(wishlistDispatch, productId, toastDispatch,token);
  } else {
    removeFromWishListLocal(wishlistDispatch, productId, toastDispatch);
  }
}
