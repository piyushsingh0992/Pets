import axios from "axios";
import {
  ratingHandler,
  sortHandler,
  outOfStockHandler,
  fastDeliveryHandler,
  animalHandler,
  categoryHandler,
} from "./filterFunctions.js";

export function filterManager(state, action) {
  const { type, payload } = action;

  switch (type) {
    case "SORT":
      return { ...state, sort: payload };
    case "RATING":
      return { ...state, rating: payload };
    case "ANIMAL":
      return { ...state, animal: payload, category: "all" };
    case "FAST_DELIVERY":
      return { ...state, fastDelivery: payload };
    case "OUT_OF_STOCK":
      return { ...state, outOfStock: payload };
    case "CLEAR_ALL":
      return {
        sort: null,
        rating: -1,
        animal: "all",
        fastDelivery: false,
        outOfStock: false,
        category: "all",
      };
    case "CATEOGRY":
      return { ...state, category: payload };
    default:
      return state;
  }
}

export function addedToWishlist(productList, wishList) {
  return productList.map((product) => {
    const present = wishList.find((item) => {
      return product._id === item._id;
    });
    if (present) {
      return { ...present, quantity: 0 };
    } else {
      return { ...product, wishlist: false, quantity: 0 };
    }
  });
}

export function addedToCart(productList, cart) {
  return productList.map((product) => {
    const present = cart.find((item) => {
      return product._id === item._id;
    });
    if (present) {
      return { ...product, quantity: present.quantity };
    } else {
      return product;
    }
  });
}

export function checkingCartAndWishlist(
  productdataFromServer,
  cartState,
  wishlistState
) {
  let wishlistUpdatedData = addedToWishlist(
    productdataFromServer,
    wishlistState
  );

  let cartUpdatedData = addedToCart(wishlistUpdatedData, cartState);

  return cartUpdatedData;
}

export function filteringData(productdataFromServer, filterState) {
  const { sort, rating, animal, fastDelivery, outOfStock, category } =
    filterState;

  let sortedData = sortHandler(productdataFromServer, sort);
  let ratedData = ratingHandler(sortedData, rating);
  let animalData = animalHandler(ratedData, animal);
  let categoryData = categoryHandler(animalData, category);
  let outOfStockData = outOfStockHandler(categoryData, outOfStock);
  let filteredData = fastDeliveryHandler(outOfStockData, fastDelivery);

  return filteredData;
}

export function setupAuthExceptionHandler(loginDispatch, navigate) {
  const UNAUTHORIZED = 401;
  const NO_PAGE_FOUND = 404;
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === UNAUTHORIZED) {
        loginDispatch({ type: "LOGOUT" });
        navigate("login");
      }


      else if (error?.response?.status === NO_PAGE_FOUND) {
        navigate("pageNOtFound");
      }
      return Promise.reject(error);
    }
  );
}

export function setupAuthHeaderForServiceCalls(token) {
  if (token) {
    return (axios.defaults.headers.common["auth"] = token);
  }
  delete axios.defaults.headers.common["auth"];
}
