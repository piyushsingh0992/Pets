import {
  addToWishListLocal,
  removeFromWishListLocal,
} from "./wishlistLocal.js";
import {
  addToWishListServer,
  removeFromWishListServer,
} from "./wishlistServer.js";

export function addToWishList(wishlistDispatch, productId, toastDispatch, loaderSetter) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    addToWishListServer(wishlistDispatch, productId, toastDispatch,loaderSetter);
  } else {
    addToWishListLocal(wishlistDispatch, productId, toastDispatch,loaderSetter);
  }
}

export function removeFromWishList(wishlistDispatch, productId, toastDispatch, loaderSetter) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    removeFromWishListServer(wishlistDispatch, productId, toastDispatch,loaderSetter);
  } else {
    removeFromWishListLocal(wishlistDispatch, productId, toastDispatch,loaderSetter);
  }
}
