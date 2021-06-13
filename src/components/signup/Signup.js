import React, { useState } from "react";
import axios from "axios";
import pets from "../../utils/images/logo/pets.svg";
import TextField from "../textField/TextField.js";
import Button from "../button/Button.js";
import "./signup.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";
const Signup = ({ userSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { toastDispatch } = useToast();
  const [userName, userNameSetter] = useState("");
  const [userId, userIdSetter] = useState("");
  const [password, passwordSetter] = useState("");

  async function createAccount() {
    try {
      let { data } = await axios.post(
        `https://pets.piyushsingh6.repl.co/auth/create`,
        { userName, userId, password }
      );

      if (data.status === "success") {
        userNameSetter("");
        userIdSetter("");
        passwordSetter("");
        toastDispatch({
          trigger: true,
          type: "success",
          message: data.message,
        });
      } else {
        toastDispatch({
          trigger: true,
          type: "error",
          message: data.message
            ? data.message
            : "Error ! Cann't create new account",
        });
      }
    } catch (error) {
      console.log("error");
      toastDispatch({
        trigger: true,
        type: "error",
        message: "Error ! Cann't create new account",
      });
    }
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
        label={language.auth.name}
        valueSetter={userNameSetter}
        value={userName}
      />
      <TextField
        valueSetter={userIdSetter}
        label={language.auth.email}
        value={userId}
      />
      <TextField
        valueSetter={passwordSetter}
        label={language.auth.password}
        value={password}
      />
      <div className="signUp-submit-btn">
        <Button
          type="primary"
          text={language.auth.signup}
          size="signUp-btn"
          clickFunction={createAccount}
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
