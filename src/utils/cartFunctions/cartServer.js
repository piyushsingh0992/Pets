import axios from "axios";

export async function addToCartServer(cartDispatch, id, toastDispatch) {
  try {
    let { user } = JSON.parse(localStorage.getItem("loginStatus"));
    let { data } = await axios.post(
      `https://pets-1.piyushsingh6.repl.co/cart/${id}`,
      {
        action: "ADD",
        userKey: user._id,
      }
    );

    if (data.status === "success") {
      cartDispatch({ type: "ADD", payload: data.product });
      toastDispatch("success","ADDED to Cart");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function quantityManagerInCartServer(
  cartDispatch,
  type,
  id,
  toastDispatch
) {
  let { user } = JSON.parse(localStorage.getItem("loginStatus"));
  try {
    let { data } = await axios.post(
      `https://pets-1.piyushsingh6.repl.co/cart/${id}`,
      {
        action: type,
        userKey: user._id,
      }
    );

    if (data.status === "success") {
      cartDispatch({ type: type, payload: data.product });
      if (type === "INCREASE") {
        toastDispatch( "success","Quantity Increased");
      } else if (type === "DECREASE") {
        toastDispatch( "success", "Quantity Decreased");
      }
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
  let { user } = JSON.parse(localStorage.getItem("loginStatus"));
  try {
    let { data } = await axios.delete(
      `https://pets-1.piyushsingh6.repl.co/cart/${productId}`,
      {
        data: { userKey: user._id },
      }
    );

    if (data.status === "success") {
      cartDispatch({ type: "REMOVE", payload: data.product });
      toastDispatch( "success",
        "Removed from Cart"
      );
    }
  } catch (error) {
    console.error(error);
  }
}
