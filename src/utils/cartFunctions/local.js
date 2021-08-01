import axios from "axios";
import { apiCall } from "../../apiCall";
export async function addToCartLocal(cartDispatch, id, toastDispatch,loaderSetter) {
  loaderSetter(true);
    let { success, data, message } = await apiCall("GET", `products/${id}`);
    if (success === true) {
      let updatedProduct = { ...data.product, quantity: 1 };
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
        localStorage.setItem(
          "cart",
          JSON.stringify([...cart, { productId: id, quantity: 1 }])
        );
      } else {
        localStorage.setItem(
          "cart",
          JSON.stringify([{ productId: id, quantity: 1 }])
        );
      }
      cartDispatch({ type: "ADD", payload: updatedProduct });
      toastDispatch({type:"success", message:"ADDED to Cart"});
    } else {
      toastDispatch({type:"error", message});
    }
    loaderSetter(false);

}

export async function quantityManagerInCartLocal(
  cartDispatch,
  type,
  id,
  toastDispatch,loaderSetter
) {
  loaderSetter(true)
    let localCart = JSON.parse(localStorage.getItem("cart"));
    if (!localCart) {
      toastDispatch(
        "error",
        "Can't alter quantity of a product not present in the cart"
      );
      return;
    }

    let { success, data, message } = await apiCall("GET", `products/${id}`);
    if (success === true) {
      let currentProduct = data.product;
      switch (type) {
        case "INCREASE":
          localCart = localCart.map((item) => {
            if (item.productId === id) {
              currentProduct.quantity = item.quantity + 1;
              return { ...item, quantity: item.quantity + 1 };
            }
            return item;
          });
          localStorage.setItem("cart", JSON.stringify(localCart));
          cartDispatch({ type: type, payload: currentProduct });
          toastDispatch({type:"success", message:"Quantity Increased"});
          loaderSetter(false);
          break;

        case "DECREASE":
          localCart = localCart
            .map((item) => {
              if (item.productId === id) {
                currentProduct.quantity = item.quantity - 1;
                return { ...item, quantity: item.quantity - 1 };
              }
              return item;
            })
            .filter((item) => {
              if (item.quantity < 1) {
                cartDispatch({ type: "REMOVE", payload: data.product });
                return false;
              }
              return true;
            });

          localStorage.setItem("cart", JSON.stringify(localCart));
          cartDispatch({ type: type, payload: currentProduct });
          toastDispatch({type:"success", message:"Quantity Decreased"});
          loaderSetter(false);
          break;

        default:
          loaderSetter(false);
          break;
      }
    } else {
      toastDispatch({type:"error", message});
      return;
    }
  
}

export async function removeFromCartLocal(
  cartDispatch,
  productId,
  toastDispatch,loaderSetter
) {
  toastDispatch({type:"Error", message:"Log in First"});
}
