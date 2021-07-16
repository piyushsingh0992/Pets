import { apiCall } from "../../apiCall/apiCall.js";

export async function addToWishListServer(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  let { data, message, success } = await apiCall(
    "POST",
    `wishlist/${productId}`,
    {
      productId,
    }
  );

  if (success === true) {
    wishlistDispatch({ type: "ADD", payload: data.product });
    toastDispatch("success", "Added to Wishlist");
  } else {
    toastDispatch("error", message);
  }
}

export async function removeFromWishListServer(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  let { data, message, success } = await apiCall(
    "DELETE",
    `wishlist/${productId}`,
    {
      productId,
    }
  );

  if (success === true) {
    wishlistDispatch({ type: "REMOVE", payload: data.product });
    toastDispatch("success", "Removed from  Wishlist");
  } else {
    toastDispatch("error", message);
  }
}
