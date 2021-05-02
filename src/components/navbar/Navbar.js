import React, { useEffect, useState } from "react";
import brandLogo from "./images/brandLogo.svg";
import cart from "./images/cart-white.svg";
import wishlist from "./images/wishlist-white.svg";
import menu from "./images/menu.svg";
import search from "./images/search.svg";
import Badge from "../badge/Badge.js";
import cross from "./images/close.svg";

import "./navbar.css";
const Navbar = () => {
  const [phoneView, phoneViewSetter] = useState(true);

  function phoneViewHandler() {
    phoneViewSetter((value) => !value);
    console.log("clicked");
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="brand-container">
          <img src={brandLogo} className="navbar-brand-icon" />
          <h1 className="navbar-brand-name">PETS</h1>
        </div>
        <div className="navbar-search">
          <img src={search} className="navbar-search-icon" />
          <input placeholder="Search" required/>
        </div>
      </div>
      <div className="navbar-right">
        <div className="route-container">
          <span className="navbar-icon">
            <Badge item={22}>
              <img src={wishlist} />
            </Badge>
          </span>

          <span className="navbar-icon">
            <Badge item={0}>
              <img src={cart} />
            </Badge>
          </span>

          <div className={"navbar-login"}>
            <p>Login</p>
          </div>

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
        <div className="navbar-mobile-slide">
          <div className="navbar-slide-top">
            <div className="brand-container navbar-slide-brand">
              <img src={brandLogo} className="navbar-brand-icon" />
              <h1 className="navbar-brand-name">PETS</h1>
            </div>

            <div className="navbar-mobile-options">
              <Badge item={22}>
                <img src={wishlist} />
              </Badge>
              <p>Wishlist</p>
            </div>

            <div className="navbar-mobile-options">
              <Badge item={22}>
                <img src={cart} />
              </Badge>
              <p>Cart</p>
            </div>
          </div>
          <div className="navbar-slide-Bottom">
            <div className="navbar-mobile-options">
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
