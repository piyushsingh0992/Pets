

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

export async function addToCart(cartDispatch, productId, toastDispatch,    token,) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));

  if (loginStatus && loginStatus.loginStatus) {
    addToCartServer(cartDispatch, productId, toastDispatch,token);
  } else {
    addToCartLocal(cartDispatch, productId, toastDispatch);
  }
}

export async function quantityManagerInCart(
  cartDispatch,
  type,
  productId,
  toastDispatch,token
) {
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    quantityManagerInCartServer(cartDispatch, type, productId, toastDispatch,token);
  } else {
    quantityManagerInCartLocal(cartDispatch, type, productId, toastDispatch);
  }
}

export async function removeFromCart(cartDispatch, productId, toastDispatch,token) {
 
  let loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
  if (loginStatus && loginStatus.loginStatus) {
    removeFromCartServer(cartDispatch, productId, toastDispatch,token);
  } else {
    removeFromCartLocal(cartDispatch, productId, toastDispatch);
  }
}
