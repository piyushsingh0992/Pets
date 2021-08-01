import React from "react";
import "./style.css";
import { useAuth } from "../../contexts/authContext";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { logoutNavbar, logoutSideNavbar } from "./common.js";
import { useLogout } from "../../customHooks/logout";
const Logout = ({ type }) => {
  const {
    login: { loginStatus },
    loginDispatch,
  } = useAuth();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const logoutHanlder = useLogout();

  switch (type) {
    case "LOGOUT_NAVBAR":
      return logoutNavbar(loginStatus, language, theme, logoutHanlder);

    case "LOGOUT_SIDENAVBAR":
      return logoutSideNavbar(loginStatus, language, theme, logoutHanlder);

    default:
      return logoutNavbar(loginStatus, language, theme, logoutHanlder);
  }
};

export default Logout;
