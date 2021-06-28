import axios from "axios";

function addtoLocalStorage(productId) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist"));
  if (wishlist) {
    wishlist.push(productId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
    localStorage.setItem("wishlist", JSON.stringify([productId]));
  }
}

export async function addToWishListLocal(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  try {
    let { data } = await axios.get(
      `https://pets-1.piyushsingh6.repl.co/products/${productId}`
    );

    if (data.status === "success") {
      addtoLocalStorage(productId);
      wishlistDispatch({
        type: "ADD",
        payload: { ...data.product, wishlist: true },
      });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Added to Wishlist",
      });
    } else {
      toastDispatch({
        trigger: true,
        type: "error",
        message: "Sorry! couldn't add to Wishlist",
      });
    }
  } catch (error) {
    console.error(error);
    toastDispatch({
      trigger: true,
      type: "error",
      message: "Sorry!  couldn't add to Wishlist",
    });
  }
}

function removingFromLocalStorage(productId, toastDispatch) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist"));
  if (wishlist) {
    wishlist = wishlist.filter((id) => {
      if (id === productId) {
        return false;
      }
      return true;
    });
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  } else {
    toastDispatch({
      trigger: true,
      type: "error",
      message: "Sorry! couldn't remove Wishlist Please Try Again",
    });
  }
}

export async function removeFromWishListLocal(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  try {
    let { data } = await axios.get(
      `https://pets-1.piyushsingh6.repl.co/products/${productId}`
    );

    if (data.status === "success") {
      removingFromLocalStorage(productId, toastDispatch);
      wishlistDispatch({ type: "REMOVE", payload: data.product });
      toastDispatch({
        trigger: true,
        type: "success",
        message: "Removed from  Wishlist",
      });
    } else {
      toastDispatch({
        trigger: true,
        type: "error",
        message: "Sorry! couldn't remove Wishlist",
      });
    }
  } catch (error) {
    console.error(error);
    toastDispatch({
      trigger: true,
      type: "error",
      message: "Sorry! couldn't remove Wishlist",
    });
  }
}
