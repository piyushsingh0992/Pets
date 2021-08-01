import React, { useState, useEffect } from "react";
import "./style.css";
import pets from "../../assets/images/logo/pets.svg";
import TextField from "../textField";
import Button from "../button";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";
import { useAuth } from "../../contexts/authContext";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthChecker } from "../../customHooks/signIn";
const Signin = ({ userSetter, signInDetails, signInDetailsSetter }) => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const { login } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [loader, loaderSetter] = useState(false);
  let { loginStatus } = login;
  useEffect(() => {
    if (loginStatus) {
      navigate(state?.from ? state.from : "/");
    }
  }, [loginStatus]);

  const authChecker = useAuthChecker(loaderSetter);

  const handleChange = (event) => {
    const name = event.target.name;
    signInDetailsSetter((state) => {
      return {
        ...state,
        [name]: event.target.value,
      };
    });
  };
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
        onChangeFunction={handleChange}
        label={language.auth.email}
        value={signInDetails.userId}
        name="userId"
      />

      <TextField
        onChangeFunction={handleChange}
        label={language.auth.password}
        value={signInDetails.password}
        type="Password"
        name="password"
      />
      <div className="signin-submit-btn">
        <Button
          type="primary"
          text={language.auth.signin}
          size="signin-btn"
          clickFunction={() => {
            authChecker(signInDetails);
          }}
          loader={loader}
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
