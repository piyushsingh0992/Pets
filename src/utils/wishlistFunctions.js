import axios from "axios";

export async function addToWishList(wishlistDispatch, productId) {
  try {
    let { data } = await axios.post("/wishlist", {
      productId,
    });

    if (data.status === "success") {
      wishlistDispatch({ type: "ADD", payload: data.product });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function removeFromWishList(wishlistDispatch, productId) {
  try {
    let { data } = await axios.delete(`/wishlist`, {
      params: { productId },
    });

    if (data.status === "success") {
      wishlistDispatch({ type: "REMOVE", payload: data.product });
    }
  } catch (error) {
    console.error(error);
  }
}
