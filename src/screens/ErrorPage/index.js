import React from "react";
import "./style.css";
import error from "../../utils/images/icons/error.png";
import { useTheme } from "../../contexts/themeContext";
const ErrorPage = () => {
  const { theme } = useTheme();
  return (
    <div className="errorPage">
      <h1>404</h1>
      <h2 style={{ color: theme.boldText }}>Page not Found</h2>
      <p style={{ color: theme.boldText }}>
        Opp's I may have chewed up the power cord
      </p>
      <img src={error} />
    </div>
  );
};

export default ErrorPage;
