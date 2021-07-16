import React, { useState, useEffect } from "react";
import "./searchPage.css";
import axios from "axios";

import Loader from "../../components/loader/Loader.js";

import Card from "../../components/card/Card.js";

import { useLocation } from "react-router-dom";
import SearchGrid from "../../components/searchGrid/SearchGrid.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { checkingCartAndWishlist } from "../../utils/common.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { apiCall } from "../../apiCall/apiCall";
const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("search");
  const [loader, loaderSetter] = useState(false);
  const [allProducts, allProductSetter] = useState([]);
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();

  useEffect(() => {
    (async function () {
    
        loaderSetter(true);

        let { data,success,message } = await apiCall("GET"
          ,"products"
        );
      debugger;
        if(success===true){
          allProductSetter(
            data.products.filter((item) => {
              return item.productName
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            })
          );
          loaderSetter(false);
        }

      
    })();
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
      <h1>Search Results</h1>
      <SearchGrid searchedData={filteredData} searchTerm={searchTerm} />
    </div>
  );
};

export default SearchPage;
