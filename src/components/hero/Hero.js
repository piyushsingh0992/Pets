import React from "react";
import dog from "../../utils/video/dog.mp4";
import Button from "../button/Button.js";
import "./hero.css";
import { useLanguage } from "../../contexts/languageContext/languageContext.js";
import { Link } from "react-router-dom";

const Hero = () => {
  const { language } = useLanguage();
  return (
    <div className="hero">
      <video autoPlay muted loop id="myVideo">
        <source src={dog} type="video/mp4" />
      </video>
      <div className="hero-tagline">
        <h1>{language.tag}</h1>
        <Link to="/products">
          <Button type="primary" text={language.explore} size="explore-btn" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
