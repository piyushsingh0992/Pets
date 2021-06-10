import { Server } from "miragejs";
import { ProductArray } from "../utils/data";
import { findProduct, recommendations, isPresentInCart } from "./common.js";

export const PetsServer = () => {
  let cart = [];
  let wishlist = [];
  let authDataBase = [{ user: "piyush", password: "neog@1997" }];
  return new Server({
    routes() {
      this.namespace = "/";

      // this.post("/authCheck", (schema, request) => {
      //   const { userId, password } = JSON.parse(request.requestBody);
      //   let user = authDataBase.find((item) => item.user === userId);
      //   if (user?.password === password) {
      //     return { status: "success", user };
      //   } else {
      //     return { status: "failure", password };
      //   }
      // });

      // this.post("/recommend", (schema, request) => {
      //   const { productId } = JSON.parse(request.requestBody);
      //   let recommendedArray = recommendations(ProductArray, productId);
      //   return { status: "success", products: recommendedArray };
      // });

      // this.post("/productdetails", (schema, request) => {
      //   const { productId } = JSON.parse(request.requestBody);
      //   let desiredProduct = findProduct(ProductArray, productId);
      //   return { status: "success", product: desiredProduct };
      // });

      // this.get("/products", (schema, request) => {
      //   return { status: "success", products: ProductArray };
      // });

      this.get("/cart", (schema, request) => {
        return { status: "success", products: cart };
      });

      this.post("/cart", (schema, request) => {
        let { productId, action } = JSON.parse(request.requestBody);
        let currentProduct = findProduct(ProductArray, productId);
        let presentIncart = isPresentInCart(cart, productId);

        
        switch (action) {
          case "ADD":
            if (!presentIncart) {
              let newProduct = { ...currentProduct, quantity: 1 };
              cart = [...cart, newProduct];
              return { status: "success", product: newProduct };
            } else {
              return { status: "failure", product: {} };
            }

          case "INCREASE":
            if (presentIncart) {
              cart = cart.map((item) => {
                if (productId === item.id) {
                  return { ...item, quantity: item.quantity + 1 };
                } else {
                  return item;
                }
              });
              let increasedQuantityProduct = {
                ...presentIncart,
                quantity: presentIncart.quantity + 1,
              };
              return { status: "success", product: increasedQuantityProduct };
            } else {
              return { status: "failure", product: presentIncart };
            }

          case "DECREASE":
            if (presentIncart) {
              let decreasedQuantityProduct = presentIncart;
              if (decreasedQuantityProduct.quantity > 1) {
                cart = cart.map((item) => {
                  if (productId === item.id) {
                    return { ...item, quantity: item.quantity - 1 };
                  } else {
                    return item;
                  }
                });
                decreasedQuantityProduct = {
                  ...presentIncart,
                  quantity: presentIncart.quantity - 1,
                };
              } else {
                cart = cart.filter((item) => {
                  if (productId === item.id) {
                    return false;
                  } else {
                    return true;
                  }
                });
                decreasedQuantityProduct = { ...presentIncart, quantity: 0 };
              }

              return { status: "success", product: decreasedQuantityProduct };
            } else {
              return { status: "failure", product: presentIncart };
            }
        }
      });

      this.delete("/cart", (schema, request) => {
        let { productId } = request.queryParams;

        let currentProduct = cart.find((item) => item.id === productId);

        cart = cart.filter((item) => {
          if (item.id === currentProduct.id) {
            return false;
          }
          return true;
        });
        let newProduct = { ...currentProduct, quantity: 0 };

        return { status: "success", product: newProduct };
      });

      // this.get("/wishlist", (schema) => {
      //   return wishlist;
      // });

      // this.post("/wishlist", (schema, request) => {
      //   let { productId } = JSON.parse(request.requestBody);
      //   let currentProduct = ProductArray.find((item) => {
      //     return item.id === productId;
      //   });

      //   wishlist = [...wishlist, { ...currentProduct, wishlist: true }];
      //   let newProduct = { ...currentProduct, wishlist: true };

      //   return { status: "success", product: newProduct };
      // });

      this.delete("/wishlist", (schema, request) => {
        let { productId } = request.queryParams;

        let currentProduct = ProductArray.find((item) => {
          return item.id === productId;
        });
        wishlist = wishlist.filter((item) => {
          if (productId === item.id) {
            return false;
          }
          return true;
        });
        let newProduct = { ...currentProduct, wishlist: false };
        return { status: "success", product: newProduct };
      });
    },
  });
};
