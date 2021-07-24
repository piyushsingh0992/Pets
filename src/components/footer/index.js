import React from "react";
import "./style.css";
import instagram from "../../utils/images/icons/instagram.svg";
import github from "../../utils/images/icons/github.svg";
import linkedln from "../../utils/images/icons/linkedln.svg";
import twitter from "../../utils/images/icons/twitter.svg";
import { useTheme } from "../../contexts/themeContext";
import { useLanguage } from "../../contexts/languageContext";

const Footer = () => {
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <div
      className="footer"
      style={{ background: theme.highLightBackground, color: theme.boldText }}
    >
      <p>
        {language.developed}&ensp;
        <a
          className="footer-primary-link"
          href=""
          style={{ color: theme.boldText }}
        >
          {language.name}
        </a>
      </p>

      <div className="footer-icons-container">
        <a className="footer-icon-container" href="">
          <img src={instagram} className="footer-icon" />
        </a>

        <a className="footer-icon-container" href="">
          <img src={github} className="footer-icon" />
        </a>

        <a className="footer-icon-container" href="">
          <img src={linkedln} className="footer-icon" />
        </a>

        <a className="footer-icon-container" href="">
          <img src={twitter} className="footer-icon" />
        </a>
      </div>
    </div>
  );
};
export default Footer;
