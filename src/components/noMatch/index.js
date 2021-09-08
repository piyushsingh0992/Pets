import React from "react";
import noMatch from "../../assets/images/icons/noMatch.png";
import { useTheme } from "../../contexts/themeContext";
import "./style.css";
const NoMatch = ({ searchTerm }) => {
  const { theme } = useTheme();
  return (
    <div className="noMatch" style={{ color: theme.primaryText,textAlign:"center" }}>
      <p>
        Your search
        <span>
          <br />"
          {searchTerm.length > 50
            ? `${searchTerm.slice(0, 30)}...`
            : searchTerm}
          "<br />
        </span>
        did not match any documents.
      </p>
      <img src={noMatch} />
    </div>
  );
};

export default NoMatch;
