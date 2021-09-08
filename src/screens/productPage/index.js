import React, { useEffect, useState, useReducer } from "react";
import "./style.css";
import ProductGrid from "../../components/productGrid";
import ProductFilter from "../../components/productFilter";
import Loader from "../../components/loader";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { useLocation } from "react-router-dom";

import {
  filteringData,
  filterManager,
  checkingCartAndWishlist,
} from "../../utils/common.js";

import { apiCall } from "../../apiCall";
import { useToast } from "../../contexts/toastContext";
const ProductPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const { toastDispatch } = useToast();

  const [productdataFromServer, productdataFromServerSetter] = useState([]);
  const [loader, loaderSetter] = useState(false);
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const [filterState, filterdispatch] = useReducer(filterManager, {
    sort: null,
    rating: -1,
    animal: "all",
    fastDelivery: false,
    outOfStock: false,
    category: "all",
  });

  useEffect(() => {
    (async function () {
      loaderSetter(true);
      let { success, data, message } = await apiCall("GET", "products");
      if (success === true) {
        productdataFromServerSetter(data.products);
        filterdispatch({ type: "ANIMAL", payload: query.get("animal") });
        query.get("cateogry") &&
          filterdispatch({
            type: "CATEOGRY",
            payload: query.get("cateogry"),
          });
      } else {
        toastDispatch({type:"error", message});
      }
      loaderSetter(false);
    })();
  }, []);

  let cartUpdatedData = checkingCartAndWishlist(
    productdataFromServer,
    cartState,
    wishlistState
  );
  let filteredData = filteringData(cartUpdatedData, filterState);

  return loader ? (
    <div
      style={{
        minWidth: "90vw",
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader size={5} />
    </div>
  ) : (
    <div className="productPage">
      <ProductFilter
        filterState={filterState}
        filterdispatch={filterdispatch}
      />

      <ProductGrid productData={filteredData} filterdispatch={filterdispatch} />
    </div>
  );
};

export default ProductPage;
