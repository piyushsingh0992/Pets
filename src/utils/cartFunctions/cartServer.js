import { apiCall } from "../../apiCall/apiCall.js";
export async function addToCartServer(cartDispatch, id, toastDispatch) {
  try {
    let { data, success, message } = await apiCall("POST", `cart/${id}`, {
      action: "ADD",
    });

    if (success === true) {
      cartDispatch({ type: "ADD", payload: data.product });
      toastDispatch("success", "ADDED to Cart");
    } else {
      toastDispatch("error", message);
    }
  } catch (error) {
    console.error(error);
    toastDispatch("error", "Can't add to Cart now");
  }
}

export async function quantityManagerInCartServer(
  cartDispatch,
  type,
  id,
  toastDispatch
) {
  try {
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
  } catch (error) {
    console.error(error);
  }
}

export async function removeFromCartServer(
  cartDispatch,
  productId,
  toastDispatch
) {
  try {
    let { data, success, message } = await apiCall(
      "DELETE",
      `cart/${productId}`
    );

    if (success === true) {
      cartDispatch({ type: "REMOVE", payload: data.product });
      toastDispatch("success", "Removed from Cart");
    } else {
      toastDispatch("error", message);
    }
  } catch (error) {
    console.error(error);
  }
}
