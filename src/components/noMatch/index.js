import React from "react";
import noMatch from "../../utils/images/icons/noMatch.png";
import "./noMatch.css";
const NoMatch = ({ searchTerm }) => {
  return (
    <div className="noMatch">
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
