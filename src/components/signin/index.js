import React, {  useEffect } from "react";
import "./signin.css";
import pets from "../../utils/images/logo/pets.svg";
import TextField from "../textField";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "../../contexts/toastContext/toastContext.js";
import { authChecker } from "./common.js";

const Signin = ({ userSetter, signInDetails, signInDetailsSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const {
    login: { loginStatus },
    loginDispatch,
  } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { toastDispatch } = useToast();

  useEffect(() => {
    if (loginStatus) {
      navigate(state?.from ? state.from : "/");
    }
  }, [loginStatus]);

  function userIdHandler(newUserId) {
    signInDetailsSetter((value) => {
      return { ...value, userId: newUserId };
    });
  }
  function passwordHandler(newPassword) {
    signInDetailsSetter((value) => {
      return { ...value, password: newPassword };
    });
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
        onChangeFunction={userIdHandler}
        label={language.auth.email}
        value={signInDetails.userId}
      />

      <TextField
        onChangeFunction={passwordHandler}
        label={language.auth.password}
        value={signInDetails.password}
        type="Password"
      />
      <div className="signin-submit-btn">
        <Button
          type="primary"
          text={language.auth.signin}
          size="signin-btn"
          clickFunction={() => {
            authChecker(signInDetails, loginDispatch, toastDispatch);
          }}
        />
        <p style={{ color: theme.boldText }}>
          {language.auth.msg1}

          <span
            className="sign-in"
            onClick={() => {
              signInDetailsSetter({
                password: "",
                userId: "",
              });
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
