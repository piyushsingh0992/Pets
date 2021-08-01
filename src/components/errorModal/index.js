import React from "react";
import "./style.css";
import Button from "../button";
import { useError } from "../../contexts/errorContext";
import { useTheme } from "../../contexts/themeContext";

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
            errorDispatch(true);
          }}
        />
      </div>
    </div>
  );
};

export default ErrorModal;
