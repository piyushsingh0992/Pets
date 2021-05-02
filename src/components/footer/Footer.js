import React from "react";
import "./footer.css";
import instagram from "./images/instagram.svg";
import github from "./images/github.svg";
import linkedln from "./images/linkedln.svg";
import twitter from "./images/twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        Developed by{" "}
        <a className="footer-primary-link" href="">
          Piyush Singh
        </a>{" "}
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
