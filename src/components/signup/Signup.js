import React, { useState } from "react";
import pets from "../../utils/images/logo/pets.svg";
import TextField from "../textField/TextField.js";
import Button from "../button/Button.js";
import "./signup.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";

const Signup = ({ userSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      className="signUp"
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <div className="signUp-brand-container">
        <img src={pets} className="signUp-brand-icon" />
        <h1 className="signUp-brand-name">{language.pets}</h1>
      </div>

      <TextField label={language.auth.name} />
      <TextField label={language.auth.email} />
      <TextField label={language.auth.password} />
      <div className="signUp-submit-btn">
        <Button type="primary" text={language.auth.signup} size="signUp-btn" />
        <p style={{ color: theme.boldText }}>
          {language.auth.msg2}

          <span
            className="sign-up"
            onClick={() => {
              userSetter((value) => !value);
            }}
          >
            {language.auth.signin}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
