import React, { useState } from "react";
import "./dropDown.css";
import downArrowPrimary from "./images/downArrow-primary.svg";
import downArrowBlack from "./images/downArrow-black.svg";

const Dropdown = ({ item,title }) => {
  let [show, showSetter] = useState(false);

  function showDropDownItem() {
    showSetter((value) => !value);
  }

  return (
    <div className="dropdown-container">
      <div onClick={showDropDownItem} className="dropdown-trigger">
        <p>{title}</p> <img src={downArrowPrimary} className="downArrow-primary" />
        <img src={downArrowBlack} className="downArrow-black" />
      </div>
      <div
        className={`dropdown-items-container ${
          show ? "dropdown-show" : "dropdown-hide"
        }`}
      >
        {item &&
          item.map((item) => {
            return (
              <a className="dropdown-item" href={item?.link}>
                <p>{item?.text}</p>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
