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

const HomePage = () => {
  const [productdataFromServer, productdataFromServerSetter] = useState([]);
  const [loader, loaderSetter] = useState(false);
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();

  useEffect(() => {
    let source = axios.CancelToken.source();
    (async function () {
      try {
        loaderSetter(true);
        let { data } = await axios.get(
          "https://pets.piyushsingh6.repl.co/recommendation",
          {
            cancelToken: source.token,
          }
        );
        productdataFromServerSetter(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        loaderSetter(false);
      }
    })();

    return () => {
      source.cancel();
    };
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
