import React, { useEffect, useState } from "react";
import "./style.css";
import search from "../../utils/images/icons/search.svg";
import close from "../../utils/images/icons/close.svg";
import { useLanguage } from "../../contexts/languageContext";

import { useLocation, useNavigate } from "react-router-dom";
const Search = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchText = query.get("search");
  const navigate = useNavigate();
  const location = useLocation();

  const { language } = useLanguage();
  const [searchTerm, searchTermSetter] = useState("");

  const [prevLocation, setPrevLocation] = useState("/");

  useEffect(() => {
    if (searchText) {
      searchTermSetter(searchText);
    } else {
      searchTermSetter("");
    }
  }, [location.pathname]);

  function keyListener(e) {
    if (e.keyCode === 13 && searchTerm.length > 1) {
      navigate(`/search?search=${searchTerm}`);
      if (location.pathname !== "/search") {
        setPrevLocation(location.pathname);
      }
    }
  }

  function cancelSearch() {
    searchTermSetter("");
    if (location.pathname === "/search") {
      navigate(prevLocation);
    }
  }

  return (
    <div className="search">
      <img src={search} className="search-icon" />
      <input
        placeholder={`${language.search}`}
        required
        value={searchTerm}
        onChange={(e) => searchTermSetter(e.target.value)}
        onKeyDown={keyListener}
      />
      {searchTerm.length > 0 && (
        <img onClick={cancelSearch} src={close} className="close-icon" />
      )}
    </div>
  );
};

export default Search;
