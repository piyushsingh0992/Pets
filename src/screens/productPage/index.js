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
    const cateogryFilter = query.get("cateogry");
    const fastDeliveryFilter = query.get("FAST_DELIVERY");
    const animalFilter = query.get("ANIMAL");
    const ratingFilter = query.get("RATING");
    const sortFilter = query.get("SORT");
    const outOfStockFilter = query.get("OUT_OF_STOCK");

    (async function () {
      loaderSetter(true);
      let { success, data, message } = await apiCall("GET", "products");
      if (success === true) {
        productdataFromServerSetter(data.products);
        filterdispatch({ type: "ANIMAL", payload: query.get("animal") });
        cateogryFilter &&
          filterdispatch({
            type: "CATEOGRY",
            payload: cateogryFilter,
          });

        fastDeliveryFilter &&
          filterdispatch({
            type: "FAST_DELIVERY",
            payload: fastDeliveryFilter,
          });

        animalFilter &&
          filterdispatch({
            type: "ANIMAL",
            payload: animalFilter,
          });
        ratingFilter &&
          filterdispatch({
            type: "RATING",
            payload: ratingFilter,
          });
        sortFilter &&
          filterdispatch({
            type: "SORT",
            payload: sortFilter,
          });

        outOfStockFilter &&
          filterdispatch({
            type: "OUT_OF_STOCK",
            payload: outOfStockFilter,
          });
      } else {
        toastDispatch({ type: "error", message });
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
