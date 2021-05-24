import React, { useState, useEffect } from "react";
import axios from "axios";
import "./productPreviewPage.css";

import ProductPreview from "../../components/productPreview/ProductPreview.js";
import Recommend from "../../components/recommend/Recommend.js";
import Loader from "../../components/loader/Loader.js";

import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useParams } from "react-router-dom";
import { checkingCartAndWishlist } from "../../utils/common.js";

const ProductPreviewPage = () => {
  const { productId } = useParams();
  const [productdataFromServer, productdataFromServerSetter] = useState([]);
  const [loader, loaderSetter] = useState(false);
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const [productDetails, productDetailsSetter] = useState({});

  useEffect(() => {
    const source = axios.CancelToken.source();
    (async function () {
      try {
        loaderSetter(true);
        let response = await axios.post(`/productdetails`, {
          cancelToken: source.token,
          productId: productId,
        });


        productDetailsSetter(response.data.product);
      } catch (error) {
        console.error(error.message);
      }
    })();

    return () => {
      source.cancel();
    };
  }, [productId]);

  useEffect(() => {
    let source = axios.CancelToken.source();
    (async function () {
      try {
        let response = await axios.post("/recommend", {
          cancelToken: source.token,
          productId: productId,
        });
        productdataFromServerSetter(response.data.products);
      } catch (error) {
        console.error(error.message);
      } finally {
        loaderSetter(false);
      }
    })();

    return () => {
      source.cancel();
    };
  }, [productId]);

  let filteredData = checkingCartAndWishlist(
    productdataFromServer,
    cartState,
    wishlistState
  );

  let currentProduct = productDetails;


  let wishlistUpdated = wishlistState.find(
    (item) => item.id === currentProduct.id
  );

  if (wishlistUpdated) {
    currentProduct = { ...currentProduct, wishlist: wishlistUpdated.wishlist };
  }


  let cartUpdated = cartState.find((item) => item.id === currentProduct.id);
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
