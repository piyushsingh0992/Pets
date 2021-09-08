import React, { useState, useEffect } from "react";
import "./style.css";

import Loader from "../../components/loader";

import { useLocation } from "react-router-dom";
import SearchGrid from "../../components/searchGrid";
import { useWishlist } from "../../contexts/wishlistContext";
import { checkingCartAndWishlist } from "../../utils/common.js";
import { useCart } from "../../contexts/cartContext";
import { apiCall } from "../../apiCall";
import { useError } from "../../contexts/errorContext";
import { useTheme } from "../../contexts/themeContext";
const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("search");
  const [loader, loaderSetter] = useState(false);
  const [allProducts, allProductSetter] = useState([]);
  const { wishlistState } = useWishlist();
  const [searchMessage, searchMessageSetter] = useState("Search Results");
  const { cartState } = useCart();
  const { errorDispatch } = useError();
  const {theme}=useTheme();

  useEffect(() => {
    async function searchCall(searchTerm) {
      loaderSetter(true);

      let { data, success } = await apiCall("GET", `search/${searchTerm}`);

      if (success === true) {
        searchMessageSetter(data.message);
        allProductSetter(data.products);
        loaderSetter(false);
      } else {
        errorDispatch(false);
      }
    }
    searchCall(searchTerm);
  }, [searchTerm]);

  let filteredData = checkingCartAndWishlist(
    allProducts,
    cartState,
    wishlistState
  );
  return loader ? (
    <div
      style={{
        minWidth: "90vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader size={5} />
    </div>
  ) : (
    <div className="searchPage">
      <h1 style={{ color: theme.boldText }}>{searchMessage}</h1>
      <SearchGrid searchedData={filteredData} searchTerm={searchTerm} />
    </div>
  );
};

export default SearchPage;
