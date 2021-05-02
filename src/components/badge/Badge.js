import React from "react";

import "./badge.css";
const Badge = ({ children, item }) => {
  return (
    <span className="badge-container">
      <div className={`badge ${item > 0 ? "badge-item" : ""}`}>
        <span>{item > 0 && item}</span>
      </div>

      {children}
    </span>
  );
};

export default Badge;
