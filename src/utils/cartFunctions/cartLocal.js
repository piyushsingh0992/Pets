import axios from "axios";

export async function addToCartLocal(cartDispatch, id, toastDispatch) {
  try {
    let { data } = await axios.post(
      `https://pets-1.piyushsingh6.repl.co/cart/product/${id}`
    );
    if (data.status === "success") {
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
      toastDispatch({
        trigger: true,
        type: "success",
        message: "ADDED to Cart",
      });
    }
  } catch (error) {
    console.error(error);
  }
}

export async function quantityManagerInCartLocal(
  cartDispatch,
  type,
  id,
  toastDispatch
) {
  try {
    let { data } = await axios.post(
      `https://pets-1.piyushsingh6.repl.co/cart/product/${id}`
    );

    let localCart = JSON.parse(localStorage.getItem("cart"));

    let currentProduct = data.product;

    if (!localCart) {
      throw "Product Not Present";
    }
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
        toastDispatch({
          trigger: true,
          type: "success",
          message: "Quantity Increased",
        });
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
        toastDispatch({
          trigger: true,
          type: "success",
          message: "Quantity decreased",
        });
        break;

      default:
        break;
    }
  } catch (error) {
    console.error(error);
    toastDispatch({
      trigger: true,
      type: "Error",
      message: "sorry ! Error Occured",
    });
  }
}

export async function removeFromCartLocal(
  cartDispatch,
  productId,
  toastDispatch
) {
  toastDispatch({
    trigger: true,
    type: "Error",
    message: "Log in First",
  });
}
