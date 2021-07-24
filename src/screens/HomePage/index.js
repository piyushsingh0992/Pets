import React, { useState, useEffect } from "react";
import "./style.css";
import Hero from "../../components/hero";
import DropdownBar from "../../components/dropdownBar";
import Loader from "../../components/loader";
import Grid from "../../components/grid";
import Recommend from "../../components/recommend";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { checkingCartAndWishlist } from "../../utils/common.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { apiCall } from "../../apiCall";

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
