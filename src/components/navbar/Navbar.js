import React, { useState } from "react";
import pets from "../../utils/images/logo/pets.svg";
import cart from "../../utils/images/icons/cart.svg";
import wishlistICON from "../../utils/images/icons/wishlist.svg";
import menu from "../../utils/images/icons/menu.svg";
import Badge from "../badge/Badge.js";
import Search from "../search/Search.js";
import { useTheme } from "../../contexts/themeContext/themeContext.js";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { useWishlist } from "../../contexts/wishlistContext/wishlistContext.js";
import { useCart } from "../../contexts/cartContext/cartContext.js";
import { Link } from "react-router-dom";
import nightIcon from "../../utils/images/icons/dark.svg";
import dayIcon from "../../utils/images/icons/light.svg";
import "./navbar.css";
import Logout from "../logout/Logout.js";
const Navbar = () => {
  const [phoneView, phoneViewSetter] = useState(true);
  const { theme, themeDispatch } = useTheme();
  const { language, languageSetter } = useLanguage();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  let quantityIncart = cartState.reduce((accumulator, state) => {
    return accumulator + state.quantity;
  }, 0);
  function phoneViewHandler() {
    phoneViewSetter((value) => !value);
  }
  return (
    <div
      className="navbar"
      style={{ backgroundColor: theme.highLightBackground }}
    >
      <div className="navbar-left">
        <Link to="/">
          <div className="brand-container">
            <img src={pets} className="navbar-brand-icon" />
            <h1 className="navbar-brand-name">{language.pets}</h1>
          </div>
        </Link>
        <Search />
      </div>
      <div className="navbar-right">
        <div className="route-container">
          <select
            style={{
              backgroundColor: theme.highLightBackground,
              color: theme.boldText,
              borderRadius: "5px",
              padding: "0.15rem 0.3rem ",
            }}
            onChange={(e) => {
              languageSetter({ payload: e.target.value });
            }}
          >
            <option value="English">English</option>
            <option value="Hindi">हिंदी</option>
            <option value="Gujrati">ગુજરાતી</option>
            <option value="Bangla">বাংলা</option>
            <option value="Marathi">मराठी</option>
            <option value="Spanish">Spanish</option>
            <option value="French">french</option>
            <option value="Italian">Italiano</option>
          </select>
          {theme.toggleTo ? (
            <button
              className="themeChange-btn"
              onClick={() => {
                themeDispatch({ payload: "day" });
              }}
              style={{ backgroundColor: theme.primaryBackground }}
            >
              <img src={dayIcon} />
            </button>
          ) : (
            <button
              className="themeChange-btn"
              onClick={() => {
                themeDispatch({ payload: "night" });
              }}
              style={{ backgroundColor: theme.primaryBackground }}
            >
              <img src={nightIcon} />
            </button>
          )}

          <Link to="/wishlist">
            <span className="navbar-icon">
              <Badge item={wishlistState.length}>
                <img src={wishlistICON} />
              </Badge>
            </span>
          </Link>
          <Link to="/cart">
            <span className="navbar-icon">
              <Badge item={quantityIncart}>
                <img src={cart} />
              </Badge>
            </span>
          </Link>
          <Logout />
          <img
            src={menu}
            className={"navbar-menu-icon"}
            onClick={phoneViewHandler}
          />
        </div>
      </div>
      <div
        className={phoneView ? "navbar-slide" : "navbar-slide-show"}
        onClick={phoneViewHandler}
      >
        <div
          className="navbar-mobile-slide"
          style={{ backgroundColor: theme.highLightBackground }}
        >
          <div className="navbar-slide-top">
            <Link to="/">
              <div className="brand-container navbar-slide-brand">
                <img src={pets} className="navbar-brand-icon" />
                <h1 className="navbar-brand-name">{language.pets}</h1>
              </div>
            </Link>
            <Link to="/wishlist">
              <div
                className="navbar-mobile-options"
                style={{ color: theme.boldText }}
              >
                <Badge item={wishlistState.length}>
                  <img src={wishlistICON} />
                </Badge>
                <p>{language.wishlist}</p>
              </div>
            </Link>

            <Link to="/cart">
              <div
                className="navbar-mobile-options"
                style={{ color: theme.boldText }}
              >
                <Badge item={quantityIncart}>
                  <img src={cart} />
                </Badge>
                <p>{language.cart}</p>
              </div>
            </Link>
          </div>
          <div className="navbar-slide-Bottom">
            <Logout type="LOGOUT_SIDENAVBAR" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
