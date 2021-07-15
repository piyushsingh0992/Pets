import React, { useState } from "react";
import "./textField.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";

const TextField = ({ label, type, value,onChangeFunction }) => {
  const { theme } = useTheme();
  // const [value, valueSetter] = useState("");

  // function inputValueHandler(e) {
  //   valueSetter(e.target.value);
  //   // textValueSetter(e.target.value);
  // }

  return (
    <span className="textField">
      <input
        className="empty"
        type={type ? type : "text"}
        value={value}
        onChange={(e) => {
          onChangeFunction(e.target.value);
        }}
        required
      />
      <label>{label}</label>
    </span>
  );
};

export default TextField;
