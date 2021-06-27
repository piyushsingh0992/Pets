import React from "react";
import "./logout.css";
import { useAuth } from "../../contexts/authContext/authContext.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { logoutNavbar, logoutSideNavbar } from "./common.js";

const Logout = ({ type }) => {
  const { login, loginDispatch } = useAuth();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  function logoutHanlder() {
    console.log("a");
    loginDispatch({ payload: "LOGOUT" });
    console.log("b");
    cartDispatch({ type: "LOGOUT" });
    console.log("c");
    wishlistDispatch({ type: "LOGOUT" });
    console.log("d");
  }
  switch (type) {
    case "LOGOUT_NAVBAR":
      return logoutNavbar(login, language, theme, logoutHanlder);

    case "LOGOUT_SIDENAVBAR":
      return logoutSideNavbar(login, language, theme, logoutHanlder);

    default:
      return logoutNavbar(login, language, theme, logoutHanlder);
  }
};

export default Logout;
