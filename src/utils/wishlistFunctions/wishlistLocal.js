import axios from "axios";
import { apiCall } from "../../apiCall/apiCall.js";

function addtoLocalStorage(productId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist"));
  if (wishlist) {
    wishlist.push({ productId });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
    localStorage.setItem("wishlist", JSON.stringify([{ productId }]));
  }
}
export async function addToWishListLocal(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  try {
    let { success, data, message } = await apiCall(
      "GET",
      `products/${productId}`
    );

    if (success === true) {
      addtoLocalStorage(productId);
      wishlistDispatch({
        type: "ADD",
        payload: { ...data.product, wishlist: true },
      });
      toastDispatch("success", "Added to Wishlist");
    } else {
      toastDispatch("error", message);
    }
  } catch (error) {
    console.error(error);
    toastDispatch("error", "Sorry!  couldn't add to Wishlist");
  }
}

function removingFromLocalStorage(productId, toastDispatch) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist"));
  if (wishlist) {
    wishlist = wishlist.filter((item) => {
      if (item.productId === productId) {
        return false;
      }
      return true;
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
    toastDispatch("error", "Sorry! couldn't remove Wishlist");
  }
}

export async function removeFromWishListLocal(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  try {
    let { success, data, message } = await apiCall(
      "GET",
      `products/${productId}`
    );

    if (success === true) {
      removingFromLocalStorage(productId, toastDispatch);
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
