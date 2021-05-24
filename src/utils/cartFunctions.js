import axios from "axios";

export async function addToCart(cartDispatch, id) {
  try {
    let { data } = await axios.post(`/cart`, {
      productId: id,
      action: "ADD",
    });

    if (data.status === "success") {
      cartDispatch({ type: "ADD", payload: data.product });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function quantityManagerInCart(cartDispatch, type, id) {
  try {
    let { data } = await axios.post("/cart", {
      productId: id,
      action: type,
    });
    if (data.status === "success") {
      cartDispatch({ type: type, payload: data.product });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function removeFromCart(cartDispatch, productId) {
 
  try {
    let {  data } = await axios.delete(`/cart`, {
      params: { productId },
    });
   
    if (data.status === "success") {
      cartDispatch({ type: "REMOVE", payload: data.product });
    }
  } catch (error) {
    console.error(error);
  }
}
