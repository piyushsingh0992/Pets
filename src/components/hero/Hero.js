import React from "react";
import dog from "./video/dog.mp4";
import Button from "../button/Button.js";
import "./hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <video autoPlay muted loop id="myVideo">
        <source src={dog} type="video/mp4" />
      </video>
      <div className="hero-tagline">
          <h1>The Best a Pet can Get</h1>
          <Button type="primary" text ="Explore"/>
      </div>
    </div>
  );
};

export default Hero;
