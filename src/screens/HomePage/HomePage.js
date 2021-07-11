import React, { useState, useEffect } from "react";
import "./homePage.css";
import axios from "axios";
import Hero from "../../components/hero/Hero.js";
import DropdownBar from "../../components/dropdownBar/DropdownBar.js";
import Loader from "../../components/loader/Loader.js";
import Grid from "../../components/grid/Grid.js";
import Recommend from "../../components/recommend/Recommend.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { checkingCartAndWishlist } from "../../utils/common.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { apiCall } from "../../apiCall/apiCall.js";

const HomePage = () => {
  const [productdataFromServer, productdataFromServerSetter] = useState([]);
  const [loader, loaderSetter] = useState(false);
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const { toastDispatch } = useToast();

  useEffect(() => {
    (async function () {
      loaderSetter(true);
      let { success, data, message } = await apiCall("GET", `recommendation`);
      if (success === true) {
        productdataFromServerSetter(data.products);
      } else {
        debugger;
        toastDispatch("error", message);
      }
      loaderSetter(false);
    })();
  }, []);

  let filteredData = checkingCartAndWishlist(
    productdataFromServer,
    cartState,
    wishlistState
  );

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
    <div className="home">
      <DropdownBar />
      <Hero />
      <Grid />
      <Recommend filteredData={filteredData} />
    </div>
  );
};

export default HomePage;
