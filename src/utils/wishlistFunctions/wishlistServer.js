import { apiCall } from "../../apiCall";

export async function addToWishListServer(
  wishlistDispatch,
  productId,
  toastDispatch,
  loaderSetter
) {
  loaderSetter(true);
  let { data, message, success } = await apiCall(
    "POST",
    `wishlist/${productId}`,
    {
      productId,
    }
  );

  if (success === true) {
    wishlistDispatch({ type: "ADD", payload: data.product });
    toastDispatch({ type: "success", message: "Added to Wishlist" });
  } else {
    toastDispatch({ type: "error", message });
  }
  loaderSetter(false);
}

export async function removeFromWishListServer(
  wishlistDispatch,
  productId,
  toastDispatch,
  loaderSetter
) {
  loaderSetter(true);
  let { data, message, success } = await apiCall(
    "DELETE",
    `wishlist/${productId}`,
    {
      productId,
    }
  );

  if (success === true) {
    wishlistDispatch({ type: "REMOVE", payload: data.product });
    toastDispatch({ type: "success", message: "Removed from  Wishlist" });
  } else {
    toastDispatch({ type: "error", message });
  }
  loaderSetter(false);
}
