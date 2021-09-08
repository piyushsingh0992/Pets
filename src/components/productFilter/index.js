import React, { useState } from "react";
import "./style.css";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductFilter = ({ filterState, filterdispatch }) => {
  const [show, showSetter] = useState(false);
  const { theme } = useTheme();
  const { language } = useLanguage();
  let navigate = useNavigate();
  let { sort, rating, animal, fastDelivery, outOfStock } = filterState;
  const query = new URLSearchParams(useLocation().search);

  function changeHandler(e) {
    query.set(e.target.name, e.target.value);
    query.delete("cateogry")
    navigate(window.location.pathname + "?" + query.toString());
    filterdispatch({ type: e.target.name, payload: e.target.value });
  }

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
            <p
              className="filter-clear-all"
              onClick={(e) => {
                filterdispatch({ type: "CLEAR_ALL" });
                [
                  "cateogry",
                  "FAST_DELIVERY",
                  "ANIMAL",
                  "RATING",
                  "SORT",
                  "OUT_OF_STOCK",
                ].forEach((name) => {
                  query.delete(name);
                });

                navigate(window.location.pathname);
              }}
            >
              {language.filter.clear}
            </p>
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
                name="SORT"
                value="HIGH_TO_LOW"
                onChange={changeHandler}
                checked={sort && sort === "HIGH_TO_LOW"}
              />
            </div>

            <div className="filter-option">
              <label>{language.filter.sort.low}</label>
              <input
                type="radio"
                name="SORT"
                value="LOW_TO_HIGH"
                onChange={changeHandler}
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
                name="RATING"
                value={5}
                onChange={changeHandler}
                checked={rating === "5"}
              />
            </div>
            <div className="filter-option">
              <label>4 {language.filter.rating.above}</label>
              <input
                type="radio"
                name="RATING"
                value={4}
                onChange={changeHandler}
                checked={rating === "4"}
              />
            </div>
            <div className="filter-option">
              <label>3 {language.filter.rating.above}</label>
              <input
                type="radio"
                name="RATING"
                value={3}
                onChange={changeHandler}
                checked={rating === "3"}
              />
            </div>
            <div className="filter-option">
              <label>2 {language.filter.rating.above}</label>
              <input
                type="radio"
                name="RATING"
                value={2}
                onChange={changeHandler}
                checked={rating === "2"}
              />
            </div>
            <div className="filter-option">
              <label>1 {language.filter.rating.above}</label>
              <input
                type="radio"
                name="RATING"
                value={1}
                onChange={changeHandler}
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
                name="ANIMAL"
                value="all"
                onChange={changeHandler}
                checked={animal === "all"}
              />
            </div>
            <div className="filter-option">
              <label>{language.dog}</label>
              <input
                type="radio"
                name="ANIMAL"
                value="dog"
                onChange={changeHandler}
                checked={animal === "dog"}
              />
            </div>
            <div className="filter-option">
              <label>{language.cat}</label>
              <input
                type="radio"
                name="ANIMAL"
                value="cat"
                onChange={changeHandler}
                checked={animal === "cat"}
              />
            </div>
            <div className="filter-option">
              <label>{language.bird}</label>
              <input
                type="radio"
                name="ANIMAL"
                value="bird"
                onChange={changeHandler}
                checked={animal === "bird"}
              />
            </div>
            <div className="filter-option">
              <label>{language.fish}</label>
              <input
                type="radio"
                name="ANIMAL"
                value="fish"
                onChange={changeHandler}
                checked={animal === "fish"}
              />
            </div>
            <div className="filter-option">
              <label>{language.reptile}</label>
              <input
                type="radio"
                name="ANIMAL"
                value="reptile"
                onChange={changeHandler}
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
                value="FAST_DELIVERY"
                name="FAST_DELIVERY"
                onChange={() => {
                  filterdispatch({
                    type: "FAST_DELIVERY",
                    payload: !fastDelivery,
                  });

                  query.set("FAST_DELIVERY", !fastDelivery);
                  navigate(window.location.pathname + "?" + query.toString());
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
              <input
                type="checkbox"
                value="out-of-stock"
                name="out-of-stock"
                onChange={() => {
                  filterdispatch({
                    type: "OUT_OF_STOCK",
                    payload: !outOfStock,
                  });

                  query.set("OUT_OF_STOCK", !outOfStock);
                  navigate(window.location.pathname + "?" + query.toString());
                }}
                checked={outOfStock}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
