import React from "react";
import "./style.css";
const MiniLoader = ({ extraClass }) => {
  return (
    <div className={`miniLoaderContainer ${extraClass && extraClass}`}>
      <div className="miniLoader"></div>
    </div>
  );
};

export default MiniLoader;
