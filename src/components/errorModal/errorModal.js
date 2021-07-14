import React from "react";
import "./errorModal.css";
import Button from "../button/Button";

import { useError } from "../../contexts/errorContext/errorContext";
import { useTheme } from "../../contexts/themeContext/themeContext.js";

const ErrorModal = () => {
  const { errorState, errorDispatch } = useError();
  const { theme } = useTheme();
  return (
    <div
      className={errorState ? "errorModal-container" : `hide-errorModal`}
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <div
        className="errorModal"
      >
        <p style={{color:theme.boldText}}>Oops , An error Occured</p>
        <Button
          text="Reload the Page"
          clickFunction={() => {
            window.location.reload();
            errorDispatch("RESOLVE");
          }}
        />
      </div>
    </div>
  );
};

export default ErrorModal;
