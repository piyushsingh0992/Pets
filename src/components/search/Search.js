import React from 'react';
import "./search.css";
import search from "../../utils/images/icons/search.svg";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
const Search = () => {
  const { language } = useLanguage();
    return (
        <div className="search">
          <img src={search} className="search-icon" />
          <input placeholder={`${language.search}`} required/>
        </div>
    );
};

export default Search;