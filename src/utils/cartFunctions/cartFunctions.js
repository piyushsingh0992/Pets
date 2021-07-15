

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

export async function addToCart(cartDispatch, productId, toastDispatch,    ) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));

  if (loginStatus && loginStatus.loginStatus) {
    addToCartServer(cartDispatch, productId, toastDispatch);
  } else {
    addToCartLocal(cartDispatch, productId, toastDispatch);
  }
}

export async function quantityManagerInCart(
  cartDispatch,
  type,
  productId,
  toastDispatch
) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    quantityManagerInCartServer(cartDispatch, type, productId, toastDispatch);
  } else {
    quantityManagerInCartLocal(cartDispatch, type, productId, toastDispatch);
  }
}

export async function removeFromCart(cartDispatch, productId, toastDispatch) {
 
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    removeFromCartServer(cartDispatch, productId, toastDispatch);
  } else {
    removeFromCartLocal(cartDispatch, productId, toastDispatch);
  }
}
