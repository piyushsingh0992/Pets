import React, { useState, useEffect } from "react";
import "./signin.css";
import pets from "../../utils/images/logo/pets.svg";
import TextField from "../textField/TextField.js";
import Button from "../button/Button.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useLocation, useNavigate } from "react-router-dom";
import { apiCall } from "../../apiCall/apiCall.js";
import { useToast } from "../../contexts/toastContext/toastContext.js";

const Signin = ({ userSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const {
    login: { loginStatus },
    loginDispatch,
  } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [password, passwordSetter] = useState("");
  const [userId, userIdSetter] = useState("");
  const { toastDispatch } = useToast();

  useEffect(() => {
    if (loginStatus) {
      navigate(state?.from ? state.from : "/");
    }
  }, [loginStatus]);

  async function authChecker(userId, password) {
    try {
      let { data, success, message } = await apiCall("POST", "auth", {
        userId,
        password,
      });

      if (success === true) {
        loginDispatch({
          type: "LOGIN",
          payload: { loginStatus: true, token: data.token },
        });

        localStorage.setItem(
          "loginStatus",
          JSON.stringify({
            loginStatus: true,
            token: data.token,
          })
        );
      } else {
        toastDispatch("error", message);
      }
    } catch (error) {
      toastDispatch("error", "some error");
    }
  }

  return (
    <div
      className="signin"
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <div className="signin-brand-container">
        <img src={pets} className="signin-brand-icon" />
        <h1 className="signin-brand-name">{language.pets}</h1>
      </div>

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
