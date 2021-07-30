import React, { useState, useEffect } from "react";
import "./style.css";

import { useParams } from "react-router-dom";
import ProductPreview from "../../components/productPreview";
import Recommend from "../../components/recommend";
import Loader from "../../components/loader";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { checkingCartAndWishlist } from "../../utils/common.js";
import { useToast } from "../../contexts/toastContext";
import { apiCall } from "../../apiCall";
const ProductPreviewPage = () => {
  const { productId } = useParams();
  const [productdataFromServer, productdataFromServerSetter] = useState([]);
  const [loader, loaderSetter] = useState(false);
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const [productDetails, productDetailsSetter] = useState({});
  const { toastDispatch } = useToast();

  useEffect(() => {
    (async function () {
      loaderSetter(true);
      let { success, data, message } = await apiCall(
        "GET",
        `products/${productId}`
      );
      if (success === true) {
        productDetailsSetter(data.product);
      } else {
        toastDispatch({type:"error", message});
      }
    })();
  }, [productId]);

  useEffect(() => {
    (async function () {
      let { success, data, message } = await apiCall(
        "GET",
        `recommendation/${productId}`
      );

      if (success === true) {
        productdataFromServerSetter(data.products);
      } else {

        toastDispatch({type:"error", message});
      }
      loaderSetter(false);
    })();
  }, [productId]);

  let filteredData = checkingCartAndWishlist(
    productdataFromServer,
    cartState,
    wishlistState
  );

  let currentProduct = productDetails;

  let wishlistUpdated = wishlistState.find(
    (item) => item._id === currentProduct._id
  );

  if (wishlistUpdated) {
    currentProduct = { ...currentProduct, wishlist: wishlistUpdated.wishlist };
  }

  let cartUpdated = cartState.find((item) => item._id === currentProduct._id);
  if (cartUpdated) {
    currentProduct = { ...currentProduct, quantity: cartUpdated.quantity };
  }

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
    <div className="productPreviewPage">
      <ProductPreview productDetails={currentProduct} />
      <Recommend filteredData={filteredData} />
    </div>
  );
};

export default ProductPreviewPage;
