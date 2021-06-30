import React, { useEffect, useState, useReducer } from "react";
import "./productPage.css";
import ProductGrid from "../../components/productGrid/ProductGrid.js";
import ProductFilter from "../../components/productFilter/ProductFilter.js";
import axios from "axios";
import Loader from "../../components/loader/Loader.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useLocation } from "react-router-dom";
import {
  filteringData,
  filterManager,
  checkingCartAndWishlist,
} from "../../utils/common.js";
const ProductPage = () => {
  const query = new URLSearchParams(useLocation().search);

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
      try {
        loaderSetter(true);

        let { data } = await axios.get(
          "https://pets-1.piyushsingh6.repl.co/products"
        );

        productdataFromServerSetter(data.products);
        filterdispatch({ type: "ANIMAL", payload: query.get("animal") });
        query.get("cateogry") &&
          filterdispatch({ type: "CATEOGRY", payload: query.get("cateogry") });
      } catch (error) {
        console.error(error);
      } finally {
        loaderSetter(false);
      }
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
