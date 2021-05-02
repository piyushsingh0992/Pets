import React ,{useState}from "react";
import brandLogo from "./images/brandLogo.svg";
import TextField from "../textField/TextField.js";
import Button from "../button/Button.js";
import "./login.css";
const Login = () => {
    const [user,userSetter]=useState(true);
    function userHandler(){
        userSetter(value=>!value);
    }
  return user?<div className="login">
      <div className="login-brand-container">
        <img src={brandLogo} className="login-brand-icon" />
        <h1 className="login-brand-name">PETS</h1>
      </div>
      
      <TextField label="Email"/>
      <TextField label="Password"/>
      <div className="login-submit-btn">
      <Button type="primary" text="Sign in" size="login-btn"/>  
      <p>not a Member yet?<span className="sign-up" onClick={userHandler}>Sign up</span></p>
      </div>
    </div>:<div className="login">
      <div className="login-brand-container">
        <img src={brandLogo} className="login-brand-icon" />
        <h1 className="login-brand-name">PETS</h1>
      </div>
      
      <TextField label="Name"/>
      <TextField label="Email"/>
      <TextField label="Password"/>
      <div className="login-submit-btn">
      <Button type="primary" text="Sign up" size="login-btn"/>  
      <p>Already a Member ?<span className="sign-up" onClick={userHandler}>Sign in</span></p>
      </div>
    </div>
  
};

export default Login;
