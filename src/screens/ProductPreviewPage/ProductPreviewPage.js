import React, { useState, useEffect } from "react";
import "./productPreviewPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductPreview from "../../components/productPreview/ProductPreview.js";
import Recommend from "../../components/recommend/Recommend.js";
import Loader from "../../components/loader/Loader.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { checkingCartAndWishlist } from "../../utils/common.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { apiCall } from "../../apiCall/apiCall.js";
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
        toastDispatch("error", message);
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

        toastDispatch("error", message);
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
