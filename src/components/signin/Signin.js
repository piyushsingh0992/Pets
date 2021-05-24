import React, { useState, useEffect } from "react";
import pets from "../../utils/images/logo/pets.svg";
import TextField from "../textField/TextField.js";
import Button from "../button/Button.js";
import "./signin.css";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
const Signin = ({ userSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { login, loginDispatch } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [password, passwordSetter] = useState("");
  const [userId, userIdSetter] = useState("");

  async function authChecker(userId, password) {
    try {
      let { data } = await axios.post(`/authCheck`, {
        userId,
        password,
      });

      if (data.status === "success") {
        loginDispatch({ payload: "LOGIN" });
        localStorage.setItem(
          "loginStatus",
          JSON.stringify({ loginStatus: true })
        );
      }
    } catch (error) {
      console.error({ error });
    }
  }

  if (login === true) {
    debugger;
    console.log({ login });
    navigate(state?.from ? state.from : "/");
    console.log("it exited the navigate but route didn't changed");
  }

  console.log({ login });
  debugger;

  return (
    <div
      className="signin"
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <div className="signin-brand-container">
        <img src={pets} className="signin-brand-icon" />
        <h1 className="signin-brand-name">{language.pets}</h1>
      </div>

      <TextField textValueSetter={userIdSetter} label={language.auth.email} />
      <TextField
        textValueSetter={passwordSetter}
        label={language.auth.password}
      />
      <div className="signin-submit-btn">
        <Button
          type="primary"
          text={language.auth.signin}
          size="signin-btn"
          clickFunction={() => {
            authChecker(userId, password);
          }}
        />
        <p style={{ color: theme.boldText }}>
          {language.auth.msg1}

          <span
            className="sign-in"
            onClick={() => {
              userSetter((value) => !value);
            }}
          >
            {language.auth.signup}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signin;
