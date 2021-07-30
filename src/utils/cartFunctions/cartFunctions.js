

import {
  addToCartLocal,
  quantityManagerInCartLocal,
  removeFromCartLocal,
} from "./cartLocal.js";
import {
  addToCartServer,
  quantityManagerInCartServer,
  removeFromCartServer,
} from "./cartServer.js";

export async function addToCart(cartDispatch, productId, toastDispatch, loaderSetter   ) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));

  if (loginStatus && loginStatus.loginStatus) {
    addToCartServer(cartDispatch, productId, toastDispatch,loaderSetter);
  } else {
    addToCartLocal(cartDispatch, productId, toastDispatch,loaderSetter);
  }
}

export async function quantityManagerInCart(
  cartDispatch,
  type,
  productId,
  toastDispatch,loaderSetter
) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    quantityManagerInCartServer(cartDispatch, type, productId, toastDispatch,loaderSetter);
  } else {
    quantityManagerInCartLocal(cartDispatch, type, productId, toastDispatch,loaderSetter);
  }
}

export async function removeFromCart(cartDispatch, productId, toastDispatch,loaderSetter) {
  
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    removeFromCartServer(cartDispatch, productId, toastDispatch,loaderSetter);
  } else {
    removeFromCartLocal(cartDispatch, productId, toastDispatch,loaderSetter);
  }
}
