import React from "react";
import "./style.css";


const TextField = ({ label, type, value,onChangeFunction }) => {

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
