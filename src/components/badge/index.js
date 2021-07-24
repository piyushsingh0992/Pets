import React from "react";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import "./style.css";
const Badge = ({ children, item }) => {
  const { theme } = useTheme();
  return (
    <span className="badge-container">
      <div
        className={`badge ${item > 0 ? "badge-item" : ""}`}
        style={{
          backgroundColor: theme.boldText,
          color: theme.highLightBackground,
        }}
      >
        <span>{item > 0 && item}</span>
      </div>

      {children}
    </span>
  );
};

export default Badge;
