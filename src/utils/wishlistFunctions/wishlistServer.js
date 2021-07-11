import axios from "axios";
import { apiCall } from "../../apiCall/apiCall.js";

export async function addToWishListServer(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  let { user } = JSON.parse(localStorage.getItem("loginStatus"));
  try {
    let { data, message, success } = await apiCall(
      "POST",
      `wishlist/${productId}`,
      {
        productId,
        userKey: user._id,
      }
    );

    if (success === true) {
      wishlistDispatch({ type: "ADD", payload: data.product });
      toastDispatch("success", "Added to Wishlist");
    } else {
      toastDispatch("error", message);
    }
  } catch (error) {
    console.error(error);

    toastDispatch("error", "Sorry!  couldn't add to Wishlist");
  }
}

export async function removeFromWishListServer(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  try {
    let { user } = JSON.parse(localStorage.getItem("loginStatus"));

    let { data, message, success } = await apiCall(
      "DELETE",
      `wishlist/${productId}`,
      {
        productId,
        userKey: user._id,
      }
    );

    if (success === true) {
      wishlistDispatch({ type: "REMOVE", payload: data.product });
      toastDispatch("success", "Removed from  Wishlist");
    } else {
      toastDispatch("error", message);
    }
  } catch (error) {
    console.error(error);
    toastDispatch("error", "Sorry! couldn't remove Wishlist");
  }
}
