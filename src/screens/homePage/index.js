import React, { useState, useEffect } from "react";
import "./style.css";
import Hero from "../../components/hero";
import DropdownBar from "../../components/dropdownBar";
import Loader from "../../components/loader";
import Grid from "../../components/grid";
import Recommend from "../../components/recommend";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import { checkingCartAndWishlist } from "../../utils/common.js";
import { useToast } from "../../contexts/toastContext";
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
        toastDispatch({ type: "error", message });
      }
      loaderSetter(false);
    })();
  }, []);

  let filteredData = checkingCartAndWishlist(
    productdataFromServer,
    cartState,
    wishlistState
  );

  return (
    <div className="home">
      <DropdownBar />
      <Hero />
      <Grid />
      {loader ? (
        <div
          style={{
            minHeight:"20rem",
            padding:"2rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader size={5} />
        </div>
      ) : (
        <Recommend filteredData={filteredData} />
      )}
    </div>
  );
};

export default HomePage;
