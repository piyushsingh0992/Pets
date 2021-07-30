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
    toastDispatch({ type: "success", message: "ADDED to Cart" });
  } else {
    toastDispatch({ type: "error", message });
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
      toastDispatch({ type: "success", message: "Quantity Increased" });
    } else if (type === "DECREASE") {
      toastDispatch({ type: "success", message: "Quantity Decreased" });
    }
  } else {
    toastDispatch({ type: "error", message });
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
    toastDispatch({ type: "success", message: "Removed from Cart" });
  } else {
    toastDispatch({ type: "error", message });
  }
  loaderSetter(false);
}
