import React, { useState, useReducer } from "react";
import "./productFilter.css";
import Button from "../button/Button";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";

const ProductFilter = ({ filterState, filterdispatch }) => {
  const [show, showSetter] = useState(false);
  const { theme } = useTheme();
  const { language } = useLanguage();
  let { sort, rating, animal, fastDelivery, outOfStock } = filterState;

  return (
    <div>
      <div
        className="product-filter-toggle-btn"
        style={{
          backgroundColor: theme.highLightBackground,
        }}
      >
        <Button
          type="primary"
          clickFunction={() => {
            showSetter((value) => !value);
          }}
          text={language.filter.filter}
        />
      </div>
      <div
        className={`productFilter ${show ? "show" : "hide"}`}
        style={{
          backgroundColor: theme.highLightBackground,
          color: theme.primaryText,
        }}
      >
        <div className="filter-0">
          <div className="fliter-heading">
            <p>{language.filter.filter}</p>
            <p className="filter-clear-all" onClick={(e) => {
                  filterdispatch({ type: "CLEAR_ALL" });
                }}>{language.filter.clear}</p>
          </div>
        </div>
        <div className="fliter-1">
          <div className="fliter-heading">
            <p>{language.filter.sort.sortBy}</p>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <label>{language.filter.sort.high}</label>
              <input
                type="radio"
                name="price"
                value="HIGH_TO_LOW"
                onChange={(e) => {
                  filterdispatch({ type: "SORT", payload: e.target.value });
                }}
                checked={sort && sort === "HIGH_TO_LOW"}
              />
            </div>

            <div className="filter-option">
              <label>{language.filter.sort.low}</label>
              <input
                type="radio"
                name="price"
                value="LOW_TO_HIGH"
                onChange={(e) => {
                  filterdispatch({ type: "SORT", payload: e.target.value });
                }}
                checked={sort && sort === "LOW_TO_HIGH"}
              />
            </div>
          </div>
        </div>

        <div className="fliter-2">
          <div className="fliter-heading">
            <p>{language.filter.rating.rating}</p>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <label>5 {language.filter.rating.only}</label>
              <input
                type="radio"
                name="stars"
                value={5}
                onChange={(e) => {
                  filterdispatch({ type: "RATING", payload: e.target.value });
                }}
                checked={rating === "5"}
              />
            </div>
            <div className="filter-option">
              <label>4 {language.filter.rating.above}</label>
              <input
                type="radio"
                name="stars"
                value={4}
                onChange={(e) => {
                  filterdispatch({ type: "RATING", payload: e.target.value });
                }}
                checked={rating === "4"}
              />
            </div>
            <div className="filter-option">
              <label>3 {language.filter.rating.above}</label>
              <input
                type="radio"
                name="stars"
                value={3}
                onChange={(e) => {
                  filterdispatch({ type: "RATING", payload: e.target.value });
                }}
                checked={rating === "3"}
              />
            </div>
            <div className="filter-option">
              <label>2 {language.filter.rating.above}</label>
              <input
                type="radio"
                name="stars"
                value={2}
                onChange={(e) => {
                  filterdispatch({ type: "RATING", payload: e.target.value });
                }}
                checked={rating === "2"}
              />
            </div>
            <div className="filter-option">
              <label>1 {language.filter.rating.above}</label>
              <input
                type="radio"
                name="stars"
                value={1}
                onChange={(e) => {
                  filterdispatch({ type: "RATING", payload: e.target.value });
                }}
                checked={rating === "1"}
              />
            </div>
          </div>
        </div>

        <div className="fliter-3">
          <div className="fliter-heading">
            <p>{language.filter.petType}</p>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <label>{language.all}</label>
              <input
                type="radio"
                name="animal"
                value="all"
                onChange={(e) => {
                  filterdispatch({ type: "ANIMAL", payload: e.target.value });
                }}
                checked={animal === "all"}
              />
            </div>
            <div className="filter-option">
              <label>{language.dog}</label>
              <input
                type="radio"
                name="animal"
                value="dog"
                onChange={(e) => {
                  filterdispatch({ type: "ANIMAL", payload: e.target.value });
                }}
                checked={animal === "dog"}
              />
            </div>
            <div className="filter-option">
              <label>{language.cat}</label>
              <input
                type="radio"
                name="animal"
                value="cat"
                onChange={(e) => {
                  filterdispatch({ type: "ANIMAL", payload: e.target.value });
                }}
                checked={animal === "cat"}
              />
            </div>
            <div className="filter-option">
              <label>{language.bird}</label>
              <input
                type="radio"
                name="animal"
                value="bird"
                onChange={(e) => {
                  filterdispatch({ type: "ANIMAL", payload: e.target.value });
                }}
                checked={animal === "bird"}
              />
            </div>
            <div className="filter-option">
              <label>{language.fish}</label>
              <input
                type="radio"
                name="animal"
                value="fish"
                onChange={(e) => {
                  filterdispatch({ type: "ANIMAL", payload: e.target.value });
                }}
                checked={animal === "fish"}
              />
            </div>
            <div className="filter-option">
              <label>{language.reptile}</label>
              <input
                type="radio"
                name="animal"
                value="reptile"
                onChange={(e) => {
                  filterdispatch({ type: "ANIMAL", payload: e.target.value });
                }}
                checked={animal === "reptile"}
              />
            </div>
          </div>
        </div>

        <div className="filter-4">
          <div className="fliter-heading">
            <p>{language.filter.delivery.delivery}</p>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <label>{language.filter.delivery.fast}</label>
              <input
                type="checkbox"
                value="fast-delivery"
                onChange={() => {
                  filterdispatch({ type: "FAST_DELIVERY" });
                }}
                checked={fastDelivery}
              />
            </div>
          </div>
        </div>

        <div className="filter-5">
          <div className="fliter-heading">
            <p>{language.filter.other.other}</p>
          </div>
          <div className="filter-options">
            <div className="filter-option">
              <label>{language.filter.other.include}</label>
              <input type="checkbox" value="out-of-stock" onChange={() => {
                  filterdispatch({ type: "OUT_OF_STOCK" });
                }}
                checked={outOfStock}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
