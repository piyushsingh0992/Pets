import React, { useState } from "react";
import "./style.css";
import downArrowPrimary from "../../utils/images/icons/downArrow-primary.svg";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { Link } from "react-router-dom";
const Dropdown = ({ item, title }) => {
  const { theme } = useTheme();
  let [show, showSetter] = useState(false);

  function showDropDownItem() {
    showSetter((value) => !value);
  }

  return (
    <div
      className="dropdown-container"
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <div
        onClick={showDropDownItem}
        className="dropdown-trigger"
        style={{ backgroundColor: theme.highLightBackground }}
      >
        <p>{title}</p>
        <img src={downArrowPrimary} className="downArrow-primary" />
      </div>
      <div
        className={`dropdown-items-container ${
          show ? "dropdown-show" : "dropdown-hide"
        }`}
        style={{ backgroundColor: "red" }}
      >
        {item &&
          item.map((item) => {
            return (
              <Link className="dropdown-item" to={item.link}>
                <p>{item?.text}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Dropdown;
