import React, { useEffect, useState } from "react";
import "./style.css";
import search from "../../assets/images/icons/search.svg";
import close from "../../assets/images/icons/close.svg";
import { useLanguage } from "../../contexts/languageContext";
import { useLocation, useNavigate } from "react-router-dom";
import useDebounce from "../../customHooks/debouce";

const Search = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchText = query.get("search");
  const navigate = useNavigate();
  const location = useLocation();
  const { language } = useLanguage();
  const [searchTerm, searchTermSetter] = useState("");
  const [prevLocation, setPrevLocation] = useState("/");
  const searchFunction = useDebounce(searchHandler, 300);


  useEffect(() => {
    searchText ? searchTermSetter(searchText) : searchTermSetter("");
    location.pathname !== "/search" && setPrevLocation(location.pathname);
  }, [location.pathname]);

  function searchHandler(text) {
    text.length <= 0 && location.pathname === "/search"
      ? navigate(prevLocation)
      : navigate(`/search?search=${text}`);
  }

  function cancelSearch() {
    searchTermSetter("");
    navigate(prevLocation);
  }


  return (
    <div className="search">
      <img src={search} className="search-icon" />
      <input
        placeholder={`${language.search}`}
        required
        value={searchTerm}
        onChange={(e) => {
          searchTermSetter(e.target.value);

          searchFunction(e.target.value);
        }}
      />
      {searchTerm.length > 0 && (
        <img onClick={cancelSearch} src={close} className="close-icon" />
      )}
    </div>
  );
};

export default Search;
