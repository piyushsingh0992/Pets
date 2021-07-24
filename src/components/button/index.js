import React from "react";
import "./style.css";
import Miniloader from "../miniloader";
function Button({ text, type, clickFunction, size, loader }) {
  function clickHandler() {
    clickFunction && clickFunction();
  }
  return (
    <button
      onClick={clickHandler}
      className={`btn btn-${type ? type : "primary"} ${
        size ? size : "default"
      }`}
    >

      {loader?<Miniloader/>:text}
    </button>
  );
}

export default Button;
