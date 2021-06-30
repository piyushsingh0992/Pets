import axios from "axios";

export async function addToWishListServer(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  let { user } = JSON.parse(localStorage.getItem("loginStatus"));
  try {
    let { data } = await axios.post(
      `https://pets-1.piyushsingh6.repl.co/wishlist/${productId}`,
      {
        productId,
        userKey: user._id,
      }
    );

    if (data.status === "success") {
      wishlistDispatch({ type: "ADD", payload: data.product });
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

export async function removeFromWishListServer(
  wishlistDispatch,
  productId,
  toastDispatch
) {
  try {
    let { user } = JSON.parse(localStorage.getItem("loginStatus"));

    let { data } = await axios.delete(
      `https://pets-1.piyushsingh6.repl.co/wishlist/${productId}`,
      { data: { productId, userKey: user._id } }
    );

    if (data.status === "success") {
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
