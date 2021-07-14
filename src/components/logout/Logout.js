import React from "react";
import "./logout.css";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { logoutNavbar, logoutSideNavbar } from "./common.js";

const Logout = ({ type }) => {
  const { login:{loginStatus}, loginDispatch } = useAuth();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  function logoutHanlder() {
    loginDispatch({ type: "LOGOUT" });
    cartDispatch({ type: "LOGOUT" });
    wishlistDispatch({ type: "LOGOUT" });
   
  }
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
