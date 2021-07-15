import React, { useState } from "react";
import axios from "axios";
import pets from "../../utils/images/logo/pets.svg";
import TextField from "../textField/TextField.js";
import Button from "../button/Button.js";
import "./signup.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { createAccount } from "./common.js";

const Signup = ({ userSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { toastDispatch } = useToast();

  const [signUpDetails, signUpDetailsSetter] = useState({
    userName: "",
    password: "",
    userId: "",
  });

  function userNameHandler(newUserName) {
    signUpDetailsSetter((value) => {
      return { ...value, userName: newUserName };
    });
  }

  function userIdHandler(newUserId) {
    signUpDetailsSetter((value) => {
      return { ...value, userId: newUserId };
    });
  }
  function passwordHandler(newPassword) {
    signUpDetailsSetter((value) => {
      return { ...value, password: newPassword };
    });
  }

  return (
    <div
      className="signUp"
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <div className="signUp-brand-container">
        <img src={pets} className="signUp-brand-icon" />
        <h1 className="signUp-brand-name">{language.pets}</h1>
      </div>

      <TextField
        onChangeFunction={userNameHandler}
        label={language.auth.name}
        value={signUpDetails.userName}
      />
      <TextField
        onChangeFunction={userIdHandler}
        label={language.auth.email}
        value={signUpDetails.userId}
      />
      <TextField
        onChangeFunction={passwordHandler}
        label={language.auth.password}
        value={signUpDetails.password}
      />
      <div className="signUp-submit-btn">
        <Button
          type="primary"
          text={language.auth.signup}
          size="signUp-btn"
          clickFunction={() => {
            createAccount(signUpDetails, toastDispatch);
          }}
        />
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
