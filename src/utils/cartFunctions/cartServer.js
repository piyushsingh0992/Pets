import { apiCall } from "../../apiCall";
export async function addToCartServer(
  cartDispatch,
  id,
  toastDispatch,
  loaderSetter
) {
  loaderSetter(true);
  let { data, success, message } = await apiCall("POST", `cart/${id}`, {
    action: "ADD",
  });

  if (success === true) {
    cartDispatch({ type: "ADD", payload: data.product });
    toastDispatch("success", "ADDED to Cart");
  } else {
    toastDispatch("error", message);
  }
  loaderSetter(false);
}

export async function quantityManagerInCartServer(
  cartDispatch,
  type,
  id,
  toastDispatch,
  loaderSetter
) {
  loaderSetter(true);
  let { data, success, message } = await apiCall("POST", `cart/${id}`, {
    action: type,
  });

  if (success === true) {
    cartDispatch({ type: type, payload: data.product });
    if (type === "INCREASE") {
      toastDispatch("success", "Quantity Increased");
    } else if (type === "DECREASE") {
      toastDispatch("success", "Quantity Decreased");
    }
  } else {
    toastDispatch("error", message);
  }
  loaderSetter(false);
}

export async function removeFromCartServer(
  cartDispatch,
  productId,
  toastDispatch,
  loaderSetter
) {
  loaderSetter(true);
  let { data, success, message } = await apiCall("DELETE", `cart/${productId}`);

  if (success === true) {
    cartDispatch({ type: "REMOVE", payload: data.product });
    toastDispatch("success", "Removed from Cart");
  } else {
    toastDispatch("error", message);
  }
  loaderSetter(false);
}
