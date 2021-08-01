import React from "react";
import "./style.css";

const TextField = ({ label, type, value, onChangeFunction, name }) => {
  return (
    <span className="textField">
      <input
        className="empty"
        type={type ? type : "text"}
        value={value}
        onChange={onChangeFunction}
        name={name}
        required
      />
      <label>{label}</label>
    </span>
  );
};

export default TextField;
